# Design System Documentation

## Overview

This design system is inspired by modern SaaS applications with a focus on clean, professional aesthetics. It provides a comprehensive set of design tokens for building a consistent and scalable user interface.

---

## Color Palette

### Primary Colors (Indigo/Blue)
Used for primary actions, links, and key UI elements that require user attention.

- **Primary 500** (`#6366F1`) - Main primary color for buttons, links, active states
- **Primary 600** (`#4F46E5`) - Default button background
- **Primary 700** (`#4338CA`) - Hover states
- **Primary 800** (`#3730A3`) - Active/pressed states

**Usage:**
- Primary CTAs (Call-to-Action buttons)
- Active navigation items
- Links and interactive elements
- Focus indicators

### Secondary Colors (Purple/Violet)
Complementary colors for secondary actions and accents.

- **Secondary 500** (`#A855F7`) - Main secondary color
- **Secondary 600** (`#9333EA`) - Default secondary button
- **Secondary 700** (`#7E22CE`) - Hover states

**Usage:**
- Secondary buttons
- Alternative CTAs
- Badges and tags
- Accent elements

### Accent Colors (Cyan/Teal)
Vibrant colors for highlights, notifications, and special emphasis.

- **Accent 500** (`#06B6D4`) - Main accent color
- **Accent 600** (`#0891B2`) - Accent button background
- **Accent 700** (`#0E7490`) - Hover states

**Usage:**
- Special CTAs
- Notification badges
- Highlighted content
- Success indicators (alternative)

### Semantic Colors

#### Success (Green)
- **Success 500** (`#22C55E`) - Success messages, positive actions
- **Success 600** (`#16A34A`) - Success button backgrounds

#### Warning (Amber)
- **Warning 500** (`#F59E0B`) - Warning messages, caution indicators
- **Warning 600** (`#D97706`) - Warning button backgrounds

#### Error (Red)
- **Error 500** (`#EF4444`) - Error messages, destructive actions
- **Error 600** (`#DC2626`) - Error button backgrounds

### Neutral Colors (Gray Scale)
Foundation for text, backgrounds, and borders.

- **Neutral 0** (`#FFFFFF`) - Pure white
- **Neutral 50** (`#F9FAFB`) - Lightest gray background
- **Neutral 100** (`#F3F4F6`) - Light background
- **Neutral 200** (`#E5E7EB`) - Borders, dividers
- **Neutral 500** (`#6B7280`) - Secondary text
- **Neutral 700** (`#374151`) - Body text
- **Neutral 900** (`#111827`) - Headings, primary text

---

## Typography

### Font Families

**Sans-serif (Primary)**
```
'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif
```
- Used for all UI text, body copy, and general content
- Clean, modern, highly legible

**Monospace (Code)**
```
'JetBrains Mono', 'Fira Code', 'Courier New', monospace
```
- Used for code snippets, technical content
- Optional for this application

**Display (Headings)**
```
'Cal Sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif
```
- Used for large headings, hero text
- Fallback to Inter if Cal Sans not available

### Font Sizes

| Token | Size | Pixels | Usage |
|-------|------|--------|-------|
| `xs` | 0.75rem | 12px | Small labels, captions |
| `sm` | 0.875rem | 14px | Secondary text, metadata |
| `base` | 1rem | 16px | Body text, default |
| `lg` | 1.125rem | 18px | Emphasized body text |
| `xl` | 1.25rem | 20px | Small headings |
| `2xl` | 1.5rem | 24px | Section headings |
| `3xl` | 1.875rem | 30px | Page headings |
| `4xl` | 2.25rem | 36px | Large headings |
| `5xl` | 3rem | 48px | Hero text |
| `6xl` | 3.75rem | 60px | Display text |

### Font Weights

- **Normal (400)** - Body text
- **Medium (500)** - Emphasized text
- **Semibold (600)** - Subheadings, button text
- **Bold (700)** - Headings, important text
- **Extrabold (800)** - Hero text, display headings

### Line Heights

