# Changelog

## [1.0.0] - 2024

### Added
- Support for up to **10 individual sensors** connected to Home (up from 4)
- **Extended color palette** with 10 distinct colors for individual sensors
- **Extra individuals grid** section below the flow diagram for sensors 5-10
- **Dynamic CSS custom properties** for all individual sensor positions (ind-0 through ind-9)
- **Consistent graphical ordering** via enhanced sort logic (power descending, then entity name)
- **Responsive grid layout** for extra individual sensors (4-column grid with 64px circles)
- Full **UI Editor** support for unlimited individual entity configuration

### Changed
- Restructured from monorepo (`flixlix-cards`) to standalone project
- All `@flixlix-cards/shared` imports converted to local relative imports
- `MAX_INDIVIDUAL_SENSORS` constant set to 10
- `_generateIndividualKeys()` extended to support ind-4 through ind-9
- Flow rate computation made fully array-based (no hardcoded limit)
- Schema validation has no individual entity count limit

### Technical
- Standalone Rollup build system (no workspace dependencies)
- TypeScript + LitElement web component architecture
- Single-file bundled output (`dist/power-flow-card-plus-extended.js`)
- Compatible with HACS custom repository installation

### Credits
- Based on [power-flow-card-plus](https://github.com/flixlix/power-flow-card-plus) by [flixlix](https://github.com/flixlix)
- Source from [flixlix-cards monorepo](https://github.com/flixlix/flixlix-cards)
- Inspired by [power-flow-card](https://github.com/DavidFW1960/power-flow-card) by [DavidFW1960](https://github.com/DavidFW1960)
