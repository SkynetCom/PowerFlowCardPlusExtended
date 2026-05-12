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
import { spacer } from "./spacer";
import { individualSecondarySpan } from "./spans/individual-secondary-span";

interface TopIndividual {
  newDur: NewDur;
  templatesObj: TemplatesObj;
  individualObj?: IndividualObject;
  displayState: string;
  style?: string;
}

export const individualLeftTopElement = (
  main: CardMainContext,
  config: FlowCardPlusConfig,
  { individualObj, templatesObj, displayState, newDur, style }: TopIndividual
) => {
  if (!individualObj) return spacer;
  const disableEntityClick = config.clickable_entities === false;
  const indexOfIndividual =
    config?.entities?.individual?.findIndex((e) => e.entity === individualObj.entity) || 0;
  const duration = newDur.individual[indexOfIndividual] || 0;
  return html`<div class="circle-container individual-top" style=${style ?? ""}>
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
        "left-top"
      )}
      ${individualObj.icon !== " "
        ? html` <ha-icon id="individual-left-top-icon" .icon=${individualObj.icon}></ha-icon>`
        : nothing}
      ${individualObj?.field?.display_zero_state !== false ||
      (individualObj.state || 0) > (individualObj.displayZeroTolerance ?? 0)
        ? html` <span class="individual-top individual-left-top">
            ${individualObj?.showDirection
              ? html`<ha-icon
                  class="small"
                  .icon=${individualObj.invertAnimation ? "mdi:arrow-down" : "mdi:arrow-up"}
                ></ha-icon>`
              : nothing}${displayState}
          </span>`
        : nothing}
    </div>
  </div>`;
};
