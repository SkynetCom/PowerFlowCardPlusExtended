import { getEntityStateObj } from "./../../../states/utils/get-entity-state-obj";
import { getEntityStateWatts } from "./../../../states/utils/get-entity-state-watts";
import { type FlowCardPlusConfig, type IndividualDeviceType } from "./../../../types";
import { getEnergyEntityState } from "./../../../utils/get-energy-entity-state";
import { isEnergyCard } from "./../../../utils/is-energy-card";
import { isNumberValue } from "./../../../utils/utils";
import { type HomeAssistant } from "custom-card-helpers";

export const getIndividualState = ({
  hass,
  config,
  energyGrowthMap,
  useDateSelection,
  field,
}: {
  hass: HomeAssistant;
  config: FlowCardPlusConfig;
  energyGrowthMap?: Record<string, number>;
  useDateSelection?: boolean;
  field: IndividualDeviceType;
}) => {
  const energyCard = isEnergyCard(config);
  const entity: string = field?.entity;

  if (entity === undefined) return null;

  if (energyCard) {
    return Math.abs(getEnergyEntityState(hass, energyGrowthMap, useDateSelection, entity));
  }

  const individualStateWatts = getEntityStateWatts(hass, entity);

  return Math.abs(individualStateWatts);
};

export const getIndividualSecondaryState = (hass: HomeAssistant, field: IndividualDeviceType) => {
  if (typeof field?.entity !== "string") return null;

  const entityObj = getEntityStateObj(hass, field?.secondary_info?.entity);
  const secondaryState = entityObj?.state;

  if (isNumberValue(secondaryState)) return Number(secondaryState);

  return secondaryState;
};
