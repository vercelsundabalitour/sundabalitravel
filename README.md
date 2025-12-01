# Sunda Bali Tour - Premium Travel Website

A stunning, modern, and highly interactive website for Sunda Bali Tour - a private driver and custom tour service in Bali. Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion for smooth, cinematic animations.

## 🌟 Features

### Design & User Experience

- **Awwwards-level Design**: Premium, modern, and visually stunning interface
- **Smooth Animations**: GSAP-level animations using Framer Motion
- **Responsive Design**: Mobile-first approach, perfect on all devices
- **Dark Mode**: Seamless theme switching with next-themes
- **Glassmorphism Effects**: Modern UI with backdrop blur and gradients
- **Micro-interactions**: Delightful hover effects and transitions

### Pages

1. **Home Page**

   - Fullscreen hero with cinematic background
   - Animated headline and call-to-action
   - Services showcase with icon cards
   - Featured destinations carousel
   - Testimonials from happy travelers
   - Final CTA section

2. **Tour Packages**

   - 8 curated tour packages
   - Interactive filter system (Adventure, Culture, Beach, Nature, Family)
   - Modal detail view with highlights and inclusions
   - Direct WhatsApp booking integration

3. **About Us**

   - Compelling brand story
   - Company values with icons
   - Interactive timeline of growth
   - Photo gallery with hover effects

4. **Contact**
   - Beautiful contact form with validation
   - Quick contact info cards
   - Google Maps integration
   - Direct WhatsApp messaging

### Technical Features

- **Next.js 15 App Router**: Latest features and optimizations
- **TypeScript**: Type-safe development
- **Tailwind CSS v4**: Custom color palette and utilities
- **ShadCN UI**: Beautiful, accessible component library
- **Framer Motion**: Advanced animations and page transitions
- **SEO Optimized**: Meta tags, Open Graph, and Schema.org markup
- **Performance**: Image optimization with Next.js Image component

## 🎨 Brand Colors

```css
Primary: #0A4D3C (Deep Emerald Green)
Secondary: #E5C07B (Warm Gold Sand)
Background: #F8F5EF (Nature Beige)
Accent: #FFFFFF (Pure White)
```

## 📦 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: ShadCN UI
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Fonts**:
  - Heading: Playfair Display
  - Body: Inter

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
sundabalitour/
├── app/
│   ├── tours/              # Tour packages page
│   ├── about/              # About us page
│   ├── contact/            # Contact page
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Navigation with scroll effect
│   │   └── Footer.tsx      # Footer with links
│   ├── ui/
│   │   ├── WhatsAppFAB.tsx       # Floating action button
│   │   ├── ServiceCard.tsx       # Service display card
│   │   ├── DestinationCard.tsx   # Destination showcase
│   │   └── TestimonialCard.tsx   # Customer reviews
│   ├── providers/
│   │   └── ThemeProvider.tsx     # Dark mode provider
│   └── StructuredData.tsx        # SEO schema
├── lib/
│   ├── data/
│   │   └── tours.ts              # Tour packages data
│   └── utils.ts                  # Utility functions
└── public/                       # Static assets
```

## 🎯 Key Features

### Navbar

- Sticky navigation with scroll-triggered background
- Mobile-responsive hamburger menu
- Theme toggle button
- Smooth animations

### WhatsApp Integration

- Floating action button for instant contact
- Direct booking from tour packages
- Contact form integration
- Appears after scrolling with pulse animation

### Tour Packages

- Category-based filtering
- Beautiful card layouts
- Modal detail view
- Responsive grid system

## 🌐 SEO Features

- Dynamic meta tags for all pages
- Open Graph protocol for social sharing
- Schema.org structured data (TravelAgency)
- Semantic HTML structure
- Alt tags on all images

## 📱 Customization

### WhatsApp Number

Update the phone number in these files:

- `components/layout/Navbar.tsx`
- `components/ui/WhatsAppFAB.tsx`
- `app/tours/page.tsx`
- `app/contact/page.tsx`

Replace `+6281234567890` with your actual WhatsApp business number.

### Colors

Edit `app/globals.css` to change the color scheme:

```css
:root {
  --primary: 10 77 60; /* Deep Emerald Green */
  --secondary: 229 192 123; /* Warm Gold Sand */
  --background: 248 245 239; /* Nature Beige */
}
```

### Tour Packages

Edit `lib/data/tours.ts` to add/modify tour packages with your actual data.

### Images

Replace Unsplash placeholder images with your own high-quality photos.

### Google Maps

Update the iframe src in `app/contact/page.tsx` with your actual location.

## 📈 Performance

- Image Optimization with Next.js Image component
- Automatic code splitting with App Router
- Lazy loading for images and components
- Static generation for optimal performance

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

Compatible with Netlify, Railway, DigitalOcean, and other Next.js hosting providers.

## 📄 License

Created for Sunda Bali Tour. All rights reserved.

---

**Built with ❤️ for Sunda Bali Tour**
