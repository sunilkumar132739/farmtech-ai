# Design Brief — FarmTech AI (with Authentication & Dashboard)

## Tone
Premium agricultural technology — trustworthy, modern, grounded in earth. Accessible to rural farmers. Auth context emphasizes security & simplicity. Dashboard context emphasizes actionable data & farmer empowerment.

## Differentiation
Glassmorphism aesthetic throughout. Frosted glass cards, backdrop blur, semi-transparent borders. Dark deep-green gradient backgrounds. Agricultural green (#2D5A27), earth brown (#4B3621), solar yellow (#FFD700). Auth: centered, calm, clear. Dashboard: sidebar-driven, scannable, real-time data cards.

## Color Palette

| Token | OKLCH | Hex | Purpose |
| --- | --- | --- | --- |
| Primary (Green) | 0.35 0.13 118 | #2D5A27 | Actions, trust, growth |
| Secondary (Brown) | 0.28 0.08 40 | #4B3621 | Accents, warmth |
| Accent (Yellow) | 0.85 0.25 86 | #FFD700 | Highlights, CTAs |
| Background (Navy) | 0.09 0.01 245 | #1a1f2e | Primary bg, depth |
| Card (Light Navy) | 0.15 0.02 245 | #262d3d | Glass card bg |
| Foreground | 0.94 0.01 245 | #f0f0f0 | Primary text |
| Muted | 0.25 0.02 245 | #404860 | Secondary text |
| Border | 0.22 0.02 245 | #3a4050 | Borders |

## Typography
- **Display**: Lora (serif, headlines, welcome messages)
- **Body**: Space Grotesk (body copy, data labels)
- **Mono**: JetBrains Mono (data values, codes)

## Auth-Specific Patterns
- **Login Card**: Max 400px, centered on full-screen gradient, Internet Identity button (primary green)
- **Form Inputs**: Glass effect with white/10 bg, white/20 border, focus state increases opacity
- **Error States**: Destructive red for validation feedback

## Dashboard Layout
- **Header**: Navbar with logo, user avatar (authenticated state), logout
- **Sidebar**: Fixed (desktop) / collapsible (mobile), nav links with active state highlight
- **Welcome Banner**: Glassmorphic, large serif headline "Welcome back, [name]", subtitle with timestamp
- **Data Zones**: Grid of sensor cards (moisture, temp, humidity, irrigation), each glass-styled

## Structural Zones

| Zone | Treatment | Purpose |
| --- | --- | --- |
| Auth Page | Full-screen gradient, centered card | Login security & clarity |
| Dashboard Header | Glass navbar, avatar dropdown | User context, logout |
| Dashboard Sidebar | Collapsible glass nav, active link highlight | Primary navigation |
| Dashboard Content | Grid layout with welcome + sensor cards | Farmer-focused data |
| Profile/Settings | Form cards with labels & inputs | Account management |

## Motion & Animation
- **Fade-in**: 0.5s ease-out (page load)
- **Slide-up**: 0.5s ease-out (card entrance)
- **Sidebar collapse**: 0.3s ease-out (mobile toggle)
- **Input focus**: 0.3s ease-out (glass opacity increase)
- **Hover**: `transition-smooth` (all interactive elements)

## Constraints
- No pure white (#ffffff), no pure black (#000000)
- All colors via OKLCH tokens
- Glassmorphism on all cards (mandatory)
- Responsive mobile-first (sm, md, lg)
- Min 18px body text (rural accessibility)
- High contrast AA+ WCAG
- No decorative animations outside auth/dashboard context

## Signature Detail
Frosted glass layered borders, semi-transparent overlays. Solar Yellow sparingly on active/highlight states. Lora serif for farmer-facing headlines (builds trust & authority). Sidebar collapsible animation for seamless mobile experience.
