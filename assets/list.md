# Portfolio Assets List

This document lists all the image assets that can be added to enhance the portfolio.

## Profile Images

### 1. Profile Photo
- **File name**: `profile-photo.jpg` or `profile-photo.png`
- **Location**: `assets/profile-photo.jpg`
- **Recommended size**: 800x800px (square)
- **Usage**: Replace the emoji (🤖) in the About section
- **Description**: Professional headshot or photo showcasing you

### 2. Hero Background (Optional)
- **File name**: `hero-background.jpg`
- **Location**: `assets/hero-background.jpg`
- **Recommended size**: 1920x1080px
- **Usage**: Can be used as a subtle background overlay in the hero section
- **Description**: Optional gradient overlay or tech-themed background

## Project Screenshots

### 3. Tron Cryptocurrency Tracker
- **File name**: `project-tron-tracker.png`
- **Location**: `assets/projects/project-tron-tracker.png`
- **Recommended size**: 1200x675px (16:9 aspect ratio)
- **Usage**: Replace the 🔐 emoji in Projects section
- **Description**: Screenshot of the Tron crypto tracking application interface

### 4. Crosswalk Safety Application
- **File name**: `project-crosswalk-app.png`
- **Location**: `assets/projects/project-crosswalk-app.png`
- **Recommended size**: 1200x675px (16:9 aspect ratio)
- **Usage**: Replace the 🚦 emoji in Projects section
- **Description**: Screenshot or mockup of the crosswalk safety app

### 5. English Vocabulary Training Website
- **File name**: `project-english-vocab.png`
- **Location**: `assets/projects/project-english-vocab.png`
- **Recommended size**: 1200x675px (16:9 aspect ratio)
- **Usage**: Replace the 📚 emoji in Projects section
- **Description**: Screenshot of englishnewwords.vercel.app

### 6. T-Shirt Showcase Website
- **File name**: `project-tshirt-showcase.png`
- **Location**: `assets/projects/project-tshirt-showcase.png`
- **Recommended size**: 1200x675px (16:9 aspect ratio)
- **Usage**: Replace the 👕 emoji in Projects section
- **Description**: Screenshot of crazyfabric-websitex.vercel.app

## University Logos/Badges (Optional)

### 7. KMUTT Logo
- **File name**: `kmutt-logo.png`
- **Location**: `assets/universities/kmutt-logo.png`
- **Recommended size**: 200x200px
- **Usage**: Can be added to the Education/Journey timeline
- **Description**: Official KMUTT logo

### 8. University of Toronto Logo
- **File name**: `uoft-logo.png`
- **Location**: `assets/universities/uoft-logo.png`
- **Recommended size**: 200x200px
- **Usage**: Can be added to the Journey timeline (Canada section)
- **Description**: Official U of T logo

### 9. Bangkok Christian College Logo
- **File name**: `bcc-logo.png`
- **Location**: `assets/universities/bcc-logo.png`
- **Recommended size**: 200x200px
- **Usage**: Can be added to the Journey timeline
- **Description**: School logo

## Award Certificates (Optional)

### 10. SEED Scholarship Certificate
- **File name**: `award-seed-scholarship.jpg`
- **Location**: `assets/awards/award-seed-scholarship.jpg`
- **Usage**: Can display in Awards section as proof
- **Description**: Official scholarship certificate/letter

### 11. Cyber Warrior Hackathon Certificate
- **File name**: `award-cyber-warrior.jpg`
- **Location**: `assets/awards/award-cyber-warrior.jpg`
- **Usage**: Can display in Awards section
- **Description**: Hackathon certificate or team photo

### 12. E-SAN Hackathon Certificate
- **File name**: `award-esan-hackathon.jpg`
- **Location**: `assets/awards/award-esan-hackathon.jpg`
- **Usage**: Can display in Awards section
- **Description**: Gold certificate or award photo

## Technical Stack Icons (Optional)

If you want to replace skill icons with actual tech logos:

### 13. Tech Stack Icons
- **Location**: `assets/icons/`
- **Files needed**:
  - `python-logo.svg`
  - `nextjs-logo.svg`
  - `typescript-logo.svg`
  - `react-logo.svg`
  - `tensorflow-logo.svg`
  - `pytorch-logo.svg`
  - `tailwind-logo.svg`
  - `google-cloud-logo.svg`
  - etc.
- **Recommended size**: SVG format (scalable)
- **Usage**: Replace emojis in Skills section

## How to Add Images

Once you have the images, follow these steps:

### Using Next.js Image Component

1. Place images in the `public/assets/` folder
2. Update the code in `app/page.tsx`:

```typescript
import Image from 'next/image';

// Example: Replace profile emoji
<Image
  src="/assets/profile-photo.jpg"
  alt="Patiharn Liangkobkit"
  width={400}
  height={400}
  className="rounded-2xl shadow-2xl"
/>

// Example: Replace project emoji
<Image
  src="/assets/projects/project-tron-tracker.png"
  alt="Tron Cryptocurrency Tracker"
  fill
  className="object-cover rounded-lg"
/>
```

## Priority Order

**High Priority** (Most impactful):
1. Profile Photo (#1)
2. Project Screenshots (#3, #4, #5, #6)

**Medium Priority**:
3. Award Certificates (#10, #11, #12)
4. University Logos (#7, #8)

**Low Priority** (Nice to have):
5. Tech Stack Icons (#13)
6. Hero Background (#2)

## Image Optimization Tips

- Use WebP format for better compression
- Optimize images before uploading (use tools like TinyPNG)
- Ensure images are high quality but not too large (< 500KB each)
- Use SVG format for logos when possible
- Next.js automatically optimizes images, but starting with smaller files helps

## Current Status

Currently using emoji placeholders (🤖, 🔐, 🚦, 📚, 👕, etc.) which look good but can be replaced with actual images for a more professional look.

The portfolio is fully functional without images - they are optional enhancements!
