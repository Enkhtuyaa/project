# Project 15 — Battery Status

**Difficulty:** med · **Category:** Sensor · **Core demo:** ~20 min

## What you're building
A small dashboard that reads the device's real battery level and charging state from the browser and updates live as the battery drains or the device is plugged in/unplugged.

## The 20-minute core (MVP)
- On load, read the current battery percentage and charging state
- Display the percentage as text and as a fill inside a battery icon shape
- Show a charging indicator (e.g. a bolt icon) when plugged in
- Update the display automatically when the battery level or charging state changes, without a page refresh

## How it works (concept — no code)
- **Asking the browser for battery info** → the browser exposes a promise-based method that resolves with an object describing the battery. Research: `navigator.getBattery()`.
- **Reading the battery's current state** → the resolved object has properties for level (0 to 1) and whether it's charging. Research: `BatteryManager.level`, `BatteryManager.charging`.
- **Converting level to a percentage** → `level` is a decimal fraction (e.g. `0.73`), not already a percentage. Research: basic math (`Math.round(level * 100)`).
- **Reacting when the battery changes over time** → instead of only checking once on page load, you listen for the battery object to tell you when something changes. Research: `levelchange` event and `chargingchange` event on the `BatteryManager` object, `addEventListener`.
- **Updating the UI without a refresh** → when an event fires, re-read the current values and update the same DOM elements in place (don't rebuild the whole page). Research: `element.textContent`, `element.style` (for resizing a fill bar/icon based on percentage).
- **Handling missing support gracefully** → this API has very limited/no support in some modern browsers (notably Safari and current Firefox never shipped it, and Chrome restricts it). Research: feature-detecting with `'getBattery' in navigator` before calling it, and designing a fallback message for unsupported browsers.

## What you'll use
- HTML/CSS: large battery icon (SVG or CSS shape) with a fill that reflects percentage, charging bolt icon, minimal card layout
- JavaScript: promises/async handling, conditional logic, functions, basic math
- Browser APIs: `navigator.getBattery()` (Battery Status API), `BatteryManager` events (`levelchange`, `chargingchange`)
- Public API: none

## Design prompt (paste it → get a visual spec sheet → build from it)
Paste the prompt below into an AI/design tool that can output HTML (Claude, ChatGPT, v0, etc.). It returns a **single annotated design-spec sheet** — a picture of the screen with the exact pixel spacing, colors, and font sizes labeled on it, plus a per-component breakdown — so you can read every number and rebuild it yourself in plain HTML/CSS/JS. It's a spec to copy, **not** the finished app.

> Create a single self-contained HTML file that is an **annotated design-spec sheet** (like a Figma redline) for a live battery status dashboard — NOT a working app. Include: (1) a clean static mockup of the main screen with realistic placeholder content (battery icon with fill, percentage readout, charging indicator, caption); (2) small labeled chips placed on the mockup marking the key spacing and sizes in pixels — padding, gaps, border-radius, main element sizes, and the biggest font size; (3) a **Colors** panel — each color as a swatch + hex code + what it is used for, and make sure body text stays at least 4.5:1 contrast against its background; (4) a **Typography** panel — each text element with its pixel font-size and weight; (5) a **Spacing & sizes** panel — max width, paddings, gaps, corner radii in px, plus one note on how the layout reflows on a narrow phone screen (a single breakpoint); (6) a **States** strip — small mini-mockups of the empty/first-load, loading, and error (or unsupported-browser) states, since the working app needs them; (7) a **Component-by-component breakdown** where each component shown in the mockup above gets its own small card listing all of its specs: width/height, padding, background hex, border and border-radius, and text color + font size + weight — so I can build one component at a time just by reading its card. Use the Manrope font for the mockup so it matches the style below, and keep the spec panels themselves in a clean readable sans-serif. Make it clean and beginner-friendly so someone who has coded for one month can read the numbers and implement it by looking. Style direction: minimal, calm system-status style. Do NOT include any interactivity, JavaScript, or real data — it is a static spec sheet I will read and rebuild by hand.

## Resources
- https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getBattery
- https://developer.mozilla.org/en-US/docs/Web/API/BatteryManager
- https://developer.mozilla.org/en-US/docs/Web/API/BatteryManager/levelchange_event
- https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API

**Browser support note:** The Battery Status API is not supported in Safari or Firefox and is restricted/deprecated in some Chromium builds due to privacy concerns. Build this project as a learning exercise and always include a "not supported in this browser" fallback message — check MDN's support table linked above before demoing.

## Stretch goals
- Add a low-battery visual/audio warning below 15%
- Log battery level over time to a simple in-page chart
- Add an estimated "time remaining" display if the API provides `dischargingTime`
- Add a manual "simulate battery" mode for browsers without support, using a slider

## Skills it drills
- Conditional logic, functions, basic math, event-driven updates, feature detection/graceful degradation