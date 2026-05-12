import { type FlowCardPlusConfig } from "./../types";

export const checkShouldShowDots = (config: FlowCardPlusConfig) => {
  if (config.disable_dots === true) {
    return false;
  }
  if (typeof document !== "undefined" && document.visibilityState === "hidden") {
    return false;
  }
  return true;
};
