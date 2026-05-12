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

const gridToHomeDot = (
  config: FlowCardPlusConfig,
  grid: Flows["grid"],
  newDur: Flows["newDur"]
) => {
  if (!checkShouldShowDots(config) || !grid.state.toHome) return nothing;

  return svg`<circle r="1" class="grid" vector-effect="non-scaling-stroke">
      <animateMotion dur="${newDur.gridToHome}s" repeatCount="indefinite" calcMode="paced">
        <mpath xlink:href="#grid-to-home" />
      </animateMotion>
    </circle>`;
};

export const flowGridToHome = (
  config: FlowCardPlusConfig,
  { battery, grid, individual, solar, newDur, nodeCoords }: Flows
) => {
  const shouldShow =
    grid.has && showLine(config, grid.state.fromGrid) && !config.entities.home?.hide;
  if (!shouldShow) return nothing;

  const gridX = nodeCoords.grid.x + 80;
  const gridY = nodeCoords.grid.y + 40;
  const homeX = nodeCoords.home.x;
  const homeY = nodeCoords.home.y + 40;

  return svg`
      <path
        class="grid ${styleLine(grid.state.toHome || 0, config)}"
        id="grid-to-home"
        d="M ${gridX} ${gridY} L ${homeX} ${homeY}"
      ></path>
      ${gridToHomeDot(config, grid, newDur)}
  `;
};
