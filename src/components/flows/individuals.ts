import { type FlowCardPlusConfig, type NewDur } from "./../../types";
import { checkShouldShowDots } from "./../../utils/check-should-show-dots";
import { computeIndividualFlowRate } from "./../../utils/compute-flow-rate";
import { showLine } from "./../../utils/show-line";
import { styleLine } from "./../../utils/style-line";
import { svg, nothing } from "lit";
import { type Flows } from "./index";

export const flowIndividual = (
  config: FlowCardPlusConfig,
  { individual, newDur, nodeCoords }: { individual: Flows["individual"]; newDur: NewDur; nodeCoords: any }
) => {
  // Home center and edges (node is 80x80)
  const homeCX = nodeCoords.home.x + 40;
  const homeCY = nodeCoords.home.y + 40;
  const homeRight = nodeCoords.home.x + 80;
  const homeTop = nodeCoords.home.y;
  const homeBottom = nodeCoords.home.y + 80;

  return individual.map((ind, i) => {
    if (!ind.has || !showLine(config, ind.state || 0) || config.entities.home?.hide) return nothing;

    const coords = (nodeCoords as any)[`individual${i}`];
    if (!coords) return nothing;

    // Individual center
    const indCX = coords.x + 40;
    const indCY = coords.y + 40;

    // Determine Home anchor point based on individual position relative to Home
    let anchorX = homeCX;
    let anchorY = homeCY;

    if (coords.x > nodeCoords.home.x + 80) {
      // Individual is to the right of Home
      anchorX = homeRight;
      if (coords.y < nodeCoords.home.y) {
        anchorY = homeTop;       // above-right
      } else if (coords.y > nodeCoords.home.y + 80) {
        anchorY = homeBottom;    // below-right
      }
    } else if (coords.x + 80 < nodeCoords.home.x) {
      // Individual is to the left of Home
      anchorX = nodeCoords.home.x;
      anchorY = homeCY;
    } else {
      // Same column as Home
      if (coords.y < nodeCoords.home.y) {
        anchorY = homeTop;
      } else {
        anchorY = homeBottom;
      }
    }

    const pathId = `individual-flow-${i}`;
    const flowDur = newDur.individual[i] || 1.66;

    return svg`
      <path
        id="${pathId}"
        class="${styleLine(ind.state || 0, config)}"
        d="M ${anchorX} ${anchorY} L ${indCX} ${indCY}"
      ></path>
      ${checkShouldShowDots(config) && ind.state && ind.state > 0
        ? svg`<circle r="1" class="individual" vector-effect="non-scaling-stroke">
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

