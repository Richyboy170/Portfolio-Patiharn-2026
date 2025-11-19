# 🎨 Light Theme Color Guide

## Color Palette

### Light Theme Colors

| Element | Dark Theme | Light Theme | Purpose |
|---------|-----------|-------------|---------|
| **Backgrounds** |
| Main Background | `slate-950` → `slate-900` | `white` → `sky-50` → `blue-50` | Primary background gradient |
| Section Alt BG | `slate-950/50` | `sky-50/80` | Alternate section background |
| Card Background | `blue-500/10` | `sky-50` | Card/box backgrounds |
| **Text Colors** |
| Primary Heading | `white` | `slate-900` | Main headings |
| Subheading | `slate-300` | `slate-800` | Section subtitles |
| Body Text | `slate-300` | `slate-700` | Regular paragraph text |
| Muted Text | `slate-400` | `slate-600` | Secondary/helper text |
| **Accent Colors** |
| Primary Accent | `cyan-400` | `sky-700` | Important highlights |
| Link Hover | `cyan-400` | `sky-600` | Interactive elements |
| Badge Text | `cyan-300` | `sky-800` | Badge/chip text |
| **Gradients** |
| Heading Gradient | `blue-400` → `cyan-300` | `sky-700` → `blue-600` | Title gradients |
| Hero Name | `white` → `blue-100` → `cyan-300` | `slate-900` → `blue-900` → `sky-700` | Main name display |
| **Borders** |
| Primary Border | `blue-500/30` | `sky-300` | Card borders |
| Secondary Border | `cyan-500/30` | `sky-200` | Subtle borders |
| **Buttons** |
| Primary Button BG | `blue-600` → `cyan-600` | `sky-600` → `blue-600` | CTA buttons |
| Primary Button Text | `white` | `white` | Button text |
| Secondary Button Border | `blue-500` | `sky-600` | Outline buttons |
| Secondary Button Text | `blue-400` | `sky-700` | Outline button text |
| Secondary Button Hover | `blue-500/10` | `sky-100` | Hover state |
| **Special Elements** |
| Success/Available Badge | `green-400` + `blue-500/10` | `green-800` + `green-100` | Status indicators |
| Vision Box BG | `blue-950/50` → `cyan-950/30` | `sky-50` → `blue-50` | Feature boxes |

## Key Principles

### 1. Contrast Ratio
- **Minimum**: 4.5:1 for body text
- **Preferred**: 7:1 for headings
- Light theme uses darker colors (slate-700, slate-800, slate-900)
- Dark theme uses lighter colors (slate-300, slate-400, white)

### 2. Color Temperature
- **Dark Theme**: Cool blues and cyans (more vibrant)
- **Light Theme**: Warmer sky blues (more professional)

### 3. Background Strategy
- **Dark Theme**: Dark backgrounds (slate-950) with light text
- **Light Theme**: Light backgrounds (white/sky-50) with dark text

## Sections Fixed

### ✅ Hero Section
- Available badge: green-800 on green-100 background
- Name: slate-900 → blue-900 → sky-700 gradient
- Title: slate-800 text
- Subtitle: slate-600 text
- Locations: slate-600 text
- Badges: sky-800 text on sky-100 background
- Buttons: Proper contrast maintained
- Vision box: sky-800 heading, slate-700 text on sky-50 background

### ✅ About Section
- Title: sky-700 → blue-600 gradient
- Heading: slate-900 text
- Body text: slate-700
- Stats boxes: sky-700 numbers, slate-600 labels on sky-50 background
- Image border: sky-300

### 🔨 Sections Still Using Default Colors
The following sections may still need updates (check if they're readable):
- Skills Section
- Journey/Timeline
- Projects
- Activities
- Awards
- Contact
- Footer
- Modal popups

## How to Update More Sections

### Template Pattern:

**Headings:**
```typescript
className={`text-4xl font-bold ${
  isDark ? 'text-cyan-400' : 'text-sky-800'
}`}
```

**Body Text:**
```typescript
className={`text-lg ${
  isDark ? 'text-slate-300' : 'text-slate-700'
}`}
```

**Muted/Helper Text:**
```typescript
className={isDark ? 'text-slate-400' : 'text-slate-600'}
```

**Card/Box Backgrounds:**
```typescript
className={`p-4 border rounded-lg ${
  isDark
    ? 'bg-blue-500/10 border-blue-500/30'
    : 'bg-sky-50 border-sky-300'
}`}
```

**Section Backgrounds:**
```typescript
className={`py-20 ${
  isDark ? 'bg-slate-950/50' : 'bg-white/50'
}`}
```

**Gradient Headings:**
```typescript
className={`bg-gradient-to-r ${
  isDark
    ? 'from-blue-400 to-cyan-300'
    : 'from-sky-700 to-blue-600'
} bg-clip-text text-transparent`}
```

## Testing Checklist

When updating sections, verify:

- [ ] All text is readable (not washed out)
- [ ] Headings stand out from body text
- [ ] Links are clearly visible and change on hover
- [ ] Buttons have clear borders and backgrounds
- [ ] Card/box elements have visible borders
- [ ] Gradients show properly (not invisible on white)
- [ ] Icons and badges have good contrast
- [ ] Form inputs (if any) are clearly defined

## Color Reference Chart

### Tailwind CSS Colors Used

**Dark Theme Palette:**
- Backgrounds: slate-950, slate-900, blue-950
- Text: white, slate-300, slate-400
- Accents: cyan-400, cyan-300, blue-400
- Borders: blue-500/30, cyan-500/30

**Light Theme Palette:**
- Backgrounds: white, sky-50, sky-100, blue-50
- Text: slate-900, slate-800, slate-700, slate-600
- Accents: sky-800, sky-700, sky-600, blue-700
- Borders: sky-300, sky-200, blue-300

## Quick Reference

### Common Replacements

| Dark Theme Class | → | Light Theme Class |
|-----------------|---|-------------------|
| `text-white` | → | `text-slate-900` |
| `text-slate-300` | → | `text-slate-700` |
| `text-slate-400` | → | `text-slate-600` |
| `text-cyan-400` | → | `text-sky-700` |
| `text-cyan-300` | → | `text-sky-800` |
| `bg-blue-500/10` | → | `bg-sky-50` |
| `border-blue-500/30` | → | `border-sky-300` |
| `from-blue-400` | → | `from-sky-700` |
| `to-cyan-300` | → | `to-blue-600` |

---

**Last Updated**: 2025-11-17
**Status**: Hero and About sections completed ✅
**Next**: Continue with Skills, Journey, Projects sections
