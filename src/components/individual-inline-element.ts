import { type IndividualObject } from "./../states/raw/individual/get-individual-object";
import {
  type CardMainContext,
  type FlowCardPlusConfig,
  type NewDur,
  type TemplatesObj,
} from "./../types";
import { checkShouldShowDots } from "./../utils/check-should-show-dots";
import { computeIndividualFlowRate } from "./../utils/compute-flow-rate";
import { showLine } from "./../utils/show-line";
import { styleLine } from "./../utils/style-line";
import { html, nothing, svg } from "lit";

interface InlineIndividual {
  newDur: NewDur;
  templatesObj: TemplatesObj;
  individualObj: IndividualObject;
  displayState: string;
  /** Position index in the full individual list (0-9) */
  posIndex: number;
  /** Position within the row (0 = first in row = uses right-top/bottom element, 1+ = inline) */
  rowPosition: number;
  /** Whether this individual is in the top row (true) or bottom row (false) */
  isTopRow: boolean;
  /** Whether this is the first individual in the row (gets connector from Home) */
  isFirstInRow: boolean;
}

/**
 * Renders an inline individual circle for the 2nd+ individual in a row.
 * These appear to the right of the first individual (which uses
 * individualRightTopElement / individualRightBottomElement).
 *
 * Features:
 * - Smaller circle (60px) to fit more individuals
 * - Horizontal connector SVG line on the left
 * - Animated flow dot on the connector
 * - Label, icon, state value
 * - Click/double-click/hold handlers
 */
export const individualInlineElement = (
  main: CardMainContext,
  config: FlowCardPlusConfig,
  {
    individualObj,
    templatesObj,
    displayState,
    newDur,
    posIndex,
    rowPosition,
    isTopRow,
    isFirstInRow,
  }: InlineIndividual
) => {
  if (!individualObj) return nothing;

  const disableEntityClick = config.clickable_entities === false;

  const indexOfIndividual =
    config?.entities?.individual?.findIndex((e) => e.entity === individualObj.entity) || 0;
  const duration = newDur.individual[indexOfIndividual] || 1.66;

  const rowClass = isTopRow ? "individual-top" : "individual-bottom";
  const sideClass = isTopRow ? "individual-right-top" : "individual-right-bottom";
  const posName = isTopRow ? `right-top-${rowPosition + 1}` : `right-bottom-${rowPosition + 1}`;

  // Connector line: horizontal line from left side of circle going left
  // For first-in-row individuals: line connects to Home (through the first individual's flow line)
  // For subsequent individuals: line connects to the previous individual
  const connectorLine = showLine(config, individualObj.state || 0) && !config.entities.home?.hide
    ? html`
        <div class="ind-inline-connector">
          <svg
            viewBox="0 0 40 20"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            class="ind-inline-connector-svg"
          >
            <path
              id="individual-inline-${posIndex}"
              class="${styleLine(individualObj.state || 0, config)} ${sideClass}"
              d="M0,10 H40"
              vector-effect="non-scaling-stroke"
            />
            ${checkShouldShowDots(config) &&
            individualObj.state &&
            individualObj.state >= (individualObj.displayZeroTolerance ?? 0)
              ? svg`<circle r="1" class="${rowClass} ${sideClass}" vector-effect="non-scaling-stroke">
                    <animateMotion
                      dur="${computeIndividualFlowRate(
                        individualObj?.field?.calculate_flow_rate,
                        duration
                      )}s"
                      repeatCount="indefinite"
                      calcMode="paced"
                      keyPoints="${individualObj.invertAnimation ? "0;1" : "1;0"}"
                      keyTimes="0;1"
                    >
                      <mpath xlink:href="#individual-inline-${posIndex}" />
                    </animateMotion>
                  </circle>`
              : nothing}
          </svg>
        </div>
      `
    : nothing;

  return html`
    <div
      class="circle-container ind-inline ${rowClass} ${sideClass}"
      style="--ind-inline-color: var(--individual-${posName}-color, var(--${isTopRow ? "individual-right-top" : "individual-right-bottom"}-color)); --ind-inline-icon-color: var(--icon-individual-${posName}-color, var(--icon-individual-${isTopRow ? "right-top" : "right-bottom"}-color)); --ind-inline-text-color: var(--text-individual-${posName}-color, var(--text-individual-${isTopRow ? "right-top" : "right-bottom"}-color));"
    >
      ${isTopRow
        ? html`<span class="label ind-inline-label">${individualObj.name}</span>`
        : nothing}
      ${connectorLine}
      <div
        class="circle ind-inline-circle ${disableEntityClick ? "pointer-events-none" : ""}"
        @click=${(e: MouseEvent) => {
          main.onEntityClick(e, individualObj?.field, individualObj?.entity);
        }}
        @dblclick=${(e: MouseEvent) => {
          main.onEntityDoubleClick(e, individualObj?.field, individualObj?.entity);
        }}
        @pointerdown=${(e: PointerEvent) => {
          main.onEntityPointerDown(e, individualObj?.field, individualObj?.entity);
        }}
        @pointerup=${(e: PointerEvent) => {
          main.onEntityPointerUp(e);
        }}
        @pointercancel=${(e: PointerEvent) => {
          main.onEntityPointerUp(e);
        }}
        @keyDown=${(e: { key: string; stopPropagation: () => void; target: HTMLElement }) => {
          if (e.key === "Enter") {
            main.openDetails(e, individualObj?.field, individualObj?.entity, "tap");
          }
        }}
      >
        <ha-ripple .disabled=${disableEntityClick}></ha-ripple>
        ${individualObj.icon !== " "
          ? html`<ha-icon .icon=${individualObj.icon}></ha-icon>`
          : nothing}
        ${individualObj?.field?.display_zero_state !== false ||
        (individualObj.state || 0) > (individualObj.displayZeroTolerance ?? 0)
          ? html`<span class="${rowClass} ${sideClass}">
              ${individualObj?.showDirection
                ? html`<ha-icon
                    class="small"
                    .icon=${individualObj.invertAnimation
                      ? "mdi:arrow-down"
                      : "mdi:arrow-up"}
                  ></ha-icon>`
                : nothing}${displayState}
            </span>`
          : nothing}
      </div>
      ${!isTopRow
        ? html`<span class="label ind-inline-label">${individualObj.name}</span>`
        : nothing}
    </div>
  `;
};
