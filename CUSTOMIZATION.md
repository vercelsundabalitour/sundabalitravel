# Sunda Bali Tour - Customization Guide

This guide will help you customize the website with your own content, images, and information.

## 🎯 Quick Start Checklist

- [ ] Update WhatsApp number across all files
- [ ] Replace placeholder images with your photos
- [ ] Update tour packages with your actual offerings
- [ ] Modify contact information
- [ ] Update Google Maps location
- [ ] Customize colors (optional)
- [ ] Add your social media links

---

## 📱 WhatsApp Integration

### Files to Update

Replace `+6281234567890` with your actual WhatsApp business number in:

1. **components/layout/Navbar.tsx** (Line 30)

```typescript
const whatsappNumber = "+6281234567890"; // Replace with actual number
```

2. **components/ui/WhatsAppFAB.tsx** (Line 10)

```typescript
const whatsappNumber = "+6281234567890"; // Replace with actual number
```

3. **app/tours/page.tsx** (Line 23)

```typescript
const whatsappNumber = "+6281234567890";
```

4. **app/contact/page.tsx** (Line 32)

```typescript
const whatsappNumber = "+6281234567890";
```

### Testing WhatsApp Integration

After updating, test by clicking:

- Book Now buttons
- WhatsApp FAB (floating button)
- Contact form submission

---

## 🖼️ Image Replacement

### Current Placeholder Images

All images are from Unsplash. Replace them with your professional photos.

### Hero Images (High Priority)

**Home Page Hero** - `app/page.tsx` (Line 27)

```typescript
src = "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920";
// Replace with: "/images/hero-home.jpg"
```

**Tours Page Hero** - `app/tours/page.tsx` (Line 37)

```typescript
src = "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920";
```

**About Page Hero** - `app/about/page.tsx` (Line 31)

```typescript
src = "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920";
```

**Contact Page Hero** - `app/contact/page.tsx` (Line 102)

```typescript
src = "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920";
```

### Tour Package Images

Edit `lib/data/tours.ts` to update tour package images:

```typescript
{
  id: 'ubud-adventure',
  title: 'Ubud Cultural Adventure',
  image: '/images/tours/ubud-adventure.jpg', // Your image path
  // ... other fields
}
```

### Image Optimization Tips

1. **Recommended Sizes:**

   - Hero images: 1920x1080px
   - Tour cards: 800x600px
   - Gallery: 600x600px
   - Testimonials: 150x150px

2. **Formats:**

   - Use WebP for best compression
   - JPG for photos
   - PNG for graphics with transparency

3. **Upload Location:**
   ```
   public/
   ├── images/
   │   ├── hero/
   │   ├── tours/
   │   └── gallery/
   ```

---

## 📦 Tour Packages

### Edit Tour Data

File: `lib/data/tours.ts`

```typescript
export const tourPackages: TourPackage[] = [
  {
    id: "unique-id", // Unique identifier
    title: "Tour Name", // Display name
    description: "Short description", // Card description
    longDescription: "Full details", // Modal description
    duration: "Full Day (8-10 hours)", // Tour length
    price: "From $65/person", // Pricing
    category: "Culture", // Filter category
    image: "/images/tours/tour.jpg", // Image path
    highlights: [
      // Key attractions
      "Highlight 1",
      "Highlight 2",
    ],
    included: [
      // What's included
      "Private transportation",
      "English-speaking guide",
    ],
  },
];
```

### Categories

Available filter categories:

- `'Adventure'`
- `'Culture'`
- `'Beach'`
- `'Nature'`
- `'Family'`

---

## 📍 Contact Information

### Company Details

**File: `components/layout/Footer.tsx`** (Lines 130-150)

Update address, phone, and email:

```typescript
<span className="text-muted-foreground">
  Ubud, Gianyar, Bali<br />Indonesia 80571
</span>
// ...
<a href="tel:+6281234567890">+62 812-3456-7890</a>
// ...
<a href="mailto:info@sundabalitour.com">info@sundabalitour.com</a>
```

**File: `components/StructuredData.tsx`**

Update Schema.org data for SEO:

```typescript
"telephone": "+6281234567890",
"email": "info@sundabalitour.com",
"address": {
  "streetAddress": "Your Street",
  "addressLocality": "Ubud",
  "addressRegion": "Bali",
  "postalCode": "80571",
}
```

---

## 🗺️ Google Maps

**File: `app/contact/page.tsx`** (Line 329)

