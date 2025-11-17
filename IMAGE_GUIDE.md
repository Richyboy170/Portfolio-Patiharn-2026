# 🖼️ Image Guide for Portfolio Website

## Overview

This guide explains how to add your personal photos to showcase **"how big the world you have met"**. The portfolio now includes extensive image placeholders designed to highlight your international experiences, travels, and global connections.

---

## 📁 Directory Structure

Create the following directories inside `/public/images/`:

```
public/
└── images/
    ├── profile/              # Profile photos (existing)
    ├── universities/         # University logos (existing)
    ├── journey/              # Exchange program photos (existing)
    ├── projects/             # Project screenshots (existing)
    ├── awards/               # Award photos (existing)
    ├── hackathon/            # Hackathon photos (existing)
    │
    ├── world/                # 🆕 Country-specific experiences
    ├── travel/               # 🆕 Travel highlights & cultural experiences
    └── connections/          # 🆕 International friends & host families
```

---

## 🌍 New Section: "My Global Footprint"

This new section showcases your international experiences with three main subsections:

### 1. Country Cards (3 cards)

**Location in code:** `app/page.tsx` - "Global Footprint Section" → "Countries Grid"

| Placeholder | Path | Description | Recommended Size | Aspect Ratio |
|-------------|------|-------------|------------------|--------------|
| Thailand | `/images/world/thailand-1.jpg` | Your experiences in Thailand (Bangkok, KMUTT campus, Thai culture) | 1200×900 px | 4:3 |
| USA | `/images/world/usa-1.jpg` | USA exchange program (Tennessee landmarks, American life) | 1200×900 px | 4:3 |
| Canada | `/images/world/canada-1.jpg` | University of Toronto, Toronto skyline, Canadian experiences | 1200×900 px | 4:3 |

**How to add:**
```tsx
// Replace this:
<div className="absolute inset-0 flex items-center justify-center bg-blue-900/20 backdrop-blur-sm">
  <div className="text-center">
    <span className="text-6xl mb-2 block">🇹🇭</span>
    <p className="text-cyan-400 font-semibold text-sm">ADD YOUR THAILAND PHOTOS HERE</p>
  </div>
</div>

// With this:
<Image
  src="/images/world/thailand-1.jpg"
  alt="Thailand experiences"
  fill
  className="object-cover"
/>
```

---

### 2. Travel Highlights Gallery (8 photo slots)

**Location in code:** `app/page.tsx` - "Travel Highlights & Cultural Experiences"

This grid showcases various aspects of your travels:

| Category | Path | Description | Size | Aspect Ratio |
|----------|------|-------------|------|--------------|
| 🏙️ City Exploration | `/images/travel/city-1.jpg` | Urban exploration, city streets, skylines | 800×800 px | 1:1 (square) |
| 🍜 Cultural Food | `/images/travel/food-1.jpg` | Local cuisines, dining experiences, food adventures | 800×800 px | 1:1 |
| 🎓 Campus Life | `/images/travel/campus-1.jpg` | University campuses, classrooms, study spots | 800×800 px | 1:1 |
| 🌆 Landmarks | `/images/travel/landmark-1.jpg` | Famous landmarks, tourist attractions, monuments | 800×800 px | 1:1 |
| 👥 Friends | `/images/travel/friends-1.jpg` | Hanging out with international friends | 800×800 px | 1:1 |
| 🎉 Events | `/images/travel/event-1.jpg` | Festivals, celebrations, special events | 800×800 px | 1:1 |
| 🏞️ Nature | `/images/travel/nature-1.jpg` | Natural landscapes, parks, outdoor adventures | 800×800 px | 1:1 |
| ✈️ Adventures | `/images/travel/adventure-1.jpg` | Travel adventures, airports, road trips | 800×800 px | 1:1 |

**How to add:**
```tsx
// Find the placeholder comment:
{/* PLACEHOLDER: /public/images/travel/city-1.jpg */}

// Add Image component above it:
<Image
  src="/images/travel/city-1.jpg"
  alt="City exploration"
  fill
  className="object-cover"
/>
```

**Pro Tip:** You can add multiple photos per category by creating `city-2.jpg`, `city-3.jpg`, etc. Just duplicate the placeholder div and update the paths!

---

### 3. International Connections (3 photo slots)

