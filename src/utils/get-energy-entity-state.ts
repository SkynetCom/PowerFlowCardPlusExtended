import { getEntityEnergyFromGrowthMap } from "./../states/utils/energy-period";
import { getEntityStateWh } from "./../states/utils/get-entity-state-wh";
import { type HomeAssistant } from "custom-card-helpers";

export const getEnergyEntityState = (
  hass: HomeAssistant,
  energyGrowthMap?: Record<string, number>,
  useDateSelection?: boolean,
  entity?: string
): number => {
  if (!useDateSelection) {
    return getEntityStateWh(hass, entity);
  }
  if (!energyGrowthMap) throw new Error("Energy growth map is required");
  return getEntityEnergyFromGrowthMap(energyGrowthMap, entity);
};
