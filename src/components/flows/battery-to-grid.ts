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

  const batteryX = nodeCoords.battery.x;
  const batteryY = nodeCoords.battery.y + 40;
  const gridX = nodeCoords.grid.x + 40;
  const gridY = nodeCoords.grid.y + 80;

  return svg`
      <path
        id="battery-to-grid"
        class="${styleLine(battery.state.toGrid || grid.state.toBattery || 0, config)}"
        d="M ${batteryX} ${batteryY} Q ${gridX} ${batteryY} ${gridX} ${gridY}"
      ></path>
      ${batteryFromGridDot(config, grid, newDur)} ${batteryToGridDot(config, battery, newDur)}
  `;
};
