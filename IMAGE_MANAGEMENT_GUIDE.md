# 🖼️ Image Management Guide

## Overview

All image paths for your portfolio are now centralized in `content/images.ts`. This makes it easy to manage all your photos in one place!

## 📁 Folder Structure

```
public/images/
├── profile/          # Profile pictures
├── journey/          # Education photos (USA, KMUTT, UofT)
├── projects/         # Project screenshots
├── awards/           # Award ceremonies and certificates
└── activities/       # Volunteer work and band photos

content/
└── images.ts         # ← Edit this file to change image paths
```

## 🎯 How to Add/Change Images

### Step 1: Add Your Image Files

1. Place your image in the appropriate folder under `public/images/`
2. Use clear, descriptive filenames:
   - ✅ Good: `esan-award-ceremony-2025.jpg`
   - ❌ Bad: `IMG_1234.jpg`

### Step 2: Update the Image Path

1. Open `content/images.ts`
2. Find the section for your image
3. Update the path

**Example**:
```typescript
// Before
esan: {
  certificate: "/images/awards/esan-certificate.jpg",  // Old placeholder
}

// After
esan: {
  certificate: "/images/awards/my-esan-certificate-2025.jpg",  // Your actual photo
}
```

### Step 3: Save and Reload

The website will automatically use your new image!

## 📋 Common Tasks

### Replace E-SAN Hackathon Award Photos

**File**: `content/images.ts`
**Location**: `awards.esan`

```typescript
esan: {
  // Main award photos (shown on Awards section)
  certificate: "/images/awards/your-certificate.jpg",
  trophy: "/images/awards/your-trophy-photo.jpg",
  teamAward: "/images/awards/team-with-award.jpg",

  // Award Ceremony photos (shown in modal popup)
  ceremony1: "/images/awards/ceremony-stage-1.jpg",
  ceremony2: "/images/awards/ceremony-stage-2.jpg",
  ceremony3: "/images/awards/receiving-award.jpg",
  ceremony4: "/images/awards/team-celebration.jpg",

  // Hackathon Experience photos
  working1: "/images/awards/coding-session-1.jpg",
  working2: "/images/awards/team-working.jpg",
  working3: "/images/awards/presentation-prep.jpg",
  working4: "/images/awards/demo-time.jpg",

  // Team & Networking photos
  team1: "/images/awards/full-team-photo.jpg",
  team2: "/images/awards/networking-1.jpg",
  team3: "/images/awards/networking-2.jpg",
  team4: "/images/awards/group-dinner.jpg"
}
```

### Add Music Band Performance Photos

**File**: `content/images.ts`
**Location**: `activities.musicBand`

```typescript
musicBand: {
  // Main photos (shown on Activities section)
  performance1: "/images/activities/stage-performance-1.jpg",
  performance2: "/images/activities/stage-performance-2.jpg",
  guitarSolo: "/images/activities/guitar-solo-moment.jpg",
  teamPhoto: "/images/activities/band-team-2024.jpg",
  rehearsal: "/images/activities/practice-session.jpg",

  // Additional photos (shown in modal)
  stage1: "/images/activities/concert-crowd.jpg",
  stage2: "/images/activities/full-band-stage.jpg"
}
```

### Update Chicken Knight Volunteer Photos

**File**: `content/images.ts`
**Location**: `activities.chickenKnight`

```typescript
chickenKnight: {
  // Main photos
  cooking: "/images/activities/cooking-food.jpg",
  serving: "/images/activities/serving-meals.jpg",
  team: "/images/activities/volunteer-team.jpg",
  community: "/images/activities/with-community.jpg",

  // Event photos
  event1: "/images/activities/event-day-1.jpg",
  event2: "/images/activities/event-day-2.jpg"
}
```

### Change Project Screenshots

**File**: `content/images.ts`
**Location**: `projects.*`

```typescript
// Tron Tracker
tronTracker: {
  main: "/images/projects/tron-app-screenshot.jpg",
  demo: "/images/projects/tron-demo-video-thumb.jpg",
  team: "/images/projects/cyber-warrior-team-2025.jpg"
},

// Crosswalk App
crosswalkApp: {
  main: "/images/projects/crosswalk-app-ui.jpg",
  demo: "/images/projects/crosswalk-demo.jpg",
  presentation: "/images/projects/presenting-solution.jpg"
}
```

## 📐 Image Guidelines

### Recommended Sizes
- **Award Certificates**: 1200×900px or higher
- **Team Photos**: 1920×1080px
- **Screenshots**: Original resolution (maintain aspect ratio)
- **Profile Photos**: 500×500px minimum

### File Formats
- ✅ **JPEG (.jpg)**: Best for photos
- ✅ **PNG (.png)**: Best for screenshots with text
- ⚠️ **WebP (.webp)**: Modern format (good for web)
- ❌ Avoid: Large uncompressed files

### File Size
- Keep images under 2MB each
- Compress large files before uploading
- Tools: TinyPNG, Squoosh, or Photoshop "Save for Web"

## 🔧 Using Images in Code

