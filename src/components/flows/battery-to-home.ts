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
  battery: FlowBatteryToHomeFlows["battery"],
  newDur: FlowBatteryToHomeFlows["newDur"]
) => {
  if (!checkShouldShowDots(config) || !battery.state.toHome) return nothing;

  return svg`<circle r="1" class="battery-home" vector-effect="non-scaling-stroke">
      <animateMotion dur="${newDur.batteryToHome}s" repeatCount="indefinite" calcMode="paced">
        <mpath xlink:href="#battery-home" />
      </animateMotion>
    </circle>`;
};

type FlowBatteryToHomeFlows = Pick<Flows, Exclude<keyof Flows, "solar">>;

/**
 * Battery→Home flow: enters Home from the LEFT side.
 * Pattern: straight right > curve up > straight right into Home
 * 
 * Battery is below-left of Home. The flow goes:
 * 1. Horizontally right from Battery's position
 * 2. Curves smoothly upward
 * 3. Continues horizontally right into Home's left side
 */
export const flowBatteryToHome = (
  config: FlowCardPlusConfig,
  { battery, grid, individual, newDur }: FlowBatteryToHomeFlows
) => {
  const shouldShow =
    battery.has && showLine(config, battery.state.toHome) && !config.entities.home?.hide;
  if (!shouldShow) return nothing;

  // Y position at Home level
  const homeY = grid.has ? 50 : 53;

  return html`<div
    class="lines ${classMap({
      high: battery.has || checkHasBottomIndividual(individual),
      "individual1-individual2": !battery.has && individual.every((i) => i?.has),
      "multi-individual": checkHasRightIndividual(individual),
    })}"
  >
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      id="battery-home-flow"
    >
      <path
        id="battery-home"
        class="battery-home ${styleLine(battery.state.toHome || 0, config)}"
        d="M0,100 h20 c0,0 0,-${100 - homeY} 20,-${100 - homeY} H100"
        vector-effect="non-scaling-stroke"
      ></path>
      ${batteryToHomeDot(config, battery, newDur)}
    </svg>
  </div>`;
};
