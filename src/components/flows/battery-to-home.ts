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

  const batteryCX = nodeCoords.battery.x + 40;  // 260
  const batteryTop = nodeCoords.battery.y;       // 370
  const homeCY = nodeCoords.home.y + 40;          // 230
  const homeLeft = nodeCoords.home.x;             // 400

  // Cross center is at (batteryCX, homeCY) = (260, 230)
  // Path: vertical from Battery top → curve at cross center → horizontal to Home left
  return svg`
      <path
        id="battery-to-home"
        class="battery-home ${styleLine(battery.state.toHome || 0, config)}"
        d="M ${batteryCX} ${batteryTop} L ${batteryCX} ${homeCY + 20} Q ${batteryCX} ${homeCY} ${batteryCX + 20} ${homeCY} L ${homeLeft} ${homeCY}"
      ></path>
      ${batteryToHomeDot(config, battery, newDur)}
  `;
};
