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

  // Offset: +6px right at Solar, -6px up at Home (to separate from grid-to-home line)
  const sx = nodeCoords.solar.x + 46;    // 266 — slightly right of Solar center
  const sy = nodeCoords.solar.y + 80;    // 100 — Solar bottom edge
  const hx = nodeCoords.home.x;          // 400 — Home left edge
  const hy = nodeCoords.home.y + 34;     // 224 — slightly above Home center

  // Smooth S-curve: down from Solar, sweep right to Home
  return svg`
      <path
        id="solar-to-home"
        class="solar ${styleLine(solar.state.toHome || 0, config)}"
        d="M ${sx} ${sy} C ${sx} ${sy + 90}, ${hx - 60} ${hy}, ${hx} ${hy}"
      ></path>
      ${solarToHomeDot(config, solar, newDur)}
  `;
};
