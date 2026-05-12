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

const solarToBatteryDot = (
  config: FlowCardPlusConfig,
  solar: Flows["solar"],
  newDur: Flows["newDur"]
) => {
  if (!checkShouldShowDots(config) || !solar.state.toBattery) return nothing;

  return svg`<circle r="1" class="battery-solar" vector-effect="non-scaling-stroke">
      <animateMotion dur="${newDur.solarToBattery}s" repeatCount="indefinite" calcMode="paced">
        <mpath xlink:href="#solar-to-battery" />
      </animateMotion>
    </circle>`;
};

type FlowSolarToBatteryFlows = Pick<Flows, Exclude<keyof Flows, "grid">>;

export const flowSolarToBattery = (
  config: FlowCardPlusConfig,
  { battery, individual, solar, newDur, nodeCoords }: Flows
) => {
  const shouldShow = battery.has && solar.has && showLine(config, solar.state.toBattery || 0);
  if (!shouldShow) return nothing;

  // Straight vertical line — the VERTICAL ARM of the cross
  const cx = nodeCoords.solar.x + 40;    // 260 — center X (same for solar & battery)
  const sy = nodeCoords.solar.y + 80;    // 100 — Solar bottom edge
  const by = nodeCoords.battery.y;       // 370 — Battery top edge

  return svg`
      <path
        id="solar-to-battery"
        class="battery-solar ${styleLine(solar.state.toBattery || 0, config)}"
        d="M ${cx} ${sy} L ${cx} ${by}"
      ></path>
      ${solarToBatteryDot(config, solar, newDur)}
  `;
};