### Basic Usage
```typescript
import { images } from '@/content';

<Image
  src={images.awards.esan.certificate}
  alt="E-SAN Hackathon Certificate"
  width={800}
  height={600}
/>
```

### With Fallback
```typescript
import { images, getImage } from '@/content';

<Image
  src={getImage(images.awards.esan.certificate, images.fallback.placeholder)}
  alt="E-SAN Hackathon Certificate"
/>
```

## 📊 Image Organization Tips

### 1. Naming Convention
Use this pattern: `section-description-year.extension`

**Examples**:
- `esan-team-award-2025.jpg`
- `band-performance-school-festival-2024.jpg`
- `chicken-knight-cooking-event-jan2025.jpg`

### 2. Folder Structure
Keep related images together:

```
public/images/awards/
├── esan-ceremony-1.jpg
├── esan-ceremony-2.jpg
├── esan-team.jpg
└── esan-certificate.jpg
```

### 3. Backup Originals
- Keep original high-resolution photos in a separate backup folder
- Upload optimized versions to the website
- You can always re-optimize later if needed

## 🎨 Placeholder System

### Current Placeholders
The `images.ts` file uses placeholder paths from `extracted-images/`:

```typescript
placeholder1: "/images/extracted-images/image70.jpeg"
placeholder2: "/images/extracted-images/image130.jpeg"
```

### Replacing Placeholders
1. **Find where it's used**: Look for `placeholder1`, `placeholder2`, etc.
2. **Add your actual photo**: Upload to appropriate folder
3. **Update the path**: Replace the placeholder path
4. **Test**: Check that image appears correctly on the website

**Example**:
```typescript
// Before
esan: {
  placeholder1: "/images/extracted-images/image70.jpeg",
  placeholder2: "/images/extracted-images/image130.jpeg"
}

// After
esan: {
  ceremony1: "/images/awards/esan-receiving-award.jpg",
  ceremony2: "/images/awards/esan-team-celebration.jpg"
}
```

## ⚠️ Important Notes

### DO ✅
- Use descriptive filenames
- Organize images in proper folders
- Compress large images before uploading
- Keep aspect ratios consistent within sections
- Update both the filename AND the path in `images.ts`

### DON'T ❌
- Don't use spaces in filenames (use hyphens: `my-photo.jpg`)
- Don't upload huge uncompressed files
- Don't forget to update the path in `images.ts`
- Don't delete the `images/extracted-images/` folder yet (contains placeholders)

## 🔍 Finding Current Images

### Where are images used?

**On Main Page**:
- Awards section: Shows 1-2 photos per award
- Activities section: Shows activity thumbnails
- Projects section: Project thumbnails

**In Modal Popups** (when clicking items):
- Award details: Multiple ceremony photos
- Activity details: Photo galleries
- Journey details: Education program photos

### Quick Reference

| Section | Property in images.ts | Shown On |
|---------|----------------------|----------|
| SEED Award | `images.awards.seed.*` | Awards section + modal |
| Cyber Warrior | `images.awards.cyberWarrior.*` | Awards section + modal |
| E-SAN Hackathon | `images.awards.esan.*` | Awards section + modal (gallery!) |
| Chicken Knight | `images.activities.chickenKnight.*` | Activities + modal |
| Music Band | `images.activities.musicBand.*` | Activities + modal |
| Projects | `images.projects.*` | Projects section + modals |

## 🚀 Quick Start Checklist

- [ ] 1. Take/gather your photos
- [ ] 2. Rename them descriptively
- [ ] 3. Compress if needed (aim for <500KB each)
- [ ] 4. Upload to `public/images/[appropriate-folder]/`
- [ ] 5. Open `content/images.ts`
- [ ] 6. Update the paths for your sections
- [ ] 7. Save the file
- [ ] 8. Refresh the website and check!

## 💡 Pro Tips

1. **Batch Process**: Update all images for one section at a time
2. **Consistent Style**: Use photos with similar lighting/style for professional look
3. **Alt Text**: When updating images, also update alt text in the code for accessibility
4. **Mobile Preview**: Check how images look on mobile devices
5. **Gallery Order**: Arrange photos in `images.ts` in the order you want them displayed

## 🆘 Troubleshooting

### Image Not Showing?
1. Check the path is correct (case-sensitive!)
2. Verify the file actually exists in `public/images/`
3. Check the file extension matches (.jpg vs .jpeg vs .png)
4. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

### Image Too Large?
1. Compress using online tools (TinyPNG, Squoosh)
2. Resize using image editor
3. Aim for: Awards (800-1000px wide), Activities (600-800px wide)

### Wrong Image Appearing?
1. Check you edited the correct property in `images.ts`
2. Verify you saved the file
3. Clear cache and refresh

---

## 📞 Need Help?

Remember:
- **Text content**: Edit `content/en.ts` and `content/th.ts`
- **Image paths**: Edit `content/images.ts`
- **Add new images**: Place in `public/images/` first, then update path

Keep your images organized, use descriptive names, and your portfolio will look amazing! 📸✨
