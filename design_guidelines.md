# Design Guidelines: Professional Portfolio Website
## Johnbithon Muchiri Wanjama - Network & Systems Administrator

## Design Approach
**Hybrid Approach:** Design system foundation with professional portfolio references (Linear, Notion careers, GitHub profiles)
- Clean, modern aesthetic emphasizing credibility and technical expertise
- Professional color palette suitable for IT/tech industry
- Card-based layouts with subtle depth for content organization
- Mobile-first responsive design

## Color Palette

### Light Mode
- **Primary:** 174 75% 41% (Professional teal - refined from original)
- **Primary Hover:** 174 75% 35%
- **Background:** 0 0% 100% (Pure white)
- **Surface:** 210 20% 98% (Subtle gray for cards)
- **Text Primary:** 220 15% 15% (Deep charcoal)
- **Text Secondary:** 220 10% 45% (Medium gray)
- **Border:** 220 13% 90%

### Dark Mode
- **Primary:** 174 70% 50%
- **Primary Hover:** 174 70% 60%
- **Background:** 220 15% 10%
- **Surface:** 220 13% 15%
- **Text Primary:** 210 20% 98%
- **Text Secondary:** 220 10% 65%
- **Border:** 220 15% 25%

### Accent Colors (Strategic Use)
- **Success/Active:** 142 76% 36% (for status indicators)
- **Blue Accent:** 217 91% 60% (CTAs, links)

## Typography

**Font Stack:** Inter (primary) via Google Fonts, with system fallbacks

### Hierarchy
- **Hero Headline:** text-5xl md:text-6xl, font-bold, tracking-tight
- **Section Headers:** text-3xl md:text-4xl, font-semibold
- **Card Titles:** text-xl md:text-2xl, font-semibold
- **Body Text:** text-base md:text-lg, leading-relaxed
- **Caption/Meta:** text-sm, text-secondary
- **Quotes:** text-lg md:text-xl, italic, font-light

## Layout System

**Spacing Primitives:** Use Tailwind units of 4, 8, 12, 16, 20, 24
- **Section Padding:** py-16 md:py-24 (vertical rhythm)
- **Container:** max-w-7xl mx-auto px-6
- **Card Padding:** p-6 md:p-8
- **Grid Gaps:** gap-6 md:gap-8
- **Element Spacing:** space-y-4 or space-y-6 for vertical stacking

## Component Library

### Navigation
- **Sticky header** with blur backdrop (backdrop-blur-md)
- Logo + name on left, navigation links right
- Mobile: Hamburger menu transforming to full-screen overlay
- **CTA button** in nav with primary color
- Height: h-16 md:h-20

### Hero Section
- **Full-width background** with subtle gradient overlay
- **Two-column layout** (60/40 split on desktop)
  - Left: Headshot/profile image (rounded-2xl, shadow-2xl)
  - Right: Name, title, brief intro, contact info, CTA buttons
- **Height:** min-h-[85vh] for impact
- Include professional headshot with subtle border/shadow treatment

### Profile/About Section
- **Two-column layout** on desktop
- Left: Detailed bio and expertise statement
- Right: **Skills grid** with technology icons/labels (3-4 columns)
- Card-based design with subtle hover elevation

### Portfolio/Projects Grid
- **3-column grid** on desktop (lg:grid-cols-3), 2 on tablet, 1 on mobile
- Each card includes:
  - Project thumbnail/screenshot (aspect-video)
  - Title and category tag
  - Brief description
  - Tech stack badges (small pills)
- **Hover effect:** Subtle scale and shadow increase (transform hover:scale-105 transition-transform)

### Books Section
- **4-column grid** on desktop for book covers
- Vertical card design:
  - Book cover image (aspect-[2/3])
  - Title (font-semibold)
  - Author (text-sm, text-secondary)
- Hover: Slight lift effect

### Quotes Section
- **Masonry or staggered layout** for visual interest
- Each quote in bordered card with:
  - Large quote marks (decorative element)
  - Quote text (italic, text-lg)
  - Author attribution (text-sm, right-aligned)
- Background: Subtle pattern or gradient

### Contact Form
- **Single column, centered** (max-w-2xl)
- Form fields with floating labels
- Input styling: border-2, rounded-lg, focus:ring-2 effect
- Submit button: Full primary color with icon
- Include alternative contact methods (email, phone) as cards

### Footer
- **Three-column layout** (desktop): 
  - Branding + tagline
  - Quick links
  - Social media icons
- Copyright and credit centered below
- Background: Slightly darker than body for contrast

## Images

### Required Images
1. **Hero Image:** Professional headshot/portrait (400x400px minimum)
   - Placement: Hero section left side
   - Style: Rounded corners, subtle shadow
   
2. **Project Screenshots:** 3 portfolio thumbnails (800x600px)
   - Placement: Portfolio grid cards
   - Style: Aspect-video ratio, object-cover
   
3. **Book Covers:** 3 book cover images (300x450px)
   - Placement: Books grid
   - Style: Aspect-[2/3], shadow effect

4. **Logo:** Small branding logo for navigation (optional, can use text)

### Image Treatment
- All images: rounded-lg or rounded-xl
- Portfolio/project images: hover:opacity-90 transition
- Use object-cover for consistent aspect ratios
- Lazy loading for performance

## Interactions & Animations

**Minimal, purposeful animations:**
- **Navigation:** Smooth scroll behavior for anchor links
- **Cards:** Subtle hover lift (translateY(-4px)) with shadow increase
- **Buttons:** Scale on active (scale-95), opacity change on hover
- **Form inputs:** Focus ring expansion (ring-2 ring-primary)
- **Page load:** Optional fade-in for hero (0.3s delay)

**NO:** Excessive parallax, rotating elements, or distracting scroll effects

## Accessibility & Responsiveness

- **Dark mode toggle** in navigation (sun/moon icon)
- All interactive elements: min 44x44px touch target
- Form labels: Always visible (not placeholder-only)
- Color contrast: WCAG AA minimum (4.5:1 for text)
- Keyboard navigation: visible focus states (ring-2)
- Mobile breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)

## Visual Hierarchy Principles

1. **Hero dominates** (largest text, most visual weight)
2. **Section headers** clearly delineate content areas
3. **Card elevation** indicates interactive/important content
4. **Consistent spacing** creates rhythm and predictability
5. **Color used strategically** - primary for CTAs, secondary for supporting info

## Professional Polish Details

- Subtle gradient backgrounds (avoid harsh transitions)
- Consistent corner radius: rounded-lg (8px) for most elements, rounded-xl (12px) for cards
- Drop shadows: Use sparingly (shadow-md on cards, shadow-lg on hover)
- Iconography: Use Heroicons (outline style) for UI elements
- Tech stack badges: Small pills with border, subtle background
- Professional email/phone formatting in contact section