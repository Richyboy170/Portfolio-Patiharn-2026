/**
 * 🖼️ IMAGE CONFIGURATION
 *
 * This file contains all image paths for the portfolio website.
 * Edit this file to change any images on your site.
 *
 * HOW TO USE:
 * 1. Place your images in the public/images/ folder
 * 2. Update the path in this file
 * 3. The website will automatically use the new image!
 *
 * IMAGE FOLDER STRUCTURE:
 * public/images/
 * ├── journey/          # Education and exchange program photos
 * ├── awards/           # Award ceremony and certificate photos
 * ├── projects/         # Project screenshots and demos
 * └── activities/       # Volunteer work and band performance photos
 */

export const images = {
  // ==================== HERO / PROFILE ====================
  profile: {
    // Main profile picture (optional - currently not used)
    main: "/images/profile/profile-main.jpg",
    alt: "Patiharn Liangkobkit Profile Photo"
  },

  // ==================== JOURNEY / EDUCATION ====================
  journey: {
    // USA Exchange Program
    usaExchange: {
      // Add your USA exchange photos here
      hostFamily: "/images/journey/usa-host-family.jpg",
      school: "/images/journey/usa-school.jpg",
      friends: "/images/journey/usa-friends.jpg",

      // Placeholders - replace with your actual photos
      placeholder1: "/images/extracted-images/image1.jpg",
      placeholder2: "/images/extracted-images/image2.jpg"
    },

    // KMUTT - Current University
    kmutt: {
      campus: "/images/journey/kmutt-campus.jpg",
      lab: "/images/journey/kmutt-innox-lab.jpg",
      racing: "/images/journey/kmutt-formula-racing.jpg",

      // Placeholders
      placeholder1: "/images/extracted-images/image3.jpg"
    },

    // University of Toronto
    uoft: {
      campus: "/images/journey/uoft-campus.jpg",
      classroom: "/images/journey/uoft-classroom.jpg",
      conference: "/images/journey/uoft-ai-conference.jpg",

      // Placeholders
      placeholder1: "/images/extracted-images/image4.jpg"
    }
  },

  // ==================== PROJECTS ====================
  projects: {
    // Tron Cryptocurrency Tracker
    tronTracker: {
      main: "/images/projects/tron-tracker-main.jpg",
      demo: "/images/projects/tron-tracker-demo.jpg",
      team: "/images/projects/cyber-warrior-team.jpg",

      // Placeholders
      placeholder1: "/images/extracted-images/image5.jpg"
    },

    // Crosswalk Safety Application
    crosswalkApp: {
      main: "/images/projects/crosswalk-app-main.jpg",
      demo: "/images/projects/crosswalk-demo.jpg",
      presentation: "/images/projects/crosswalk-presentation.jpg",

      // Placeholders
      placeholder1: "/images/extracted-images/image6.jpg"
    },

    // English Vocabulary Website
    englishVocab: {
      screenshot: "/images/projects/english-vocab-screenshot.jpg"
    },

    // T-Shirt Showcase
    tshirtShowcase: {
      screenshot: "/images/projects/tshirt-showcase-screenshot.jpg"
    }
  },

  // ==================== AWARDS ====================
  awards: {
    // SEED Scholarship
    seed: {
      certificate: "/images/awards/seed-certificate.jpg",
      ceremony: "/images/awards/seed-ceremony.jpg",

      // Placeholders
      placeholder1: "/images/extracted-images/image7.jpg"
    },

    // Cyber Warrior Hackathon
    cyberWarrior: {
      certificate: "/images/awards/cyber-warrior-certificate.jpg",
      team: "/images/awards/cyber-warrior-team.jpg",
      presentation: "/images/awards/cyber-warrior-presentation.jpg",
      award: "/images/awards/cyber-warrior-award.jpg",

      // Placeholders
      placeholder1: "/images/extracted-images/image8.jpg",
      placeholder2: "/images/extracted-images/image9.jpg"
    },

    // E-SAN Hackathon
    esan: {
      // Main award photos
      certificate: "/images/awards/esan-certificate.jpg",
      trophy: "/images/awards/esan-trophy.jpg",
      teamAward: "/images/awards/esan-team-award.jpg",

      // Award Ceremony section
      ceremony1: "/images/awards/esan-ceremony-1.jpg",
      ceremony2: "/images/awards/esan-ceremony-2.jpg",
      ceremony3: "/images/awards/esan-ceremony-3.jpg",
      ceremony4: "/images/awards/esan-ceremony-4.jpg",

      // Hackathon Experience section
      working1: "/images/awards/esan-working-1.jpg",
      working2: "/images/awards/esan-working-2.jpg",
      working3: "/images/awards/esan-working-3.jpg",
      working4: "/images/awards/esan-working-4.jpg",

      // Team & Networking section
      team1: "/images/awards/esan-team-1.jpg",
      team2: "/images/awards/esan-team-2.jpg",
      team3: "/images/awards/esan-team-3.jpg",
      team4: "/images/awards/esan-team-4.jpg",

      // Current placeholders from extracted-images
      // Replace these with your actual photos
      placeholder1: "/images/extracted-images/image10.jpg",
      placeholder2: "/images/extracted-images/image11.jpg",
      placeholder3: "/images/extracted-images/image12.jpg",
      placeholder4: "/images/extracted-images/image70.jpeg",
      placeholder5: "/images/extracted-images/image130.jpeg",
      placeholder6: "/images/extracted-images/image140.jpeg"
    },

    // Top 20 Certificate
    top20: {
      certificate: "/images/awards/top20-certificate.jpg"
    }
  },

  // ==================== ACTIVITIES ====================
  activities: {
    // Chicken Knight Volunteer
    chickenKnight: {
      // Main activity photos
      cooking: "/images/activities/chicken-knight-cooking.jpg",
      serving: "/images/activities/chicken-knight-serving.jpg",
      team: "/images/activities/chicken-knight-team.jpg",
      community: "/images/activities/chicken-knight-community.jpg",

      // Additional photos
      event1: "/images/activities/chicken-knight-event-1.jpg",
      event2: "/images/activities/chicken-knight-event-2.jpg",

      // Placeholders - replace with your actual photos
      placeholder1: "/images/extracted-images/image70.jpeg",
      placeholder2: "/images/extracted-images/image20.jpg"
    },

    // Music & Band Performance
    musicBand: {
      // Main performance photos
      performance1: "/images/activities/band-performance-1.jpg",
      performance2: "/images/activities/band-performance-2.jpg",
      guitarSolo: "/images/activities/band-guitar-solo.jpg",
      teamPhoto: "/images/activities/band-team-photo.jpg",
      rehearsal: "/images/activities/band-rehearsal.jpg",

      // Additional performance photos
      stage1: "/images/activities/band-stage-1.jpg",
      stage2: "/images/activities/band-stage-2.jpg",

      // Placeholders - replace with your actual photos
      placeholder1: "/images/extracted-images/image105.jpeg",
      placeholder2: "/images/extracted-images/image110.jpeg",
      placeholder3: "/images/extracted-images/image140.jpeg",
      placeholder4: "/images/extracted-images/image30.jpg"
    },

    // International Journey showcase
    international: {
      thailand: "/images/activities/thailand-flag.jpg",
      usa: "/images/activities/usa-flag.jpg",
      canada: "/images/activities/canada-flag.jpg"
    }
  },

  // ==================== FALLBACK IMAGES ====================
  // Use these when a specific image is not available
  fallback: {
    placeholder: "/images/placeholder.jpg",
    loading: "/images/loading.gif",
    noImage: "/images/no-image.jpg"
  }
};

/**
 * HELPER FUNCTION
 * Get an image path with fallback
 */
export function getImage(path: string, fallback: string = images.fallback.placeholder): string {
  return path || fallback;
}

export default images;
