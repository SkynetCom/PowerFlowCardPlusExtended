import { type FlowCardPlusConfig } from "./../../types";
import { type HomeAssistant } from "custom-card-helpers";
import { getSecondaryState } from "./base";

export const getHomeSecondaryState = (hass: HomeAssistant, config: FlowCardPlusConfig) =>
  getSecondaryState(hass, config, "home");