**Location in code:** `app/page.tsx` - "International Connections & Friends"

| Connection Type | Path | Description | Size | Aspect Ratio |
|----------------|------|-------------|------|--------------|
| 👨‍👩‍👦 Host Family | `/images/connections/host-family-2.jpg` | More photos with your American host family | 1200×900 px | 4:3 |
| 🌏 International Classmates | `/images/connections/international-friends-1.jpg` | Friends from different countries you've met | 1200×900 px | 4:3 |
| 🎊 Cultural Celebrations | `/images/connections/celebration-1.jpg` | Holiday celebrations, cultural festivals together | 1200×900 px | 4:3 |

---

## 📸 Enhanced Existing Sections

### About Section - Personal Life Snapshots

**Location in code:** `app/page.tsx` - "About Section" → "Additional Profile Photos"

Added 3 small square placeholders below your main profile photo:

| Placeholder | Path | Description | Size | Aspect Ratio |
|-------------|------|-------------|------|--------------|
| 📚 Studying | `/images/profile/studying.jpg` | You studying, reading, or in a library | 600×600 px | 1:1 |
| 💻 Coding | `/images/profile/coding.jpg` | You coding, at hackathons, or with laptop | 600×600 px | 1:1 |
| 🎯 Hobbies | `/images/profile/hobby.jpg` | Your hobbies, sports, or leisure activities | 600×600 px | 1:1 |

---

### Journey Section - Enhanced Timeline Photos

**Location in code:** `app/page.tsx` - "Journey Timeline"

#### KMUTT (Thailand) - 2 new placeholders

| Icon | Path | Description | Size | Aspect Ratio |
|------|------|-------------|------|--------------|
| 🏫 | `/images/journey/kmutt-campus.jpg` | KMUTT campus buildings, classrooms, or labs | 1200×900 px | 4:3 |
| 🏎️ | `/images/journey/kmutt-racing.jpg` | Formula Racing Team activities or car | 1200×900 px | 4:3 |

**Great photo ideas for KMUTT:**
- INNO-X Lab where you work as TA
- Formula Racing team and car
- Engineering building or computer labs
- With classmates or professors
- Hackathon preparation at KMUTT

#### University of Toronto (Canada) - 2 new placeholders

| Icon | Path | Description | Size | Aspect Ratio |
|------|------|-------------|------|--------------|
| 🍁 | `/images/journey/canada-campus.jpg` | University of Toronto campus scenes | 1200×900 px | 4:3 |
| 🏙️ | `/images/journey/canada-toronto.jpg` | Toronto city views or landmarks | 1200×900 px | 4:3 |

**Great photo ideas for Toronto:**
- Iconic campus buildings (Hart House, Robarts Library)
- Fall foliage on campus
- CN Tower or Toronto skyline
- Winter scenes with snow
- Study spaces or lectures
- UTMIST AI conference attendance

#### USA Exchange - Already has photos

**Already has:** 2 USA exchange photos (`usa-host-family.jpg`, `usa-classmates.jpg`)

**You can add more to the USA modal:**
- More host family moments
- High school activities
- Tennessee landmarks
- American holidays (Thanksgiving, 4th of July)
- Friends and classmates

---

## 🎨 Image Specifications & Best Practices

### Recommended Image Sizes

| Usage | Dimensions | Max File Size | Format |
|-------|-----------|---------------|---------|
| Country Cards | 1200×900 px | 500 KB | JPG/JPEG |
| Travel Gallery | 800×800 px | 300 KB | JPG/JPEG |
| Connections | 1200×900 px | 500 KB | JPG/JPEG |
| Profile Photos | 1000×1000 px | 400 KB | JPG/JPEG |
| Landscape Photos | 1600×1200 px | 600 KB | JPG/JPEG |

### Image Optimization

