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
      const nodeBottom = coords.y + 80;
      const curveStartX = indCX - 60;
      const curveEndY = homeCY - 60;
      pathD = `M ${homeRight} ${homeCY} L ${curveStartX} ${homeCY} Q ${indCX} ${homeCY} ${indCX} ${curveEndY} L ${indCX} ${nodeBottom}`;
    } else if (coords.y > nodeCoords.home.y + 80) {
      const nodeTop = coords.y;
      const curveStartX = indCX - 60;
      const curveEndY = homeCY + 60;
      pathD = `M ${homeRight} ${homeCY} L ${curveStartX} ${homeCY} Q ${indCX} ${homeCY} ${indCX} ${curveEndY} L ${indCX} ${nodeTop}`;
    } else {
      const nodeLeft = coords.x;
      pathD = `M ${homeRight} ${homeCY} L ${nodeLeft} ${homeCY}`;
    }

    const flowDur = computeIndividualFlowRate(ind?.field?.calculate_flow_rate, newDur.individual[i] || 2);
    const pathId = `ind-flow-${i}`;

    // Use same pattern as main flow dots (mpath + xlink:href + calcMode paced)
    return svg`
      <path
        id="${pathId}"
        class="${styleLine(ind.state || 0, config)}"
        style="stroke: ${colorVar}; stroke-width: 1; fill: none;"
        d="${pathD}"
      ></path>
      ${checkShouldShowDots(config) && ind.state && ind.state > 0
        ? svg`<circle r="1" vector-effect="non-scaling-stroke"
            style="fill: ${colorVar}; stroke: ${colorVar}; stroke-width: 4;">
            <animateMotion
              dur="${flowDur}s"
              repeatCount="indefinite"
              calcMode="paced"
            >
              <mpath xlink:href="#${pathId}" />
            </animateMotion>
          </circle>`
        : nothing}
    `;
  });
};
