# 🎨 Advanced Components - Quick Reference Guide

## Component Import Examples

```typescript
// Animation Components
import {
  MagneticButton,
  ScrollReveal,
  TextReveal,
  ParallaxImage,
} from "@/components/animations/AdvancedAnimations";

// 3D Components
import WebGLHero from "@/components/3d/WebGLHero";
import TiltCard from "@/components/ui/TiltCard";

// Sections
import HorizontalScrollGallery from "@/components/sections/HorizontalScrollGallery";

// UI Components
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import ScrollProgress from "@/components/ui/ScrollProgress";
import CustomCursor from "@/components/ui/CustomCursor";

// Providers
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

// State Management
import { useUIStore } from "@/store/uiStore";
```

---

## MagneticButton

**Purpose:** Create buttons that magnetically attract toward the mouse cursor

**Usage:**

```tsx
<MagneticButton>
  <button className="px-6 py-3 bg-primary text-white rounded-lg">
    Hover Me
  </button>
</MagneticButton>
```

**Props:** None (wraps children)

**Best For:**

- Primary CTAs
- Navigation buttons
- Booking buttons
- Important actions

---

## ScrollReveal

**Purpose:** Fade in elements as they enter the viewport

**Usage:**

```tsx
<ScrollReveal delay={0.2}>
  <div>
    <h2>This content fades in</h2>
    <p>When it enters the viewport</p>
  </div>
</ScrollReveal>
```

**Props:**

```typescript
{
  children: ReactNode     // Content to reveal
  className?: string      // Optional wrapper classes
  delay?: number         // Animation delay in seconds (default: 0)
}
```

**Example with Delay:**

```tsx
<ScrollReveal delay={0.3}>
  <Card>Content appears after 0.3s</Card>
</ScrollReveal>
```

---

## TextReveal

**Purpose:** Animate text word-by-word as it appears

**Usage:**

```tsx
<TextReveal className="text-5xl font-bold">
  Welcome to Sunda Bali Tour
</TextReveal>
```

**Props:**

```typescript
{
  children: string        // Text to animate (must be string)
  className?: string      // CSS classes for styling
  delay?: number         // Initial delay (default: 0)
}
```

**Best For:**

- Hero headlines
- Section titles
- Important messaging
- Brand statements

**Note:** Children must be a string, not JSX elements

---

## ParallaxImage

**Purpose:** Create background images with parallax scroll effect

**Usage:**

```tsx
<section className="relative h-screen">
  <ParallaxImage src="/images/hero-bg.jpg" alt="Background" speed={0.5} />
  <div className="absolute inset-0 z-10">{/* Your content here */}</div>
</section>
```

**Props:**

```typescript
{
  src: string            // Image URL
  alt: string            // Alt text
  speed?: number         // Parallax speed (default: 0.5)
                        // 0.5 = half scroll speed
                        // 1 = normal speed
                        // 2 = double speed
}
```

**Speed Guide:**

- `0.3` - Very slow parallax (subtle)
- `0.5` - Medium parallax (recommended)
- `0.7` - Fast parallax (dramatic)

---

## TiltCard

**Purpose:** Add 3D tilt effect to cards with glare

**Usage:**

```tsx
<TiltCard
  className="max-w-sm"
  options={{
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.3,
    scale: 1.05,
  }}
>
  <div className="p-6 bg-white rounded-lg shadow-lg">
    <h3>Interactive Card</h3>
    <p>Hover to see 3D effect</p>
  </div>
</TiltCard>
```

**Props:**

```typescript
{
  children: ReactNode
  className?: string
  options?: {
    max?: number          // Max tilt angle (default: 15)
    speed?: number        // Transition speed (default: 400)
    glare?: boolean       // Enable glare effect (default: true)
    "max-glare"?: number  // Glare intensity 0-1 (default: 0.3)
    scale?: number        // Scale on hover (default: 1.02)
  }
}
```

**Preset Configurations:**

**Subtle Effect:**

```tsx
options={{
  max: 8,
  speed: 300,
  glare: true,
  "max-glare": 0.2,
  scale: 1.01
}}
```

**Medium Effect (Default):**

