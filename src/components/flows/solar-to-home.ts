import { type FlowCardPlusConfig } from "./../../types";
import { checkShouldShowDots } from "./../../utils/check-should-show-dots";
import {
  checkHasBottomIndividual,
  checkHasRightIndividual,
} from "./../../utils/compute-individual-position";
import { showLine } from "./../../utils/show-line";
import { styleLine } from "./../../utils/style-line";
import { html, nothing, svg } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { type Flows } from "./index";

const solarToHomeDot = (
  config: FlowCardPlusConfig,
  solar: Flows["solar"],
  newDur: Flows["newDur"]
) => {
  if (!checkShouldShowDots(config) || !solar.state.toHome) return nothing;

  return svg`<circle r="1" class="solar" vector-effect="non-scaling-stroke">
      <animateMotion dur="${newDur.solarToHome}s" repeatCount="indefinite" calcMode="paced">
        <mpath xlink:href="#solar-to-home" />
      </animateMotion>
    </circle>`;
};

export const flowSolarToHome = (
  config: FlowCardPlusConfig,
  { battery, grid, individual, solar, newDur, nodeCoords }: Flows
) => {
  const shouldShow =
    solar.has && showLine(config, solar.state.toHome || 0) && !config.entities.home?.hide;
  if (!shouldShow) return nothing;

  const solarCX = nodeCoords.solar.x + 40;   // 260
  const solarBottom = nodeCoords.solar.y + 80; // 100
  const homeCY = nodeCoords.home.y + 40;       // 230
  const homeLeft = nodeCoords.home.x;          // 400

  // Cross center is at (solarCX, homeCY) = (260, 230)
  // Path: vertical from Solar bottom → curve at cross center → horizontal to Home left
  return svg`
      <path
        id="solar-to-home"
        class="solar ${styleLine(solar.state.toHome || 0, config)}"
        d="M ${solarCX} ${solarBottom} L ${solarCX} ${homeCY - 20} Q ${solarCX} ${homeCY} ${solarCX + 20} ${homeCY} L ${homeLeft} ${homeCY}"
      ></path>
      ${solarToHomeDot(config, solar, newDur)}
  `;
};
