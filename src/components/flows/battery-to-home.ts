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

  // Offset: +6px right at Battery, +6px down at Home (separate from grid-to-home)
  const bx = nodeCoords.battery.x + 46;   // 266 — slightly right of Battery center
  const by = nodeCoords.battery.y;         // 370 — Battery top edge
  const hx = nodeCoords.home.x;            // 400 — Home left edge
  const hy = nodeCoords.home.y + 46;       // 236 — slightly below Home center

  // Smooth S-curve: up from Battery, sweep right to Home
  return svg`
      <path
        id="battery-to-home"
        class="battery-home ${styleLine(battery.state.toHome || 0, config)}"
        d="M ${bx} ${by} C ${bx} ${by - 90}, ${hx - 60} ${hy}, ${hx} ${hy}"
      ></path>
      ${batteryToHomeDot(config, battery, newDur)}
  `;
};
