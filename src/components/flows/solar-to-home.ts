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

  const solarX = nodeCoords.solar.x + 40;
  const solarY = nodeCoords.solar.y + 80;
  const homeX = nodeCoords.home.x + 40;
  const homeY = nodeCoords.home.y;

  return svg`
      <path
        id="solar-to-home"
        class="solar ${styleLine(solar.state.toHome || 0, config)}"
        d="M ${solarX} ${solarY} L ${homeX} ${homeY}"
      ></path>
      ${solarToHomeDot(config, solar, newDur)}
  `;
};
