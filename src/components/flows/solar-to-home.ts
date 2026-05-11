import { type FlowCardPlusConfig } from "./../../types";
import { checkShouldShowDots } from "./../../utils/check-should-show-dots";
import {
  checkHasAnyIndividual,
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
        <mpath xlink:href="#solar" />
      </animateMotion>
    </circle>`;
};

/**
 * Solar→Home flow: enters Home from the LEFT side.
 * Pattern: straight right > curve down > straight right into Home
 * 
 * Solar is above-left of Home. The flow goes:
 * 1. Horizontally right from Solar's position
 * 2. Curves smoothly downward
 * 3. Continues horizontally right into Home's left side
 */
export const flowSolarToHome = (
  config: FlowCardPlusConfig,
  { battery, grid, individual, solar, newDur }: Flows
) => {
  const shouldShow =
    solar.has && showLine(config, solar.state.toHome || 0) && !config.entities.home?.hide;
  if (!shouldShow) return nothing;

  // Y position at Home level depends on whether battery/individuals exist
  const homeY = battery.has || checkHasBottomIndividual(individual) ? 50 : solar.has ? 53 : 50;

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
      id="solar-home-flow"
    >
      <path
        id="solar"
        class="solar ${styleLine(solar.state.toHome || 0, config)}"
        d="M0,0 h20 c0,0 0,${homeY} 20,${homeY} H100"
        vector-effect="non-scaling-stroke"
      ></path>
      ${solarToHomeDot(config, solar, newDur)}
    </svg>
  </div>`;
};
