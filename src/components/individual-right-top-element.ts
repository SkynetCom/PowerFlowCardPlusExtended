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
  columnIndex?: number;
}

export const individualRightTopElement = (
  main: CardMainContext,
  config: FlowCardPlusConfig,
  { individualObj, templatesObj, displayState, newDur, battery, individualObjs, columnIndex }: TopIndividual
) => {
  if (!individualObj) return spacer;
  const disableEntityClick = config.clickable_entities === false;

  const indexOfIndividual = config?.entities?.individual?.findIndex(
    (e) => e.entity === individualObj.entity
  );
  if (indexOfIndividual === -1 || indexOfIndividual === undefined) return spacer;

  const duration = newDur.individual[indexOfIndividual] || 1.66;

  const hasBottomRow = !!battery?.has || checkHasBottomIndividual(individualObjs);
  const colIndex = columnIndex || 1;
  const colWidthFactor = colIndex - 1;
  const svgWidth = 100 + colWidthFactor * 100;
  const startX = (hasBottomRow ? 45 : 47) + colWidthFactor * 100;
  const curveY = hasBottomRow ? 30 : 35;
  const leftX = 20 + colWidthFactor * 100;

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
        "right-top"
      )}
      ${individualObj.icon !== " "
        ? html` <ha-icon id="individual-right-top-icon" .icon=${individualObj.icon}></ha-icon>`
        : nothing}
      ${individualObj?.field?.display_zero_state !== false ||
      (individualObj.state || 0) > (individualObj.displayZeroTolerance ?? 0)
        ? html` <span class="individual-top individual-right-top">
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
          <div class="right-individual-flow-container">
            <svg
              viewBox="0 0 ${svgWidth} 100"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMaxYMid slice"
              class="right-individual-flow"
              style="width: calc(var(--lines-svg-not-flat-multi-indiv-right-indiv-width) + ${colWidthFactor * 80}px);"
            >
              <path
                id="individual-top-right-home-${colIndex}"
                class="${styleLine(individualObj.state || 0, config)}"
                d="M${startX},0 v15 c0,${curveY} -10,${curveY} -30,${curveY} h-${leftX}"
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
                        <mpath xlink:href="#individual-top-right-home-${colIndex}" />
                      </animateMotion>
                    </circle>`
                : nothing}
            </svg>
          </div>
        `
      : nothing}
  </div>`;
};
