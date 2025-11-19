# 📝 Content Editing Guide

## Overview

All text content for your portfolio website is now centralized in the `content/` folder. This makes it easy to update any text on your website without touching the code!

## 📁 Folder Structure

```
content/
├── en.ts          # English content
├── th.ts          # Thai content
└── index.ts       # Exports and types (don't modify)
```

## 🎯 How to Edit Content

### Step 1: Choose Your Language File

- **English content**: Edit `content/en.ts`
- **Thai content**: Edit `content/th.ts`

### Step 2: Find the Section You Want to Edit

Each file is organized into clearly labeled sections:

- **Navigation** - Menu links
- **Hero** - Landing page content
- **About** - About Me section
- **Skills** - Technical expertise
- **Journey** - Education timeline
- **Projects** - Featured projects
- **Activities** - Global activities and impact
- **Awards** - Recognition and awards
- **Contact** - Contact information
- **Footer** - Bottom of page

### Step 3: Edit the Text

Simply change the text inside the quotes. For example:

#### Before:
```typescript
hero: {
  name: "Patiharn Liangkobkit",
  title: "Data Scientist & AI Engineer",
```

#### After:
```typescript
hero: {
  name: "Your Name Here",
  title: "Your New Title",
```

### Step 4: Save and Reload

1. Save the file (`Ctrl+S` or `Cmd+S`)
2. The website will automatically reload with your changes!

## 📋 Common Editing Tasks

### Updating Your Name
**File**: `content/en.ts` and `content/th.ts`
**Location**: `hero.name`

```typescript
hero: {
  name: "Your Full Name",
  // ...
}
```

### Changing Your Job Title
**File**: `content/en.ts` and `content/th.ts`
**Location**: `hero.title` and `hero.subtitle`

```typescript
hero: {
  title: "Your Main Title",
  subtitle: "Your Specialization",
  // ...
}
```

### Adding a New Award
**File**: `content/en.ts` and `content/th.ts`
**Location**: `awards` section

1. Copy one of the existing award objects
2. Paste it and modify the details:

```typescript
awards: {
  title: "Awards & Recognition",
  seed: { /* existing award */ },
  cyber: { /* existing award */ },

  // Add your new award:
  myNewAward: {
    title: "New Award Title",
    org: "Organization Name",
    prize: "Prize: Amount • Year: 2025",
    desc: "Description of the award..."
  }
}
```

**Note**: After adding a new award, you'll also need to add it to the JSX in `app/page.tsx`.

### Updating Contact Information
**File**: `content/en.ts` and `content/th.ts`
**Location**: `contact` section

```typescript
contact: {
  title: "Let's Build Something Amazing",
  desc: "Your contact description...",
  location: "Your City, Country",
  locationDesc: "Full Address"
}
```

### Modifying Project Descriptions
**File**: `content/en.ts` and `content/th.ts`
**Location**: `projects` section

```typescript
projects: {
  project1: {
    title: "Your Project Name",
    desc: "Project description...",
    award: "🏆 Any awards or recognition"
  }
}
```

## 🌏 Bilingual Content

### Important: Keep Both Languages in Sync

When you edit English content in `en.ts`, remember to also update the Thai content in `th.ts` with the corresponding translation!

**Example**:

#### English (`content/en.ts`):
```typescript
hero: {
  name: "Patiharn Liangkobkit",
  title: "Data Scientist & AI Engineer"
}
```

#### Thai (`content/th.ts`):
```typescript
hero: {
  name: "ปาฏิหาริย์ เหลียงกอบกิจ",
  title: "นักวิทยาศาสตร์ข้อมูล และวิศวกร AI"
}
```

## ⚠️ Important Rules

### DO ✅
- Edit text inside quotes: `"Your text here"`
- Keep the structure intact
- Save files frequently
- Test both English and Thai versions

### DON'T ❌
- Don't change property names (the keys before the colon)
  - ✅ Good: `title: "New Title"`
  - ❌ Bad: `newTitle: "New Title"`
- Don't remove commas between items
- Don't change `export const contentEN = {` or `export const contentTH = {`
- Don't modify `content/index.ts`

## 🔧 Troubleshooting

### Website Not Updating?
1. Make sure you saved the file
2. Check the terminal for any error messages
3. Try refreshing the browser (Ctrl+R or Cmd+R)
4. If needed, restart the development server:
   ```bash
   # Stop: Ctrl+C in terminal
   # Start: npm run dev
   ```

### Syntax Errors?
Common mistakes:

**Missing Comma**:
```typescript
// ❌ Wrong
title: "My Title"
subtitle: "My Subtitle"

// ✅ Correct
title: "My Title",
subtitle: "My Subtitle"
```