1. Go to [Google Maps](https://www.google.com/maps)
2. Find your location
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace the src URL:

```typescript
<iframe
  src="YOUR_GOOGLE_MAPS_EMBED_URL_HERE"
  width="100%"
  height="100%"
  // ... rest of props
/>
```

---

## 🎨 Color Customization

### Brand Colors

**File: `app/globals.css`** (Lines 45-70)

Update CSS variables:

```css
:root {
  --primary: 10 77 60; /* Your primary color (RGB) */
  --secondary: 229 192 123; /* Your accent color (RGB) */
  --background: 248 245 239; /* Page background (RGB) */
}
```

### Gradient Colors

**File: `app/globals.css`** (Lines 128-135)

```css
.gradient-primary {
  background: linear-gradient(135deg, #0a4d3c, #136a50);
  /* Update hex colors */
}
```

### Color Conversion Tool

Convert hex to RGB:

```
#0A4D3C → rgb(10, 77, 60) → 10 77 60 (for Tailwind)
```

---

## 🔗 Social Media Links

**File: `components/layout/Footer.tsx`** (Lines 14-18)

```typescript
const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/yourpage", label: "Facebook" },
  {
    icon: Instagram,
    href: "https://instagram.com/yourhandle",
    label: "Instagram",
  },
  { icon: Mail, href: "mailto:your@email.com", label: "Email" },
];
```

Add more platforms:

```typescript
import { Youtube, Twitter } from 'lucide-react'

{ icon: Youtube, href: 'https://youtube.com/@yourchannel', label: 'YouTube' },
{ icon: Twitter, href: 'https://twitter.com/yourhandle', label: 'Twitter' },
```

---

## ✍️ Content Updates

### Meta Tags & SEO

**File: `app/layout.tsx`** (Lines 18-35)

Update site metadata:

```typescript
export const metadata: Metadata = {
  title: "Your Business Name - Tagline",
  description: "Your business description",
  keywords: "bali, tour, travel, your keywords",
  // ... other fields
};
```

### Page Titles

Each page has its own metadata:

- `app/tours/layout.tsx`
- `app/about/layout.tsx`
- `app/contact/layout.tsx`

### Testimonials

**File: `lib/data/tours.ts`** (Bottom of file)

```typescript
export const testimonials = [
  {
    name: "Customer Name",
    location: "Country",
    rating: 5,
    comment: "Their testimonial",
    image: "/images/testimonials/customer.jpg",
  },
];
```

### Featured Destinations

**File: `lib/data/tours.ts`**

```typescript
export const featuredDestinations = [
  {
    name: "Destination Name",
    description: "Short description",
    image: "/images/destinations/place.jpg",
  },
];
```

---

## 🚀 Deployment

### Before Deploying

1. ✅ Test all pages locally
2. ✅ Check mobile responsiveness
3. ✅ Test all links and buttons
4. ✅ Verify WhatsApp integration
5. ✅ Test contact form
6. ✅ Check all images load
7. ✅ Test dark mode
8. ✅ Run build: `npm run build`

### Deploy to Vercel

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

### Custom Domain

1. In Vercel dashboard, go to Settings → Domains
2. Add your domain
3. Update DNS records as instructed
4. Wait for DNS propagation (24-48 hours)

---

## 🐛 Common Issues

### Images Not Loading

**Problem:** External images blocked

**Solution:** Add domain to `next.config.ts`:

```typescript
images: {
  remotePatterns: [{ protocol: "https", hostname: "yourdomain.com" }];
}
```

### WhatsApp Not Opening

**Problem:** Incorrect number format

**Solution:** Use international format without spaces:

```
Correct: +6281234567890
Wrong: +62 812 3456 7890
```

### Build Errors

**Problem:** TypeScript errors during build

**Solution:**

```bash
npm run build
# Check error messages
# Fix reported issues
# Rebuild
```

---

## 📞 Need Help?

If you need assistance with customization:

1. Check the main README.md
2. Review Next.js documentation
3. Check Tailwind CSS docs
4. Review component source code for examples

---

## ✨ Pro Tips

1. **Backup First:** Always keep a copy before major changes
2. **Test Locally:** Test thoroughly before deploying
3. **Image Quality:** Use high-quality, professional photos
4. **Mobile First:** Always check mobile view
5. **Performance:** Optimize images before uploading
6. **SEO:** Update all meta descriptions
7. **Analytics:** Add Google Analytics for tracking

---

**Last Updated:** December 2025
**Version:** 1.0.0
