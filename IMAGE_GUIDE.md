# Portfolio Image Management Guide

This guide explains how to add and manage images in your portfolio website.

## 📁 Image Directory Structure

```
portfolio2025/
└── public/
    └── images/
        ├── profile/           # Profile photos
        ├── projects/          # Project screenshots
        ├── awards/            # Award certificates and photos
        ├── journey/           # Timeline journey photos
        ├── hackathon/         # Hackathon event photos
        ├── activities/        # Extracurricular activities
        ├── universities/      # University logos
        └── international/     # International experiences
```

## 🖼️ How to Add Images

### Step 1: Prepare Your Images
- **Recommended formats**: JPG (for photos), PNG (for logos/certificates)
- **Recommended sizes**:
  - Profile photos: 800x800px (square)
  - Project screenshots: 1920x1080px (16:9 ratio)
  - Award photos: 1600x1200px (4:3 ratio)
  - Activity photos: 1600x900px (16:9 ratio)
- **Optimize images**: Keep file size under 500KB for faster loading

### Step 2: Copy Images to Public Folder
Place your images in the appropriate folder:

```bash
# From assets folder
cp your-image.jpg public/images/[category]/descriptive-name.jpg

# Example:
cp my-concert.jpg public/images/activities/band-concert-2024.jpg
```

### Step 3: Update the Code
Find the section in `app/page.tsx` and update the image path:

```tsx
<Image
  src="/images/activities/band-concert-2024.jpg"
  alt="Band Concert 2024"
  fill
  className="object-cover"
/>
```

## 📸 Current Image Placeholders

### Activities Section
Add your activity images to `public/images/activities/`:

**Available slots:**
1. `chicken-knight-1.jpg` - Chicken Knight volunteer activity
2. `chicken-knight-2.jpg` - Working with community
3. `chicken-knight-3.jpg` - Team collaboration
4. `band-performance-1.jpg` - Music band performance
5. `band-performance-2.jpg` - Band rehearsal
6. `sports-activity-1.jpg` - Sports/athletics
7. `club-event-1.jpg` - Club activities
8. `volunteer-work-1.jpg` - Volunteer projects

### International Experiences
Add to `public/images/international/`:

**Countries visited:**
1. `usa-experience-1.jpg` - USA exchange photos
2. `usa-experience-2.jpg` - American culture
3. `usa-experience-3.jpg` - Host family moments
4. `canada-uoft-1.jpg` - University of Toronto
5. `canada-uoft-2.jpg` - Campus life
6. `canada-uoft-3.jpg` - Study sessions
7. `thailand-events-1.jpg` - Thailand hackathons
8. `thailand-events-2.jpg` - Local competitions

### Projects
Add to `public/images/projects/`:

**Project types:**
- `[project-name]-demo.jpg` - Demo screenshot
- `[project-name]-architecture.jpg` - System architecture
- `[project-name]-team.jpg` - Team working
- `[project-name]-presentation.jpg` - Presenting project

### Awards & Hackathons
Add to `public/images/hackathon/`:

**Event photos:**
- `[event-name]-team.jpg` - Team photo
- `[event-name]-award.jpg` - Receiving award
- `[event-name]-coding.jpg` - Coding session
- `[event-name]-demo.jpg` - Demo presentation
- `[event-name]-certificate.jpg` - Certificate

## 🌍 Showcasing "How Big the World I Have Met"

### Section 1: International Journey
**Purpose**: Show your global experiences across 3 countries

**Image requirements:**
- USA Exchange: 3-5 photos
- Canada (UofT): 3-5 photos
- Thailand (Home): 3-5 photos

### Section 2: Activities & Interests
**Purpose**: Show diverse experiences beyond coding

**Categories:**
1. **Music/Arts** - Band performances, creative projects
2. **Sports** - Athletic activities, team sports
3. **Volunteering** - Community service (Chicken Knight, etc.)
4. **Clubs** - University clubs and organizations
5. **Leadership** - Team leadership roles

### Section 3: Cultural Diversity
**Purpose**: Highlight multicultural experiences

**What to include:**
- Photos with people from different countries
- Cultural events participation
- International competitions
- Language exchange moments
- Global teamwork experiences

## 🎨 Image Naming Convention

Use descriptive, lowercase names with hyphens:

### ✅ Good Examples:
- `esan-hackathon-team-photo.jpg`
- `uoft-machine-learning-class.jpg`
- `chicken-knight-volunteer-cooking.jpg`
- `usa-host-family-thanksgiving.jpg`

### ❌ Avoid:
- `IMG_1234.jpg`
- `photo.jpg`
- `Untitled.png`
- `image (1).jpg`

## 🔧 Quick Commands

### Copy multiple images at once:
```bash
cd portfolio2025

# Copy all activity images
cp assets/activities/*.jpg public/images/activities/

# Copy all hackathon images
cp assets/hackathon/*.jpg public/images/hackathon/

# Copy international experience images
cp assets/international/*.jpg public/images/international/
```

### Create new image directories:
```bash
cd portfolio2025/public/images
mkdir activities international clubs sports volunteer
```

## 📝 Updating Modal Galleries

When you add new images, update the corresponding modal in `app/page.tsx`:

### Example: Adding Activity Images

1. **Find the Activities modal** (search for `activeModal === 'chicken-knight'`)

2. **Add image to gallery**:
```tsx
<div className="relative aspect-video rounded-lg overflow-hidden">
  <Image
    src="/images/activities/chicken-knight-cooking.jpg"
    alt="Cooking with community"
    fill
    className="object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3">
    <p className="text-white text-sm">Preparing meals for the community</p>
  </div>
</div>
```

3. **Save and refresh** - Your image will appear!

## 🌟 Best Practices

### For Professional Look:
1. **Consistent aspect ratios** - Use 16:9 for most photos
2. **Good lighting** - Well-lit, clear photos
3. **Action shots** - Show you doing activities, not just posing
4. **Variety** - Mix close-ups, group photos, and wide shots
5. **Context** - Include photos that show the environment/setting

### For Fast Loading:
1. **Compress images** - Use tools like TinyPNG or ImageOptim
2. **Appropriate resolution** - Don't upload 4K images if not needed
3. **WebP format** - Consider converting to WebP for smaller file sizes
4. **Lazy loading** - Already implemented with Next.js Image component

## 📊 Image Count Recommendations

- **Profile section**: 2-3 photos (formal, casual, action)
- **Each project**: 4-6 images
- **Each hackathon**: 6-10 images
- **Each award**: 3-5 images
- **Activities section**: 8-12 images total
- **International section**: 10-15 images total

## 🆘 Troubleshooting

### Image not showing?
1. Check file path is correct (case-sensitive!)
2. Ensure image is in `public/images/` folder
3. Check file extension (.jpg vs .jpeg vs .png)
4. Refresh browser (Ctrl+F5)

### Image looks stretched?
- Use `className="object-cover"` for fill images
- Use `className="object-contain"` for logos/certificates

### Image too large?
- Compress using online tools
- Resize to recommended dimensions
- Convert to WebP format

## 🎯 Next Steps

1. **Gather your photos** - Collect all images from phone, computer, cloud
2. **Organize by category** - Sort into folders
3. **Rename descriptively** - Use the naming convention above
4. **Optimize files** - Compress and resize
5. **Copy to public folder** - Place in correct directories
6. **Update code** - Add image paths to components
7. **Test locally** - Check everything displays correctly
8. **Deploy** - Push to production!

---

**Need Help?** Review the code in `app/page.tsx` to see examples of image implementation.
