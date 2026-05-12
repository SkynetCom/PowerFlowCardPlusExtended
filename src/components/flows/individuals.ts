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

    let pathD: string;

    if (coords.y < nodeCoords.home.y) {
      // --- TOP individual: Recta → Curva ↑ → Recta (enters node from below) ---
      const nodeBottom = coords.y + 80;
      const curveStartX = indCX - 60;
      const curveEndY = homeCY - 60;
      pathD = `M ${homeRight} ${homeCY} L ${curveStartX} ${homeCY} Q ${indCX} ${homeCY} ${indCX} ${curveEndY} L ${indCX} ${nodeBottom}`;

    } else if (coords.y > nodeCoords.home.y + 80) {
      // --- BOTTOM individual: Recta → Curva ↓ → Recta (enters node from above) ---
      const nodeTop = coords.y;
      const curveStartX = indCX - 60;
      const curveEndY = homeCY + 60;
      pathD = `M ${homeRight} ${homeCY} L ${curveStartX} ${homeCY} Q ${indCX} ${homeCY} ${indCX} ${curveEndY} L ${indCX} ${nodeTop}`;

    } else {
      // --- MIDDLE individual: straight horizontal line ---
      const nodeLeft = coords.x;
      pathD = `M ${homeRight} ${homeCY} L ${nodeLeft} ${homeCY}`;
    }

    const pathId = `individual-flow-${i}`;
    const flowDur = newDur.individual[i] || 1.66;

    return svg`
      <path
        id="${pathId}"
        class="${styleLine(ind.state || 0, config)}"
        style="stroke: ${colorVar}; stroke-width: 1; fill: none;"
        d="${pathD}"
      ></path>
      ${checkShouldShowDots(config) && ind.state && ind.state > 0
        ? svg`<circle r="1.5"
            vector-effect="non-scaling-stroke"
            style="fill: ${colorVar}; stroke: ${colorVar}; stroke-width: 4;">
            <animateMotion
              dur="${computeIndividualFlowRate(ind?.field?.calculate_flow_rate, flowDur)}s"
              repeatCount="indefinite"
              calcMode="paced"
              keyPoints="${ind.invertAnimation ? "0;1" : "1;0"}"
              keyTimes="0;1"
            >
              <mpath xlink:href="#${pathId}" />
            </animateMotion>
          </circle>`
        : nothing}
    `;
  });
};