- **Tight (1.25)** - Large headings
- **Snug (1.375)** - Headings
- **Normal (1.5)** - Body text (default)
- **Relaxed (1.625)** - Long-form content
- **Loose (2)** - Special cases

---

## Spacing System

Based on a **4px base unit** for consistent rhythm and alignment.

| Token | Size | Pixels | Usage |
|-------|------|--------|-------|
| `1` | 0.25rem | 4px | Tiny gaps |
| `2` | 0.5rem | 8px | Small gaps |
| `3` | 0.75rem | 12px | Default gap |
| `4` | 1rem | 16px | Medium gap |
| `6` | 1.5rem | 24px | Large gap |
| `8` | 2rem | 32px | Section spacing |
| `12` | 3rem | 48px | Large section spacing |
| `16` | 4rem | 64px | Extra large spacing |

**Recommended Usage:**
- **Padding:** Use spacing[3] to spacing[6] for component padding
- **Margins:** Use spacing[4] to spacing[8] for component margins
- **Gaps:** Use spacing[2] to spacing[4] for flex/grid gaps

---

## Border Radius

| Token | Size | Pixels | Usage |
|-------|------|--------|-------|
| `sm` | 0.125rem | 2px | Subtle rounding |
| `base` | 0.25rem | 4px | Default rounding |
| `md` | 0.375rem | 6px | Small components |
| `lg` | 0.5rem | 8px | Buttons, inputs |
| `xl` | 0.75rem | 12px | Cards, modals |
| `2xl` | 1rem | 16px | Large cards |
| `3xl` | 1.5rem | 24px | Chat bubbles |
| `full` | 9999px | Full | Pills, avatars |

---

## Shadows

### Standard Shadows
- **sm** - Subtle elevation (dropdowns, tooltips)
- **base** - Default elevation (cards)
- **md** - Medium elevation (buttons, hover states)
- **lg** - High elevation (modals, popovers)
- **xl** - Maximum elevation (dialogs)
- **2xl** - Extra dramatic elevation

### Colored Shadows (Glow Effects)
- **primaryGlow** - Blue glow for primary elements
- **accentGlow** - Cyan glow for accent elements
- **successGlow** - Green glow for success states

**Usage Example:**
```typescript
boxShadow: shadows.md // Default card shadow
boxShadow: shadows.primaryGlow // Glowing primary button
```

---

## Button Styles

### Sizes

| Size | Height | Padding | Font Size | Use Case |
|------|--------|---------|-----------|----------|
| `xs` | 28px | 8px 12px | 12px | Compact UIs |
| `sm` | 36px | 8px 16px | 14px | Secondary actions |
| `md` | 44px | 12px 20px | 16px | Default (recommended) |
| `lg` | 52px | 16px 24px | 18px | Primary CTAs |
| `xl` | 60px | 20px 32px | 20px | Hero CTAs |

### Variants

#### Primary
- **Background:** Primary 600 (`#4F46E5`)
- **Text:** White
- **Shadow:** Medium
- **Use:** Main actions, primary CTAs

#### Secondary
- **Background:** Secondary 600 (`#9333EA`)
- **Text:** White
- **Shadow:** Medium
- **Use:** Alternative actions

#### Accent
- **Background:** Accent 500 (`#06B6D4`)
- **Text:** White
- **Shadow:** Medium
- **Use:** Special emphasis, notifications

#### Outline
- **Background:** Transparent
- **Border:** 2px Primary 600
- **Text:** Primary 600
- **Use:** Secondary actions, less emphasis

#### Ghost
- **Background:** Transparent
- **Text:** Neutral 900
- **Hover:** Neutral 100 background
- **Use:** Tertiary actions, minimal emphasis

#### Danger
- **Background:** Error 600 (`#DC2626`)
- **Text:** White
- **Shadow:** Medium
- **Use:** Destructive actions, delete buttons

---

## Transitions & Animations