**Before uploading:**
1. **Resize** images to recommended dimensions using tools like:
   - [TinyPNG](https://tinypng.com/) - Free compression
   - [Squoosh](https://squoosh.app/) - Advanced optimization
   - Photoshop, GIMP, or online editors

2. **Compress** without losing quality:
   - Target: 70-85% JPEG quality
   - Use progressive JPEG format
   - Remove EXIF metadata if needed

3. **File naming conventions:**
   - Use lowercase letters
   - Use hyphens instead of spaces: `usa-family-dinner.jpg` ✅
   - Avoid: `USA Family Dinner.JPG` ❌
   - Be descriptive: `toronto-cn-tower-sunset.jpg` instead of `img123.jpg`

---

## 🔧 How to Add Images - Step by Step

### Step 1: Prepare Your Image

1. Choose a great photo from your experiences
2. Resize to recommended dimensions
3. Compress the file
4. Rename following conventions

### Step 2: Upload to Correct Directory

```bash
# Create the new directories (if they don't exist)
mkdir -p public/images/world
mkdir -p public/images/travel
mkdir -p public/images/connections

# Copy your images
cp ~/Downloads/my-photo.jpg public/images/world/thailand-1.jpg
```

### Step 3: Update the Code

**Find the placeholder in `app/page.tsx`:**

```tsx
{/* PLACEHOLDER: /public/images/world/thailand-1.jpg */}
```

**Add the Image component:**

```tsx
<Image
  src="/images/world/thailand-1.jpg"
  alt="Bangkok skyline and KMUTT campus"
  fill
  className="object-cover"
/>
```

**Remove or comment out the placeholder overlay:**

```tsx
{/* You can delete or comment out the "ADD YOUR PHOTOS HERE" overlay */}
<div className="absolute inset-0 flex items-center...">
  ...
</div>
```

### Step 4: Test Locally

```bash
npm run dev
```

Visit `http://localhost:3000` and scroll to the "Global Footprint" section to see your images!

---

## 💡 Creative Ideas for Photos

### For Country Cards (World Section):

**Thailand 🇹🇭:**
- Bangkok skyline
- KMUTT campus life
- Thai temples or cultural sites
- Hackathon team photos
- Street food adventures
- Traditional Thai festivals

**USA 🇺🇸:**
- Tennessee landscapes
- High school campus
- Host family activities
- American holidays (Thanksgiving, 4th of July)
- Road trips
- Southern USA culture

**Canada 🇨🇦:**
- CN Tower or Toronto skyline
- University of Toronto campus
- Niagara Falls
- Fall foliage
- Winter activities
- Canadian multiculturalism

### For Travel Gallery:

1. **City Exploration:** Skylines, streets, architecture, transit systems
2. **Cultural Food:** Local restaurants, street food, cooking experiences
3. **Campus Life:** Libraries, lecture halls, study groups, campus events
4. **Landmarks:** Famous sites, statues, historical buildings
5. **Friends:** Casual hangouts, group dinners, study sessions
6. **Events:** Concerts, festivals, conferences, ceremonies
7. **Nature:** Parks, beaches, mountains, gardens
8. **Adventures:** Airports, train stations, road trips, spontaneous moments

### For International Connections:

- **Host Family:** Holiday dinners, family outings, everyday moments
- **International Friends:** Study groups, cultural exchange events, parties
- **Celebrations:** Birthday parties, cultural festivals, graduation ceremonies

---

## 🎯 Tips for Showcasing "How Big the World You Have Met"

### 1. **Diversity of Locations**
Show different types of places:
- Urban vs. rural
- Nature vs. architecture
- Formal (university) vs. casual (hanging out)

### 2. **Cultural Richness**
Include photos that show:
- Different cuisines
- Traditional clothing or festivals
- Cultural landmarks
- Local customs

### 3. **Human Connections**
Highlight relationships:
- Different nationalities
- Age groups (host families, peers, mentors)
- Group photos vs. individual moments

### 4. **Personal Growth**
Show your journey:
- Early exchange days vs. later confidence
- Academic settings vs. social adventures
- Overcoming challenges

### 5. **Seasonal Diversity**
If possible, show:
- Different seasons (summer in Thailand, winter in Canada)
- Various weather conditions
- Holiday celebrations across cultures

---

## 🚀 Advanced Customization

### Adding More Photo Slots

Want to add more photos? Duplicate any placeholder div:

```tsx
{/* Add another travel photo */}
<div className="relative aspect-square rounded-xl overflow-hidden bg-slate-800 border border-blue-500/30 hover:border-cyan-400/50 transition-all group">
  <Image
    src="/images/travel/your-new-photo.jpg"
    alt="Description"
    fill
    className="object-cover"
  />
</div>
```

### Creating Photo Carousels

For sections with many photos, consider creating a carousel:

```tsx
// Install swiper or use a carousel library
npm install swiper
```

### Adding Photo Captions

Add captions that appear on hover:

```tsx
<div className="relative aspect-square rounded-xl overflow-hidden group">
  <Image
    src="/images/travel/city-1.jpg"
    alt="Bangkok"
    fill
    className="object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
    <p className="text-white font-semibold">Bangkok at Sunset</p>
    <p className="text-slate-300 text-sm">View from KMUTT Campus</p>
  </div>
</div>
```

---

## 📋 Quick Reference Checklist

Before launching your updated portfolio:

- [ ] Created `/images/world/` directory
- [ ] Created `/images/travel/` directory
- [ ] Created `/images/connections/` directory
- [ ] Added at least 1 photo per country card (Thailand, USA, Canada)
- [ ] Added 4-8 photos to the travel highlights gallery
- [ ] Added 2-3 photos to international connections section
- [ ] Optimized all images (compressed, resized)
- [ ] Used proper file naming (lowercase, hyphens)
- [ ] Updated code to use Image components instead of placeholders
- [ ] Tested locally with `npm run dev`
- [ ] All images load correctly
- [ ] Mobile responsive (checked on small screens)
- [ ] Alt text is descriptive and meaningful

---

## 🐛 Troubleshooting

### Images not showing?

1. **Check the file path:** Must be `/images/...` not `/public/images/...`
2. **Verify file exists:** `ls public/images/world/`
3. **Check file permissions:** Should be readable
4. **Restart dev server:** Stop and run `npm run dev` again
5. **Clear cache:** Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)

### Images look blurry or pixelated?

- Use higher resolution source images
- Ensure minimum recommended dimensions
- Check compression wasn't too aggressive

### Images load slowly?

- Reduce file sizes (aim for <500 KB per image)
- Use Next.js Image optimization (already configured)
- Consider using WebP format for better compression

---

## 🌟 Inspiration & Examples

**Great photos to showcase global experiences:**

1. **Before/After moments:** First day in a new country vs. feeling at home
2. **Cultural immersion:** Participating in local traditions
3. **Academic milestones:** University acceptance, first day, graduation
4. **Friendship evolution:** Early awkward meetings to close bonds
5. **Seasonal transitions:** Experiencing new weather and seasons
6. **Food journey:** From unfamiliar cuisine to favorite dishes
7. **Language progress:** Using new languages in daily life
8. **Independence growth:** Navigating foreign cities alone

---

## 📞 Need Help?

If you need assistance:

1. **Check the code comments:** Look for `PLACEHOLDER:` comments in `app/page.tsx`
2. **Refer to existing images:** See how profile and journey images are implemented
3. **Test incrementally:** Add one image at a time and test
4. **Read Next.js Image docs:** [Next.js Image Optimization](https://nextjs.org/docs/app/api-reference/components/image)

---

## 🎉 Final Notes

This portfolio is designed to tell your story of global exploration and cultural exchange. Every photo should:

- **Tell a story** about your experiences
- **Show diversity** in locations, people, and activities
- **Reflect authenticity** - be yourself!
- **Demonstrate growth** from each experience
- **Celebrate connections** you've made worldwide

**Remember:** The goal is to show "how big the world you have met" - focus on breadth of experiences, depth of cultural immersion, and the meaningful connections you've built across continents!

---

**Last Updated:** January 2025
**Portfolio Version:** 2.0 - Global Footprint Edition

## 📊 Summary of All Image Placeholders

### New Section: Global Footprint
- **Country Cards:** 3 placeholders (Thailand, USA, Canada)
- **Travel Highlights Gallery:** 8 placeholders (city, food, campus, landmarks, friends, events, nature, adventures)
- **International Connections:** 3 placeholders (host family, international friends, celebrations)
- **Subtotal:** 14 new placeholders

### Enhanced Existing Sections
- **About Section:** 3 placeholders (studying, coding, hobbies)
- **Journey - KMUTT:** 2 placeholders (campus, racing team)
- **Journey - Canada/UofT:** 2 placeholders (campus, Toronto city)
- **Subtotal:** 7 enhanced placeholders

### Already Existing
- Profile photos, university logos, journey photos, project screenshots, awards, hackathon photos

**Grand Total: 21+ new image slots ready for your photos!** 🎉

---

Happy storytelling! 🌍✈️📸
