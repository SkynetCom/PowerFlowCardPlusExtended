# Power Flow Card Plus Extended

<div align="center">

![Home Assistant](https://img.shields.io/badge/Home%20Assistant-Custom%20Card-41BDF5?logo=homeassistant)
![HACS](https://img.shields.io/badge/HACS-Compatible-41BDF5)
![License](https://img.shields.io/badge/License-MIT-green)
![Sensors](https://img.shields.io/badge/Individual%20Sensors-up%20to%2010-orange)

**Extended version of the Power Flow Card Plus for Home Assistant**
Supports up to 10 individual sensors connected to Home with consistent graphical ordering.

</div>

---

## Overview

This is an independent fork and extension of the excellent [Power Flow Card Plus](https://github.com/flixlix/power-flow-card-plus) by [flixlix](https://github.com/flixlix). The original card limits individual sensors to 4 connected to "Home". This extended version removes that limitation, allowing you to connect **up to 10 individual sensors** while maintaining consistent graphical ordering.

> **Original Source Code:** The source code for this card is derived from the [flixlix-cards monorepo](https://github.com/flixlix/flixlix-cards) and has been restructured into a standalone project.

---

## What's Changed

### New Features & Modifications

| Feature | Original | Extended |
|---------|----------|----------|
| Max individual sensors | 4 | **10** |
| Extra sensors layout | N/A | **Horizontal dynamic columns branching from a single trunk line** |
| Color palette | 4 colors | **10 distinct colors** |
| Sorting consistency | Optional | **Always consistent (by power, then name)** |
| CSS custom properties | 4 individual slots | **10 individual slots** |
| UI Editor limit | 4 | **No limit (respects MAX_INDIVIDUAL_SENSORS)** |

### Layout Design

- **Sensors 1-4** are displayed in the classic flow diagram positions (left-top, left-bottom, right-top, right-bottom) with animated SVG flow lines connecting to Home.
- **Sensors 5-10** expand horizontally to the right in stacked vertical columns. A single animated trunk line emerges from "Home" and branches out to each extra column dynamically, without overlapping.
- **Ordering**: When `sort_individual_devices` is enabled, sensors are sorted by power consumption (descending), then by entity name alphabetically. This ensures consistent graphical positioning across refreshes.

### Color Palette

Each sensor gets a unique color from an extended 10-color palette:

| Position | Color | Hex |
|----------|-------|-----|
| 1 (left-top) | Yellow | `#d0cc5b` |
| 2 (left-bottom) | Purple | `#964cb5` |
| 3 (right-top) | Pink | `#b54c9d` |
| 4 (right-bottom) | Teal | `#5bd0cc` |
| 5 | Deep Orange | `#ff7043` |
| 6 | Green | `#66bb6a` |
| 7 | Blue | `#42a5f5` |
| 8 | Orange | `#ffa726` |
| 9 | Purple | `#ab47bc` |
| 10 | Cyan | `#26c6da` |

All colors can be overridden per-sensor using the `color` property in the entity configuration.

---

## Installation

### HACS (Recommended)

1. Open HACS in your Home Assistant instance
2. Go to **Frontend** > **Custom repositories**
3. Add this repository URL: `https://github.com/SkynetCom/PowerFlowCardPlusExtended`
4. Install **Power Flow Card Plus Extended**
5. Clear your browser cache
6. Add the card to your Lovelace dashboard

### Manual

1. Download `dist/power-flow-card-plus-extended.js` from the latest [release](https://github.com/SkynetCom/PowerFlowCardPlusExtended/releases)
2. Copy it to `config/www/community/power-flow-card-plus-extended/`
3. Add the following to your `configuration.yaml`:

```yaml
lovelace:
  resources:
    - url: /community/power-flow-card-plus-extended/power-flow-card-plus-extended.js
      type: module
```

4. Clear your browser cache and refresh

---

## Configuration

### Minimal Example (5 individual sensors)

```yaml
type: custom:power-flow-card-plus-extended
entities:
  grid: sensor.grid_power
  solar: sensor.solar_power
  battery:
    entity: sensor.battery
  individual:
    - entity: sensor.individual_1
      name: HVAC
    - entity: sensor.individual_2
      name: Water Heater
    - entity: sensor.individual_3
      name: EV Charger
    - entity: sensor.individual_4
      name: Kitchen
    - entity: sensor.individual_5
      name: Lighting
```

### Full Example (10 individual sensors)

```yaml
type: custom:power-flow-card-plus-extended
title: "Energy Monitor"
entities:
  grid: sensor.grid_power
  solar: sensor.solar_power
  battery:
    entity: sensor.battery
  home:
    entity: sensor.home_power
  individual:
    - entity: sensor.hvac_power
      name: HVAC
      icon: mdi:air-conditioner
      color: "#ff7043"
      display_zero_state: true
    - entity: sensor.water_heater_power
      name: Water Heater
      icon: mdi:water-boiler
    - entity: sensor.ev_charger_power
      name: EV Charger
      icon: mdi:car-electric
    - entity: sensor.kitchen_power
      name: Kitchen
      icon: mdi:stove
    - entity: sensor.lighting_power
      name: Lighting
      icon: mdi:lightbulb
    - entity: sensor.washing_machine_power
      name: Washing Machine
      icon: mdi:washing-machine
    - entity: sensor.dryer_power
      name: Dryer
      icon: mdi:tumble-dryer
    - entity: sensor.computer_power
      name: Office
      icon: mdi:desktop-tower
    - entity: sensor.pool_pump_power
      name: Pool Pump
      icon: mdi:pool
    - entity: sensor.security_power
      name: Security
      icon: mdi:cctv
sort_individual_devices: true
```

### Individual Sensor Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `entity` | string | **Required** | The sensor entity ID |
| `name` | string | Entity friendly name | Display name |
| `icon` | string | Entity icon | MDI icon |
| `color` | string/array | Auto-assigned | Custom color (hex or RGB array) |
| `color_icon` | boolean | true | Color the icon |
| `color_value` | boolean | false | Color the value text |
| `display_zero_state` | boolean | true | Show state when power is zero |
| `display_zero_tolerance` | number | 0 | Minimum power to display |
| `inverted_animation` | boolean | false | Invert flow direction arrow |
| `decimals` | number | Card default | Number of decimals |
| `show_direction` | boolean | false | Show direction arrow |
| `secondary_info` | object | - | Secondary info display |
| `unit_of_measurement` | string | Auto | Override unit |
| `tap_action` | object | more-info | Tap action config |
| `hold_action` | object | - | Hold action config |
| `double_tap_action` | object | - | Double tap action config |

### Card Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `title` | string | - | Card title |
| `sort_individual_devices` | boolean | false | Sort sensors by power (descending) |
| `clickable_entities` | boolean | true | Make entities clickable |
| `full_size` | boolean | false | Full-width card |
| `no_labels` | boolean | false | Hide entity labels |
| `min_flow_rate` | number | 0 | Minimum flow animation speed |
| `max_flow_rate` | number | 0 | Maximum flow animation speed |
| `base_decimals` | number | 1 | Decimals for W display |
| `kilo_decimals` | number | 1 | Decimals for kW display |
| `kilo_threshold` | number | 1000 | W to kW threshold |
| `max_expected_power` | number | 10000 | Max expected power (W) |
| `min_expected_power` | number | 0 | Min expected power (W) |
| `display_zero_lines` | object | - | Zero-power line display settings |

---

## Building from Source

### Prerequisites

- Node.js 18+ and npm

### Steps

```bash
# Clone the repository
git clone https://github.com/SkynetCom/PowerFlowCardPlusExtended.git
cd power-flow-card-plus-extended

# Install dependencies
npm install

# Build for production
npm run build

# Output: dist/power-flow-card-plus-extended.js
```

### Development

```bash
npm run dev
# Watches for file changes and rebuilds automatically
```

---

## Technical Details

### Architecture

This project is a standalone Home Assistant custom card built with:
- **LitElement** - Web Components framework
- **TypeScript** - Type-safe JavaScript
- **Rollup** - Module bundler

All source code has been extracted from the [flixlix-cards monorepo](https://github.com/flixlix/flixlix-cards) and restructured into a single standalone project with local imports (no workspace dependencies).

### Key Source Files

```
src/
  power-flow-card-plus.ts     # Main card component (LitElement)
  components/                 # UI components (battery, grid, solar, home, individual)
    flows/                    # SVG animated flow lines
    spans/                    # Secondary info spans
  states/                     # State extraction from Home Assistant
    raw/                      # Raw state getters
    utils/                    # State utilities
  style/                      # CSS styles and dynamic style computation
  types/                      # TypeScript type definitions
  utils/                      # Utility functions
  ui-editor/                  # Visual card editor
  i18n/                       # Internationalization (18 languages)
  ha/                         # Home Assistant integration helpers
```

### Modification Summary

The following changes were made relative to the original [power-flow-card-plus](https://github.com/flixlix/power-flow-card-plus):

1. **`MAX_INDIVIDUAL_SENSORS`** constant set to `10` (was effectively limited to 4 in the original UI)
2. **Extended color palette** with 10 distinct colors in `src/style/all.ts`
3. **Dynamic position naming** (`ind-4` through `ind-9`) for extra sensors
4. **Extra individuals horizontal columns** with dynamic rightward SVG trunk lines
5. **CSS custom properties** dynamically generated for all 10 sensors
6. **Template subscriptions** extended for all individual sensor keys
7. **Flow rate computation** array-based for all sensors (no fixed limit)
8. **Schema validation** has no array length limit
9. **UI Editor** allows unlimited individual entities
10. **Standalone build system** - no monorepo dependencies

---

## Credits & Acknowledgments

### Original Developers

This project is a fork and extension of the **Power Flow Card Plus**, originally developed by:

- **[flixlix](https://github.com/flixlix)** - Original author and maintainer of [power-flow-card-plus](https://github.com/flixlix/power-flow-card-plus)
  - Created the original card concept, design, and core implementation
  - Developed the flow animation system, SVG paths, and responsive layout
  - Built the UI Editor and internationalization system

- **[DavidFW1960](https://github.com/DavidFW1960)** - Original author of the base [power-flow-card](https://github.com/DavidFW1960/power-flow-card) that inspired this project

### Extended Version

- **Modified and extended** to support up to 10 individual sensors
- **Restructured** from monorepo to standalone project
- **Enhanced** sorting and ordering logic for consistent display

### License

This project maintains the same license as the original: **MIT License**

The original work is copyright (c) flixlix. The modifications in this extended version are provided under the same MIT License terms.

---

## Compatibility

| Home Assistant | Compatible |
|----------------|-----------|
| 2024.1+ | Yes |
| 2023.11+ | Yes |
| 2023.8+ | Likely |

### Browser Support

- Chrome 80+
- Firefox 80+
- Safari 15+
- iOS Safari 15+
- Edge 80+

---

## Troubleshooting

### Sensors not appearing
- Make sure the entity ID is correct and the entity exists in Home Assistant
- Check that the entity has a numeric state (in watts)
- Verify `display_zero_tolerance` is not too high

### Wrong ordering
- Set `sort_individual_devices: true` in your card configuration
- Sensors are sorted by power (descending), then by entity name

### Colors not applying
- Clear your browser cache (Ctrl+Shift+R)
- Check that your `color` property is a valid hex string like `"#ff7043"` or RGB array like `[255, 112, 67]`

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -m 'Add my new feature'`
4. Push to the branch: `git push origin feature/my-new-feature`
5. Submit a Pull Request

---

## License

MIT License - see [LICENSE](./LICENSE) for details.

Original work: [flixlix/power-flow-card-plus](https://github.com/flixlix/power-flow-card-plus) by [flixlix](https://github.com/flixlix)
Base inspiration: [DavidFW1960/power-flow-card](https://github.com/DavidFW1960/power-flow-card) by [DavidFW1960](https://github.com/DavidFW1960)