### Duration
- **Fast (150ms)** - Micro-interactions, hovers
- **Base (200ms)** - Default transitions
- **Slow (300ms)** - Complex animations
- **Slower (500ms)** - Page transitions

### Timing Functions
- **ease** - Default easing
- **easeInOut** - Smooth start and end
- **spring** - Bouncy, playful animations

**Usage Example:**
```typescript
transition: `all ${transitions.duration.base} ${transitions.timing.easeInOut}`
```

---

## Responsive Breakpoints

| Breakpoint | Width | Device |
|------------|-------|--------|
| `xs` | 320px | Small phones |
| `sm` | 640px | Phones |
| `md` | 768px | Tablets |
| `lg` | 1024px | Laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large desktops |

---

## Component-Specific Tokens

### Input Fields
```typescript
{
  borderColor: colors.border.medium,
  borderColorFocus: colors.primary[500],
  borderRadius: borderRadius.lg,
  padding: spacing[3] spacing[4],
  fontSize: typography.fontSize.base,
}
```

### Cards
```typescript
{
  backgroundColor: colors.background.primary,
  borderRadius: borderRadius.xl,
  padding: spacing[6],
  boxShadow: shadows.md,
  border: 1px solid colors.border.light,
}
```

### Chat Bubbles
```typescript
user: {
  backgroundColor: colors.primary[600],
  color: colors.text.inverse,
  borderRadius: '1rem 1rem 0.25rem 1rem', // Rounded except bottom-left
}
bot: {
  backgroundColor: colors.neutral[100],
  color: colors.text.primary,
  borderRadius: '1rem 1rem 1rem 0.25rem', // Rounded except bottom-right
}
```

---

## Usage in Components

### Importing the Design System

```typescript
import { theme, colors, typography, spacing, shadows, buttons } from '../styles/designSystem';
```

### Using with Styled Components

```typescript
import styled from 'styled-components';
import { colors, spacing, borderRadius, shadows } from '../styles/designSystem';

const Button = styled.button`
  background: ${colors.primary[600]};
  color: ${colors.text.inverse};
  padding: ${spacing[3]} ${spacing[5]};
  border-radius: ${borderRadius.lg};
  box-shadow: ${shadows.md};
  
  &:hover {
    background: ${colors.primary[700]};
    box-shadow: ${shadows.lg};
  }
`;
```

### Using with Inline Styles

```typescript
import { colors, spacing } from '../styles/designSystem';

<div style={{
  backgroundColor: colors.background.primary,
  padding: spacing[6],
  color: colors.text.primary
}}>
  Content
</div>
```

---

## Best Practices

### Color Usage
1. **Maintain Contrast:** Ensure text has sufficient contrast (WCAG AA minimum)
2. **Semantic Meaning:** Use semantic colors (success, warning, error) consistently
3. **Limit Palette:** Stick to 2-3 main colors per view to avoid visual chaos

### Typography
1. **Hierarchy:** Use font sizes to establish clear visual hierarchy
2. **Line Length:** Keep body text between 50-75 characters per line
3. **Whitespace:** Use generous line-height for readability

### Spacing
1. **Consistency:** Use spacing tokens instead of arbitrary values
2. **Rhythm:** Maintain consistent vertical rhythm with spacing multiples
3. **Breathing Room:** Don't be afraid of whitespace

### Shadows
1. **Elevation:** Use shadows to indicate elevation and hierarchy
2. **Subtlety:** Start with lighter shadows, increase only when needed
3. **Performance:** Limit complex shadows on frequently animated elements

---

## Migration Notes

When migrating existing components:

1. **Replace hardcoded colors** with design system tokens
2. **Replace pixel values** with spacing tokens
3. **Standardize border radius** using borderRadius tokens
4. **Update button styles** to use button variants
6. **Update font families** to use Inter/system fonts

---

## Future Enhancements

- [ ] Add dark mode color palette
- [ ] Create component library with pre-built components
- [ ] Add accessibility utilities (focus rings, skip links)
- [ ] Create Storybook documentation
- [ ] Add animation presets for common patterns
