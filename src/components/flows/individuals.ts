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
  return individual.map((ind, i) => {
    if (!ind.has || !showLine(config, ind.state || 0) || config.entities.home?.hide) return nothing;

    const slotIdx = i;
    const coords = (nodeCoords as any)[`individual${slotIdx}`];
    if (!coords) return nothing;

    // Center of Home is (180, 210)
    // Home boundaries for lines:
    // Top: (180, 170)
    // Bottom: (180, 250)
    // Left: (140, 210)
    // Right: (220, 210)

    const startX = 180;
    const startY = 210;
    const endX = coords.x + 40;
    const endY = coords.y + 40;

    // Determine entry point to Home based on slot position
    let homeAnchorX = 180;
    let homeAnchorY = 210;

    if (coords.x > 180) {
      homeAnchorX = 220; // Right side
      homeAnchorY = 210;
    } else if (coords.x < 180) {
      homeAnchorX = 140; // Left side
      homeAnchorY = 210;
    }

    if (coords.y < 170) {
      homeAnchorY = 170; // Top side
    } else if (coords.y > 250) {
      homeAnchorY = 250; // Bottom side
    }

    const pathId = `individual-flow-${i}`;
    const flowDur = newDur.individual[i] || 0;

    return svg`
      <path
        id="${pathId}"
        class="${styleLine(ind.state || 0, config)}"
        d="M ${homeAnchorX} ${homeAnchorY} L ${endX} ${endY}"
      ></path>
      ${checkShouldShowDots(config) && ind.state > 0
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
