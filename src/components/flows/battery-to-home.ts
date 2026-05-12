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

const batteryToHomeDot = (
  config: FlowCardPlusConfig,
  battery: Flows["battery"],
  newDur: Flows["newDur"]
) => {
  if (!checkShouldShowDots(config) || !battery.state.toHome) return nothing;

  return svg`<circle r="1" class="battery-home" vector-effect="non-scaling-stroke">
      <animateMotion dur="${newDur.batteryToHome}s" repeatCount="indefinite" calcMode="paced">
        <mpath xlink:href="#battery-to-home" />
      </animateMotion>
    </circle>`;
};

type FlowBatteryToHomeFlows = Pick<Flows, Exclude<keyof Flows, "solar">>;

export const flowBatteryToHome = (
  config: FlowCardPlusConfig,
  { battery, grid, individual, newDur, nodeCoords }: Flows
) => {
  const shouldShow =
    battery.has && showLine(config, battery.state.toHome) && !config.entities.home?.hide;
  if (!shouldShow) return nothing;

  const batteryX = nodeCoords.battery.x + 40;
  const batteryY = nodeCoords.battery.y;
  const homeX = nodeCoords.home.x + 40;
  const homeY = nodeCoords.home.y + 80;

  return svg`
      <path
        id="battery-to-home"
        class="battery-home ${styleLine(battery.state.toHome || 0, config)}"
        d="M ${batteryX} ${batteryY} L ${homeX} ${homeY}"
      ></path>
      ${batteryToHomeDot(config, battery, newDur)}
  `;
};