**Unmatched Quotes**:
```typescript
// ❌ Wrong
title: "My Title

// ✅ Correct
title: "My Title"
```

**Missing Closing Brace**:
```typescript
// ❌ Wrong
hero: {
  title: "My Title"

// ✅ Correct
hero: {
  title: "My Title"
}
```

## 📚 Content Structure Reference

### Full Property List

#### Navigation
- `nav.about`, `nav.skills`, `nav.journey`, `nav.projects`, `nav.activities`, `nav.awards`, `nav.contact`

#### Hero
- `hero.available`, `hero.name`, `hero.title`, `hero.subtitle`, `hero.locations`
- `hero.gpa`, `hero.scholar`, `hero.uoft`, `hero.kmutt`
- `hero.cta1`, `hero.cta2`
- `hero.visionTitle`, `hero.vision`

#### About
- `about.title`, `about.heading`
- `about.desc1`, `about.desc2`
- `about.stat1`, `about.stat1Label`, `about.stat2`, `about.stat2Label`, `about.stat3`, `about.stat3Label`, `about.stat4`, `about.stat4Label`

#### Skills
- `skills.title`
- `skills.aiTitle`, `skills.dataTitle`, `skills.webTitle`, `skills.cloudTitle`, `skills.aiToolsTitle`, `skills.softTitle`

#### Journey
- `journey.title`
- For each school (bcc, usa, kmutt, uoft):
  - `name`, `date`, `desc`
  - `point1`, `point2`, `point3`, `point4` (and `point5` for uoft)

#### Projects
- `projects.title`
- For each project (project1-4):
  - `title`, `desc`, `award` or `link`

#### Activities
- `activities.title`, `activities.subtitle`
- `activities.stat1`, `activities.stat1Label`, `activities.stat1Sub`
- `activities.stat2`, `activities.stat2Label`, `activities.stat2Sub`
- `activities.stat3`, `activities.stat3Label`, `activities.stat3Sub`
- `activities.chickenKnight.*`, `activities.musicBand.*`
- `activities.thailand.*`, `activities.usa.*`, `activities.canada.*`

#### Awards
- `awards.title`
- For each award (seed, cyber, esan, top20):
  - `title`, `org`, `prize`, `desc`

#### Contact
- `contact.title`, `contact.desc`
- `contact.email`, `contact.github`, `contact.phone`
- `contact.locationTitle`, `contact.location`, `contact.locationDesc`

#### Footer
- `footer.copyright`, `footer.tagline`

## 🚀 Quick Tips

1. **Use Find & Replace**: When updating your name everywhere, use `Ctrl+F` (or `Cmd+F`) to find all occurrences
2. **Copy Format**: When adding new items, copy an existing one as a template
3. **Test Both Languages**: Always check both English and Thai versions after making changes
4. **Back Up First**: Before major changes, make a copy of the files
5. **One Section at a Time**: Update one section, save, and test before moving to the next

## 🖼️ Managing Images

### Image Configuration File

All image paths are centralized in `content/images.ts`. This makes it easy to change any image on your website!

**Quick Guide**:
1. Place your image in `public/images/[appropriate-folder]/`
2. Open `content/images.ts`
3. Update the image path
4. Save and reload!

**Example**:
```typescript
// In content/images.ts
awards: {
  esan: {
    certificate: "/images/awards/my-certificate.jpg",
    trophy: "/images/awards/my-trophy.jpg"
  }
}
```

**For detailed instructions**, see [IMAGE_MANAGEMENT_GUIDE.md](./IMAGE_MANAGEMENT_GUIDE.md)

## 📚 All Content Files

Your portfolio content is organized across these files:

| File | Purpose |
|------|---------|
| `content/en.ts` | All English text |
| `content/th.ts` | All Thai text (keep in sync!) |
| `content/images.ts` | All image paths |
| `content/index.ts` | Exports (don't modify) |
| `CONTENT_GUIDE.md` | This guide |
| `IMAGE_MANAGEMENT_GUIDE.md` | Image management guide |

## 💡 Need Help?

If you encounter issues or need to add new sections:
1. Check the syntax is correct (commas, quotes, braces)
2. Refer to the existing structure as a guide
3. The `content/index.ts` file handles types - you usually don't need to touch it
4. For major structural changes, you may need to also update `app/page.tsx`

### Quick Reference

- **Change text**: Edit `content/en.ts` or `content/th.ts`
- **Change images**: Edit `content/images.ts` (see IMAGE_MANAGEMENT_GUIDE.md)
- **Both languages**: Always update both English and Thai versions
- **Troubleshooting**: Check syntax, save file, refresh browser

---

**Remember**: The `content/` folder is your friend! All your website text and image paths live here. Keep it organized, keep both languages in sync, and you'll have an easy-to-maintain portfolio! 🎉
