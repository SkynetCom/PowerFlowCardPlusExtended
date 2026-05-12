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
 * Positions 0-3 map to the original layout:
 *   0 = left-top, 1 = left-bottom, 2 = right-top, 3 = right-bottom
 * Positions 4+ are for extra rows.
 */
export const getIndividualByIndex = (
  individualObjs: IndividualObject[],
  index: number
): IndividualObject | undefined => {
  return getIndividualObjSortPowerMode(individualObjs, index);
};

export const getTopLeftIndividual = (
  individualObjs: IndividualObject[]
): IndividualObject | undefined => {
  return getIndividualObjSortPowerMode(individualObjs, 0);
};

export const getBottomLeftIndividual = (
  individualObjs: IndividualObject[]
): IndividualObject | undefined => {
  return getIndividualObjSortPowerMode(individualObjs, 1);
};

export const getTopRightIndividual = (
  individualObjs: IndividualObject[]
): IndividualObject | undefined => {
  return getIndividualObjSortPowerMode(individualObjs, 2);
};

export const getBottomRightIndividual = (
  individualObjs: IndividualObject[]
): IndividualObject | undefined => {
  return getIndividualObjSortPowerMode(individualObjs, 3);
};

/**
 * Check if there are individual sensors in right positions (index 2+).
 */
export const checkHasRightIndividual = (individualObjs: IndividualObject[]): boolean =>
  !!getTopRightIndividual(individualObjs) || !!getBottomRightIndividual(individualObjs);

/**
 * Check if there are individual sensors in bottom positions (index 1 or 3).
 */
export const checkHasBottomIndividual = (individualObjs: IndividualObject[]): boolean =>
  !!getBottomLeftIndividual(individualObjs) || !!getBottomRightIndividual(individualObjs);

/**
 * Check if there are extra individual sensors beyond the original 4 positions.
 */
export const checkHasExtraIndividuals = (individualObjs: IndividualObject[]): boolean =>
  getIndividualByIndex(individualObjs, 4) !== undefined;

/**
 * Get extra individual sensors (index 4+).
 */
export const getExtraIndividuals = (individualObjs: IndividualObject[]): IndividualObject[] => {
  const extras: IndividualObject[] = [];
  for (let i = 4; i < MAX_INDIVIDUAL_SENSORS; i++) {
    const obj = getIndividualByIndex(individualObjs, i);
    if (obj) extras.push(obj);
    else break;
  }
  return extras;
};

/**
 * Get a position name for a given index.
 * For indices 0-3, uses the original position names.
 * For indices 4+, uses "ind-N" format.
 */
export const getPositionName = (index: number): string => {
  const originalNames = ["left-top", "left-bottom", "right-top", "right-bottom"];
  if (index < originalNames.length) return originalNames[index];
  return `ind-${index}`;
};

/**
 * Get the CSS class suffix for a given index.
 */
export const getPositionClass = (index: number): string => {
  const originalClasses = ["left-top", "left-bottom", "right-top", "right-bottom"];
  if (index < originalClasses.length) return originalClasses[index];
  return `ind-${index}`;
};
