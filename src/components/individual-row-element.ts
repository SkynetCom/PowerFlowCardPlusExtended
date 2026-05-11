import { type IndividualObject } from "./../states/raw/individual/get-individual-object";
import {
  type CardMainContext,
  type FlowCardPlusConfig,
  type NewDur,
  type TemplatesObj,
} from "./../types";
import { checkShouldShowDots } from "./../utils/check-should-show-dots";
import { computeIndividualFlowRate } from "./../utils/compute-flow-rate";
import { getPositionName } from "./../utils/compute-individual-position";
import { showLine } from "./../utils/show-line";
import { styleLine } from "./../utils/style-line";
import { html, nothing, svg } from "lit";
import { individualSecondarySpan } from "./spans/individual-secondary-span";

interface RowIndividual {
  newDur: NewDur;
  templatesObj: TemplatesObj;
  individualObj: IndividualObject;
  displayState: string;
  index: number;
  isFirst: boolean;
}

/**
 * Renders a single individual sensor in the horizontal row layout.
 * Each individual has a circle with label and a flow line connecting it to Home.
 * Flow lines are simple horizontal lines since all individuals are at the same vertical level as Home.
 */
export const individualRowElement = (
  main: CardMainContext,
  config: FlowCardPlusConfig,
  { individualObj, templatesObj, displayState, newDur, index, isFirst }: RowIndividual
) => {
  if (!individualObj) return nothing;
  const disableEntityClick = config.clickable_entities === false;
  const posName = getPositionName(index);

  const indexOfIndividual =
    config?.entities?.individual?.findIndex((e) => e.entity === individualObj.entity) || 0;
  const duration = newDur.individual[indexOfIndividual] || 1.66;

  const flowLineSvg = showLine(config, individualObj.state || 0) && !config.entities.home?.hide
    ? html`
        <svg
          class="ind-row-flow-line"
          viewBox="0 0 40 20"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            id="individual-row-${index}"
            class="${styleLine(individualObj.state || 0, config)}"
            d="M0,10 H40"
            vector-effect="non-scaling-stroke"
          />
          ${checkShouldShowDots(config) &&
          individualObj.state &&
          individualObj.state >= (individualObj.displayZeroTolerance ?? 0)
            ? svg`<circle r="1" class="individual-row-dot" vector-effect="non-scaling-stroke">
                  <animateMotion
                    dur="${computeIndividualFlowRate(
                      individualObj?.field?.calculate_flow_rate,
                      duration
                    )}s"
                    repeatCount="indefinite"
                    calcMode="paced"
                    keyPoints="${individualObj.invertAnimation ? "1;0" : "0;1"}"
                    keyTimes="0;1"
                  >
                    <mpath xlink:href="#individual-row-${index}" />
                  </animateMotion>
                </circle>`
            : nothing}
        </svg>
      `
    : nothing;

  return html`
    <div
      class="circle-container individual-row-item"
      style="--ind-row-color: var(--individual-${posName}-color, #888); --ind-row-icon-color: var(--icon-individual-${posName}-color, var(--primary-text-color)); --ind-row-text-color: var(--text-individual-${posName}-color, var(--primary-text-color)); --ind-row-secondary-color: var(--secondary-text-individual-${posName}-color, var(--primary-text-color));"
    >
      ${isFirst ? flowLineSvg : nothing}
      <span class="label">${individualObj.name}</span>
      <div
        class="circle ${disableEntityClick ? "pointer-events-none" : ""}"
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
        ${individualSecondarySpan(
          main.hass,
          main,
          config,
          templatesObj,
          individualObj,
          indexOfIndividual,
          (index < 4 ? ["left-top", "left-bottom", "right-top", "right-bottom"][index] : `ind-${index}`) as any
        )}
        ${individualObj.icon !== " "
          ? html`<ha-icon .icon=${individualObj.icon}></ha-icon>`
          : nothing}
        ${individualObj?.field?.display_zero_state !== false ||
        (individualObj.state || 0) > (individualObj.displayZeroTolerance ?? 0)
          ? html`<span class="individual-row-text">
              ${individualObj?.showDirection
                ? html`<ha-icon
                    class="small"
                    .icon=${individualObj.invertAnimation ? "mdi:arrow-down" : "mdi:arrow-up"}
                  ></ha-icon>`
                : nothing}${displayState}
            </span>`
          : nothing}
      </div>
    </div>
  `;
};
