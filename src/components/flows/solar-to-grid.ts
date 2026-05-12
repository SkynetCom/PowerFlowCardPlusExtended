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

const solarToGridDot = (
  config: FlowCardPlusConfig,
  solar: Flows["solar"],
  newDur: Flows["newDur"]
) => {
  if (!checkShouldShowDots(config) || !solar.state.toGrid || !solar.has) return nothing;

  return svg`<circle r="1" class="return" vector-effect="non-scaling-stroke">
      <animateMotion dur="${newDur.solarToGrid}s" repeatCount="indefinite" calcMode="paced">
        <mpath xlink:href="#solar-to-grid" />
      </animateMotion>
    </circle>`;
};

export const flowSolarToGrid = (
  config: FlowCardPlusConfig,
  { battery, grid, individual, solar, newDur, nodeCoords }: Flows
) => {
  const shouldShow =
    grid.has && grid.hasReturnToGrid && solar.has && showLine(config, solar.state.toGrid || 0);
  if (!shouldShow) return nothing;

  // Start from Solar LEFT edge, curve outward (top-left quadrant) to Grid RIGHT edge
  const sx = nodeCoords.solar.x;         // 220 — Solar left edge
  const sy = nodeCoords.solar.y + 46;    // 66 — slightly below Solar center
  const gx = nodeCoords.grid.x + 80;    // 120 — Grid right edge
  const gy = nodeCoords.grid.y + 28;    // 218 — above Grid center

  // Curve bulges toward top-left corner: goes LEFT first, then curves DOWN
  return svg`
      <path
        id="solar-to-grid"
        class="return ${styleLine(solar.state.toGrid || 0, config)}"
        d="M ${sx} ${sy} C ${gx} ${sy}, ${gx} ${gy - 60}, ${gx} ${gy}"
      ></path>
      ${solarToGridDot(config, solar, newDur)}
  `;
};