```tsx
options={{
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.3,
  scale: 1.02
}}
```

**Dramatic Effect:**

```tsx
options={{
  max: 25,
  speed: 500,
  glare: true,
  "max-glare": 0.5,
  scale: 1.05
}}
```

---

## WebGLHero

**Purpose:** Animated fluid background with custom shaders

**Usage:**

```tsx
<section className="relative h-screen">
  <WebGLHero />

  <div className="relative z-10">{/* Your hero content */}</div>
</section>
```

**Props:** None

**Features:**

- Custom GLSL shaders
- Mouse interaction
- Scroll-based effects
- Brand color palette

**Note:** Automatically fills parent container

---

## HorizontalScrollGallery

**Purpose:** Horizontal scrolling destination showcase

**Usage:**

```tsx
import { featuredDestinations } from "@/lib/data/tours";

<HorizontalScrollGallery destinations={featuredDestinations} />;
```

**Props:**

```typescript
{
  destinations: Array<{
    name: string;
    description: string;
    image: string;
  }>;
}
```

**Custom Destinations:**

```tsx
const myDestinations = [
  {
    name: "Uluwatu Temple",
    description: "Clifftop temple with stunning sunset views",
    image: "/images/uluwatu.jpg"
  },
  // ... more destinations
]

<HorizontalScrollGallery destinations={myDestinations} />
```

---

## LanguageSwitcher

**Purpose:** Toggle between English and Indonesian

**Usage:**

```tsx
// In Navbar or any component
<LanguageSwitcher />
```

**Props:** None

**Access Current Language:**

```tsx
import { useUIStore } from "@/store/uiStore";

function MyComponent() {
  const { language, setLanguage } = useUIStore();

  return (
    <div>
      Current: {language}
      <button onClick={() => setLanguage("id")}>Switch to Indonesian</button>
    </div>
  );
}
```

---

## ScrollProgress

**Purpose:** Visual scroll progress indicator at top of page

**Usage:**

```tsx
// In root layout
<body>
  <ScrollProgress />
  {/* Rest of your app */}
</body>
```

**Props:** None

**Styling:** Automatically uses primary and secondary colors from theme

---

## CustomCursor

**Purpose:** Interactive cursor with magnetic effects

**Usage:**

```tsx
// In root layout
<body>
  <CustomCursor />
  {/* Rest of your app */}
</body>
```

**Props:** None

**Control Cursor State:**

```tsx
import { useUIStore } from "@/store/uiStore";

function MyComponent() {
  const { setCursorVariant } = useUIStore();

  return (
    <button
      onMouseEnter={() => setCursorVariant("hover")}
      onMouseLeave={() => setCursorVariant("default")}
      onMouseDown={() => setCursorVariant("click")}
    >
      Hover Me
    </button>
  );
}
```

**Cursor Variants:**

- `'default'` - Normal state (40px)
- `'hover'` - Hover state (80px, magnified)
- `'click'` - Click state (30px, shrunk)

---

## SmoothScrollProvider

**Purpose:** Enable smooth scrolling throughout the app

**Usage:**

```tsx
// Wrap your entire app (typically in layout.tsx)
<SmoothScrollProvider>
  <YourApp />
</SmoothScrollProvider>
```

**Props:** None

**Features:**

- Lenis smooth scroll
- GSAP ScrollTrigger sync
- 60fps performance

---

## Zustand Store (useUIStore)

**Purpose:** Global state management

**Usage:**

```tsx
import { useUIStore } from "@/store/uiStore";

function MyComponent() {
  const {
    cursorVariant,
    setCursorVariant,
    language,
    setLanguage,
    theme,
    setTheme,
    isMobileMenuOpen,
    setMobileMenuOpen,
  } = useUIStore();

  return (
    <div>
      Current language: {language}
      <button onClick={() => setLanguage("id")}>Switch to Indonesian</button>
    </div>
  );
}
```

**Available State:**

```typescript
{
  // Cursor
  cursorVariant: 'default' | 'hover' | 'click'
  setCursorVariant: (variant) => void

  // Menu
  isMobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void

  // Theme
  theme: 'light' | 'dark'
  setTheme: (theme) => void

  // Language
  language: 'en' | 'id'
  setLanguage: (language) => void

  // Loading
  isLoading: boolean
  setLoading: (loading: boolean) => void

  // Scroll
  scrollY: number
  setScrollY: (y: number) => void
}
```

