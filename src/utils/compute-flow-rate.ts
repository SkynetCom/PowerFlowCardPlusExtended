import { type FlowCardPlusConfig } from "./../types";

const newFlowRateMapRange = (
  value: number,
  minOut: number,
  maxOut: number,
  minIn: number,
  maxIn: number
): number => {
  if (value > maxIn) return maxOut;
  return ((value - minIn) * (maxOut - minOut)) / (maxIn - minIn) + minOut;
};

const newFlowRate = (config: FlowCardPlusConfig, value: number): number => {
  const maxPower = config.max_expected_power;
  const minPower = config.min_expected_power;
  const maxRate = config.max_flow_rate;
  const minRate = config.min_flow_rate;
  return newFlowRateMapRange(value, maxRate, minRate, minPower, maxPower);
};

const oldFlowRate = (config: FlowCardPlusConfig, value: number, total: number): number => {
  const min = config.min_flow_rate;
  const max = config.max_flow_rate;
  const denominator = total > 0 ? total : value > 0 ? value : 1;
  const ratio = value / denominator;
  return max - ratio * (max - min);
};

export const computeFlowRate = (
  config: FlowCardPlusConfig,
  value: number,
  total: number
): number => {
  const isNewFlowRateModel = config.use_new_flow_rate_model ?? true;
  const result = isNewFlowRateModel
    ? newFlowRate(config, value)
    : oldFlowRate(config, value, total);
  if (!Number.isFinite(result)) {
    return config.max_flow_rate;
  }
  // Quantize to nearest 0.5s to prevent animation restarts on minor value changes
  return Math.round(result * 2) / 2;
};

export const computeIndividualFlowRate = (entry?: boolean | number, value?: number): number => {
  let result: number;
  if (entry !== false && value) {
    result = value;
  } else if (typeof entry === "number") {
    result = entry;
  } else {
    result = 1.66;
  }
  // Quantize to nearest 0.5s to prevent animation restarts on minor value changes
  return Math.round(result * 2) / 2;
};
