import { type FlowCardPlusConfig, type NewDur } from "./../../types";
import { checkShouldShowDots } from "./../../utils/check-should-show-dots";
import { computeIndividualFlowRate } from "./../../utils/compute-flow-rate";
import { getPositionName } from "./../../utils/compute-individual-position";
import { showLine } from "./../../utils/show-line";
import { styleLine } from "./../../utils/style-line";
import { svg, nothing } from "lit";
import { type Flows } from "./index";

export const flowIndividual = (
  config: FlowCardPlusConfig,
  { individual, newDur, nodeCoords }: { individual: Flows["individual"]; newDur: NewDur; nodeCoords: any }
) => {
  // Home edges (node is 80x80)
  const homeRight = nodeCoords.home.x + 80;
  const homeCY = nodeCoords.home.y + 40;

  return individual.map((ind, i) => {
    if (!ind.has || !showLine(config, ind.state || 0) || config.entities.home?.hide) return nothing;

    const coords = (nodeCoords as any)[`individual${i}`];
    if (!coords) return nothing;

    const indCX = coords.x + 40;
    const posName = getPositionName(i);
    const colorVar = `var(--individual-${posName}-color)`;

    // Build absolute path for drawing and relative path for animateMotion
    let pathD: string;
    let motionPath: string;

    if (coords.y < nodeCoords.home.y) {
      // --- TOP individual: Recta → Curva ↑ → Recta (enters node from below) ---
      const nodeBottom = coords.y + 80;
      const curveStartX = indCX - 60;
      const curveEndY = homeCY - 60;
      pathD = `M ${homeRight} ${homeCY} L ${curveStartX} ${homeCY} Q ${indCX} ${homeCY} ${indCX} ${curveEndY} L ${indCX} ${nodeBottom}`;
      // Relative motion path (starts at 0,0 = homeRight,homeCY)
      const dx1 = curveStartX - homeRight;
      const dx2 = indCX - homeRight;
      const dy2 = curveEndY - homeCY;
      const dy3 = nodeBottom - homeCY;
      motionPath = `M 0 0 L ${dx1} 0 Q ${dx2} 0 ${dx2} ${dy2} L ${dx2} ${dy3}`;

    } else if (coords.y > nodeCoords.home.y + 80) {
      // --- BOTTOM individual: Recta → Curva ↓ → Recta (enters node from above) ---
      const nodeTop = coords.y;
      const curveStartX = indCX - 60;
      const curveEndY = homeCY + 60;
      pathD = `M ${homeRight} ${homeCY} L ${curveStartX} ${homeCY} Q ${indCX} ${homeCY} ${indCX} ${curveEndY} L ${indCX} ${nodeTop}`;
      const dx1 = curveStartX - homeRight;
      const dx2 = indCX - homeRight;
      const dy2 = curveEndY - homeCY;
      const dy3 = nodeTop - homeCY;
      motionPath = `M 0 0 L ${dx1} 0 Q ${dx2} 0 ${dx2} ${dy2} L ${dx2} ${dy3}`;

    } else {
      // --- MIDDLE individual: straight horizontal line ---
      const nodeLeft = coords.x;
      pathD = `M ${homeRight} ${homeCY} L ${nodeLeft} ${homeCY}`;
      const dx = nodeLeft - homeRight;
      motionPath = `M 0 0 L ${dx} 0`;
    }

    const flowDur = computeIndividualFlowRate(ind?.field?.calculate_flow_rate, newDur.individual[i] || 2);

    return svg`
      <path
        class="${styleLine(ind.state || 0, config)}"
        style="stroke: ${colorVar}; stroke-width: 1; fill: none;"
        d="${pathD}"
      ></path>
      ${checkShouldShowDots(config) && ind.state && ind.state > 0
        ? svg`<circle r="1.5"
            vector-effect="non-scaling-stroke"
            style="fill: ${colorVar}; stroke: ${colorVar}; stroke-width: 4;">
            <animateMotion
              dur="${flowDur}s"
              repeatCount="indefinite"
              calcMode="linear"
              keyPoints="${ind.invertAnimation ? "0;1" : "1;0"}"
              keyTimes="0;1"
              path="${motionPath}"
            />
          </circle>`
        : nothing}
    `;
  });
};