---

## Common Patterns

### Pattern 1: Animated Section Header

```tsx
<ScrollReveal>
  <div className="text-center mb-16">
    <TextReveal className="text-5xl font-heading font-bold mb-4">
      Our Services
    </TextReveal>
    <p className="text-xl text-muted-foreground">
      Tailored experiences for your journey
    </p>
  </div>
</ScrollReveal>
```

### Pattern 2: Magnetic CTA

```tsx
<MagneticButton>
  <button className="px-8 py-4 bg-primary text-white rounded-lg">
    Book Now
  </button>
</MagneticButton>
```

### Pattern 3: 3D Card Grid

```tsx
<div className="grid grid-cols-3 gap-8">
  {items.map((item, index) => (
    <ScrollReveal key={item.id} delay={index * 0.1}>
      <TiltCard>
        <Card>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </Card>
      </TiltCard>
    </ScrollReveal>
  ))}
</div>
```

### Pattern 4: Hero Section

```tsx
<section className="relative h-screen">
  <WebGLHero />

  <div className="relative z-10 flex items-center justify-center h-full">
    <TextReveal
      className="text-7xl font-heading font-bold text-white"
      delay={0.3}
    >
      Welcome to Paradise
    </TextReveal>
  </div>
</section>
```

### Pattern 5: Parallax CTA Section

```tsx
<section className="relative h-96">
  <ParallaxImage src="/images/beach.jpg" alt="Beach" speed={0.5} />
  <div className="absolute inset-0 bg-black/60 z-1" />

  <div className="relative z-10 flex items-center justify-center h-full">
    <ScrollReveal>
      <div className="text-center text-white">
        <TextReveal className="text-5xl font-bold mb-6">
          Ready to Start?
        </TextReveal>
        <MagneticButton>
          <button className="px-8 py-4 bg-white text-black">Get Started</button>
        </MagneticButton>
      </div>
    </ScrollReveal>
  </div>
</section>
```

---

## Performance Tips

### 1. Lazy Load Heavy Components

```tsx
import dynamic from "next/dynamic";

const WebGLHero = dynamic(() => import("@/components/3d/WebGLHero"), {
  ssr: false,
  loading: () => (
    <div className="h-screen bg-gradient-to-b from-primary to-secondary" />
  ),
});
```

### 2. Debounce Scroll Listeners

```tsx
import { debounce } from "lodash";

useEffect(() => {
  const handleScroll = debounce(() => {
    // Your scroll logic
  }, 16); // ~60fps

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
```

### 3. Optimize Images

```tsx
import Image from "next/image";

<Image
  src="/images/hero.jpg"
  alt="Hero"
  width={1920}
  height={1080}
  quality={85}
  priority // For above-the-fold images
/>;
```

### 4. Use will-change Sparingly

```css
/* Only for elements that will definitely animate */
.animated-element {
  will-change: transform, opacity;
}

/* Remove after animation completes */
.animated-element.animation-done {
  will-change: auto;
}
```

---

## Troubleshooting

### Issue: Smooth scroll not working

**Solution:** Ensure SmoothScrollProvider wraps your entire app

### Issue: 3D tilt not working on mobile

**Solution:** This is expected behavior for performance. TiltCard automatically disables on touch devices.

### Issue: WebGL hero showing blank

**Solution:** Check browser console for WebGL support. Fallback to static background if needed.

### Issue: Text not revealing word-by-word

**Solution:** Ensure TextReveal children is a plain string, not JSX elements.

### Issue: Cursor not appearing

**Solution:** CustomCursor only appears on desktop. Check if pointer-events are blocking it.

---

## Browser Support

- **Chrome/Edge:** Full support ✅
- **Firefox:** Full support ✅
- **Safari:** Full support ✅
- **Mobile Safari:** Partial (no custom cursor, no 3D tilt) ⚠️
- **IE11:** Not supported ❌

---

**Last Updated:** December 1, 2025
