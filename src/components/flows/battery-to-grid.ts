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

const batteryFromGridDot = (
  config: FlowCardPlusConfig,
  grid: Flows["grid"],
  newDur: Flows["newDur"]
) => {
  if (!checkShouldShowDots(config) || !grid.state.toBattery) return nothing;

  return svg`<circle r="1" class="battery-from-grid" vector-effect="non-scaling-stroke">
      <animateMotion
        dur="${newDur.batteryGrid}s"
        repeatCount="indefinite"
        keyPoints="1;0"
        keyTimes="0;1"
        calcMode="paced"
      >
        <mpath xlink:href="#battery-to-grid" />
      </animateMotion>
    </circle>`;
};

const batteryToGridDot = (
  config: FlowCardPlusConfig,
  battery: Flows["battery"],
  newDur: Flows["newDur"]
) => {
  if (!checkShouldShowDots(config) || !battery.state.toGrid) return nothing;

  return svg`
    <circle r="1" class="battery-to-grid" vector-effect="non-scaling-stroke">
      <animateMotion dur="${newDur.batteryGrid}s" repeatCount="indefinite" calcMode="paced">
        <mpath xlink:href="#battery-to-grid" />
      </animateMotion>
    </circle>
  `;
};

type FlowBatteryToGridFlows = Pick<Flows, Exclude<keyof Flows, "solar">>;

export const flowBatteryToGrid = (
  config: FlowCardPlusConfig,
  { battery, grid, individual, newDur, nodeCoords }: Flows
) => {
  const shouldShow =
    grid.has &&
    battery.has &&
    showLine(config, Math.max(grid.state.toBattery || 0, battery.state.toGrid || 0));
  if (!shouldShow) return nothing;

  // Offset: -6px left at Battery, +12px down at Grid (separate from grid-to-home)
  const bx = nodeCoords.battery.x + 34;   // 254 — slightly left of Battery center
  const by = nodeCoords.battery.y;         // 370 — Battery top edge
  const gx = nodeCoords.grid.x + 80;      // 120 — Grid right edge
  const gy = nodeCoords.grid.y + 52;      // 242 — below Grid center

  // Smooth curve: bottom-left quadrant, from Battery up-left to Grid
  return svg`
      <path
        id="battery-to-grid"
        class="${styleLine(battery.state.toGrid || grid.state.toBattery || 0, config)}"
        d="M ${bx} ${by} C ${bx} ${by - 60}, ${gx} ${gy + 60}, ${gx} ${gy}"
      ></path>
      ${batteryFromGridDot(config, grid, newDur)} ${batteryToGridDot(config, battery, newDur)}
  `;
};
