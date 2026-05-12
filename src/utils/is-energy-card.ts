import { type FlowCardPlusConfig } from "./../types";

export const isEnergyCard = (config: FlowCardPlusConfig) => {
  return config.type.includes("energy-flow-card-plus");
};
