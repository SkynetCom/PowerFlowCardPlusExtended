import { type IndividualObject } from "./../states/raw/individual/get-individual-object";

/**
 * Maximum number of individual sensors that can be displayed.
 * Can be configured via `max_individual_sensors` in card config.
 */
export const MAX_INDIVIDUAL_SENSORS = 10;

const filterUnusedIndividualObjs = (individualObjs: IndividualObject[]): IndividualObject[] => {
  const cloneIndividualObjs = JSON.parse(JSON.stringify(individualObjs)) as IndividualObject[];
  const individualObjsWithHas = cloneIndividualObjs.filter((i) => i?.has);
  return individualObjsWithHas;
};

const getIndividualObjSortPowerMode = (
  individualObjs: IndividualObject[],
  index: number
): IndividualObject | undefined => {
  const filteredIndividualObjs = filterUnusedIndividualObjs(individualObjs);
  return filteredIndividualObjs?.[index] ?? undefined;
};

/**
 * Get individual sensor by position index (0-based).
 * New layout: individuals alternate between top and bottom rows:
 *   0 = right-top (first top), 1 = right-bottom (first bottom),
 *   2 = right-top-2 (second top), 3 = right-bottom-2 (second bottom), etc.
 */
export const getIndividualByIndex = (
  individualObjs: IndividualObject[],
  index: number
): IndividualObject | undefined => {
  return getIndividualObjSortPowerMode(individualObjs, index);
};

/**
 * Get all visible (has=true) individual objects, up to MAX_INDIVIDUAL_SENSORS.
 */
export const getAllVisibleIndividuals = (individualObjs: IndividualObject[]): IndividualObject[] => {
  return filterUnusedIndividualObjs(individualObjs).slice(0, MAX_INDIVIDUAL_SENSORS);
};

/**
 * Split visible individuals into top row (even indices: 0, 2, 4, 6, 8).
 * Max 5 individuals in the top row.
 */
export const getTopRowIndividuals = (individualObjs: IndividualObject[]): IndividualObject[] => {
  const visible = getAllVisibleIndividuals(individualObjs);
  return visible.filter((_, i) => i % 2 === 0).slice(0, 5);
};

/**
 * Split visible individuals into bottom row (odd indices: 1, 3, 5, 7, 9).
 * Max 5 individuals in the bottom row.
 */
export const getBottomRowIndividuals = (individualObjs: IndividualObject[]): IndividualObject[] => {
  const visible = getAllVisibleIndividuals(individualObjs);
  return visible.filter((_, i) => i % 2 === 1).slice(0, 5);
};

/**
 * Check if there are any individual sensors.
 */
export const checkHasAnyIndividual = (individualObjs: IndividualObject[]): boolean =>
  individualObjs?.some((i) => i?.has) ?? false;

/**
 * Check if there are individual sensors in right positions.
 * Kept for backward compatibility - now true if any individual exists.
 */
export const checkHasRightIndividual = (individualObjs: IndividualObject[]): boolean =>
  checkHasAnyIndividual(individualObjs);

/**
 * Check if there are individual sensors in bottom row.
 */
export const checkHasBottomIndividual = (individualObjs: IndividualObject[]): boolean =>
  getBottomRowIndividuals(individualObjs).length > 0;

/**
 * Check if there are extra individual sensors beyond the original 4 positions.
 * Kept for backward compatibility - always returns false now since all are inline.
 */
export const checkHasExtraIndividuals = (_individualObjs: IndividualObject[]): boolean =>
  false;

/**
 * Get extra individual sensors (index 4+).
 * Returns empty array - all individuals are now inline.
 */
export const getExtraIndividuals = (_individualObjs: IndividualObject[]): IndividualObject[] => {
  return [];
};

// ── Backward-compatible getters (used by flow elements and style computations) ──

/**
 * No more left-top position. Returns undefined.
 */
export const getTopLeftIndividual = (
  _individualObjs: IndividualObject[]
): IndividualObject | undefined => {
  return undefined;
};

/**
 * No more left-bottom position. Returns undefined.
 */
export const getBottomLeftIndividual = (
  _individualObjs: IndividualObject[]
): IndividualObject | undefined => {
  return undefined;
};

/**
 * First individual in the top row (right-top position).
 */
export const getTopRightIndividual = (individualObjs: IndividualObject[]): IndividualObject | undefined => {
  return getTopRowIndividuals(individualObjs)[0];
};

/**
 * First individual in the bottom row (right-bottom position).
 */
export const getBottomRightIndividual = (individualObjs: IndividualObject[]): IndividualObject | undefined => {
  return getBottomRowIndividuals(individualObjs)[0];
};

/**
 * Get a position name for a given index.
 * New naming: even indices are "right-top-N", odd indices are "right-bottom-N".
 */
export const getPositionName = (index: number): string => {
  if (index === 0) return "right-top";
  if (index === 1) return "right-bottom";
  const row = index % 2 === 0 ? "right-top" : "right-bottom";
  const posInRow = Math.floor(index / 2) + 1;
  return `${row}-${posInRow}`;
};

/**
 * Get the CSS class suffix for a given index.
 */
export const getPositionClass = (index: number): string => {
  return getPositionName(index);
};
