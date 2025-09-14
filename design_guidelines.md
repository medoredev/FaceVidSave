# Facebook Video Downloader Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from utility-focused tools like **YouTube downloaders and Notion** for clean, efficient interfaces that prioritize functionality while maintaining visual appeal.

## Core Design Elements

### Color Palette
**Primary Colors:**
- Light mode: 219 30% 15% (dark slate)
- Dark mode: 220 25% 90% (light gray)

**Accent Colors:**
- Primary action: 216 100% 50% (bright blue)
- Success: 142 70% 45% (green)
- Error: 0 70% 50% (red)
- Warning: 38 90% 50% (orange)

### Typography
**Font Family:** Inter from Google Fonts
- Headings: 600 weight
- Body text: 400 weight
- UI elements: 500 weight
- Sizes: text-sm, text-base, text-lg, text-xl, text-2xl

### Layout System
**Spacing Units:** Tailwind units of 2, 4, 6, 8, 12, and 16
- Consistent use of p-4, m-6, gap-8 for main layouts
- Component spacing: p-2, p-4 for smaller elements
- Section spacing: py-12, py-16 for vertical rhythm

### Component Library

**Input Components:**
- Large URL input field with rounded corners (rounded-lg)
- Clear placeholder text: "Paste Facebook video URL here..."
- Validation states with color-coded borders

**Action Buttons:**
- Primary download button: Blue with white text
- Secondary buttons: Outline style with hover states
- Loading states with spinner animations

**Content Display:**
- Video preview cards with thumbnail, title, and metadata
- Clean typography hierarchy
- Subtle shadows and borders for card separation

**Navigation:**
- Minimal header with app branding
- Clean, uncluttered layout focusing on the main functionality

### Layout Structure

**Single-Page Application:**
1. **Header Section:** Simple branding and title
2. **Main Input Area:** Centered URL input with prominent download button
3. **Preview Section:** Video thumbnail, title, and download options (appears after URL processing)
4. **Footer:** Basic links and attribution

**Responsive Design:**
- Mobile-first approach with stacked layouts
- Desktop: wider input fields and horizontal card layouts
- Tablet: balanced between mobile and desktop patterns

### Visual Treatments

**Backgrounds:**
- Light mode: Clean white/gray backgrounds
- Dark mode: Deep charcoal with subtle gradients

**Interactive Elements:**
- Subtle hover effects on buttons and cards
- Focus states for accessibility
- Loading animations for API calls

**Error Handling:**
- Inline error messages with clear iconography
- Toast notifications for success/failure states
- Helpful text for invalid URL formats

### Images
**No large hero image required** - focus on functional, clean interface with optional small branding logo in header.

**Icon Usage:**
- Download icons from Heroicons
- Social media icons for Facebook branding context
- Status icons for loading, success, and error states

This design prioritizes clarity, efficiency, and user trust while maintaining a modern, professional appearance suitable for a utility application.