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
 * All individuals are in a single horizontal row, ordered by index.
 */
export const getIndividualByIndex = (
  individualObjs: IndividualObject[],
  index: number
): IndividualObject | undefined => {
  return getIndividualObjSortPowerMode(individualObjs, index);
};

/**
 * Check if there are any individual sensors.
 */
export const checkHasAnyIndividual = (individualObjs: IndividualObject[]): boolean =>
  filterUnusedIndividualObjs(individualObjs).length > 0;

/**
 * Get all visible individual objects (has=true), up to MAX_INDIVIDUAL_SENSORS.
 */
export const getAllVisibleIndividuals = (individualObjs: IndividualObject[]): IndividualObject[] => {
  return filterUnusedIndividualObjs(individualObjs).slice(0, MAX_INDIVIDUAL_SENSORS);
};

/**
 * Keep backward-compatible exports for any code that still references them.
 * These are now simplified since all individuals are in a horizontal row.
 */
export const checkHasRightIndividual = (individualObjs: IndividualObject[]): boolean =>
  filterUnusedIndividualObjs(individualObjs).length > 0;

export const checkHasBottomIndividual = (individualObjs: IndividualObject[]): boolean =>
  filterUnusedIndividualObjs(individualObjs).length > 1;

export const checkHasExtraIndividuals = (individualObjs: IndividualObject[]): boolean =>
  filterUnusedIndividualObjs(individualObjs).length > 0;

export const getExtraIndividuals = (individualObjs: IndividualObject[]): IndividualObject[] => {
  // In the new layout, all individuals go in the horizontal row
  return [];
};

export const getTopLeftIndividual = getIndividualByIndex;
export const getBottomLeftIndividual = getIndividualByIndex;
export const getTopRightIndividual = getIndividualByIndex;
export const getBottomRightIndividual = getIndividualByIndex;

/**
 * Get a position name for a given index.
 * Uses "ind-N" format for all positions in the horizontal row.
 */
export const getPositionName = (index: number): string => {
  const legacyNames = ["left-top", "left-bottom", "right-top", "right-bottom"];
  if (index < legacyNames.length) return legacyNames[index];
  return `ind-${index}`;
};

/**
 * Get the CSS class suffix for a given index.
 */
export const getPositionClass = (index: number): string => {
  const legacyClasses = ["left-top", "left-bottom", "right-top", "right-bottom"];
  if (index < legacyClasses.length) return legacyClasses[index];
  return `ind-${index}`;
};
