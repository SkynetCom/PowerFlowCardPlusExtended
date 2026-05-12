import { type IndividualObject } from "./../../states/raw/individual/get-individual-object";
import { type FlowCardPlusConfig, type NewDur } from "./../../types";
import { html, svg } from "lit";
import { flowBatteryToGrid } from "./battery-to-grid";
import { flowBatteryToHome } from "./battery-to-home";
import { flowGridToHome } from "./grid-to-home";
import { flowSolarToGrid } from "./solar-to-grid";
import { flowSolarToHome } from "./solar-to-home";
import { flowSolarToBattery } from "./solart-to-battery";
import { flowIndividual } from "./individuals";

export interface Flows {
  battery: any;
  grid: any;
  individual: IndividualObject[];
  solar: any;
  newDur: NewDur;
  nodeCoords: any;
}

export const flowElement = (
  config: FlowCardPlusConfig,
  { battery, grid, individual, solar, newDur, nodeCoords }: Flows
) => {
  return html`
  <svg class="pf-canvas-svg" viewBox="0 0 700 400" xmlns="http://www.w3.org/2000/svg">
    ${flowSolarToHome(config, { battery, grid, individual, solar, newDur, nodeCoords })}
    ${flowSolarToGrid(config, { battery, grid, individual, solar, newDur, nodeCoords })}
    ${flowSolarToBattery(config, { battery, individual, solar, newDur, nodeCoords })}
    ${flowGridToHome(config, { battery, grid, individual, solar, newDur, nodeCoords })}
    ${flowBatteryToHome(config, { battery, grid, individual, newDur, nodeCoords })}
    ${flowBatteryToGrid(config, { battery, grid, individual, newDur, nodeCoords })}
    ${flowIndividual(config, { individual, newDur, nodeCoords })}
  </svg>
  `;
};
