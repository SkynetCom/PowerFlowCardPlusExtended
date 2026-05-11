import { type IndividualObject } from "./../states/raw/individual/get-individual-object";
import {
  type CardMainContext,
  type FlowCardPlusConfig,
  type NewDur,
  type TemplatesObj,
} from "./../types";
import { checkShouldShowDots } from "./../utils/check-should-show-dots";
import { computeIndividualFlowRate } from "./../utils/compute-flow-rate";
import { checkHasBottomIndividual } from "./../utils/compute-individual-position";
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
  battery: any;
  individualObjs: IndividualObject[];
}

export const individualFarRightTopElement = (
  main: CardMainContext,
  config: FlowCardPlusConfig,
  { individualObj, templatesObj, displayState, newDur, battery, individualObjs }: TopIndividual
) => {
  if (!individualObj) return spacer;
  const disableEntityClick = config.clickable_entities === false;

  const indexOfIndividual = config?.entities?.individual?.findIndex(
    (e) => e.entity === individualObj.entity
  );
  if (indexOfIndividual === -1 || indexOfIndividual === undefined) return spacer;

  const duration = newDur.individual[indexOfIndividual] || 1.66;

  const hasBottomRow = !!battery?.has || checkHasBottomIndividual(individualObjs);

  return html`<div class="circle-container individual-top individual-right individual-right-top">
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
        "far-right-top"
      )}
      ${individualObj.icon !== " "
        ? html` <ha-icon id="individual-far-right-top-icon" .icon=${individualObj.icon}></ha-icon>`
        : nothing}
      ${individualObj?.field?.display_zero_state !== false ||
      (individualObj.state || 0) > (individualObj.displayZeroTolerance ?? 0)
        ? html` <span class="individual-top individual-far-right-top">
            ${individualObj?.showDirection
              ? html`<ha-icon
                  class="small"
                  .icon=${individualObj.invertAnimation ? "mdi:arrow-down" : "mdi:arrow-up"}
                ></ha-icon>`
              : nothing}${displayState}
          </span>`
        : nothing}
    </div>
    ${showLine(config, individualObj.state || 0) && !config.entities.home?.hide
      ? html`
          <svg
            viewBox="0 0 100 10"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            class="far-right-individual-flow-line"
          >
            <path
              id="individual-top-far-right-home"
              class="individual-top ${styleLine(individualObj.state || 0, config)}"
              d="M100,5 H0"
              vector-effect="non-scaling-stroke"
            />
            ${checkShouldShowDots(config) &&
            individualObj.state &&
            individualObj.state >= (individualObj.displayZeroTolerance ?? 0)
              ? svg`<circle r="1" class="individual-top" vector-effect="non-scaling-stroke">
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
                      <mpath xlink:href="#individual-top-far-right-home" />
                    </animateMotion>
                  </circle>`
              : nothing}
          </svg>
        `
      : nothing}
  </div>`;
};
