/**
 * CONTENT MANAGEMENT SYSTEM
 *
 * This is the main entry point for all portfolio content.
 * Import this file to access content in both English and Thai, plus images.
 *
 * Usage in components:
 * ```typescript
 * import { getContent, images } from '@/content';
 *
 * const MyComponent = ({ language }: { language: Language }) => {
 *   const content = getContent(language);
 *   return (
 *     <>
 *       <h1>{content.hero.title}</h1>
 *       <img src={images.profile.main} alt={images.profile.alt} />
 *     </>
 *   );
 * };
 * ```
 */

import { contentEN } from './en';
import { contentTH } from './th';
import { images, getImage } from './images';

// ==================== TYPE DEFINITIONS ====================

export type Language = 'en' | 'th';

// Define the complete content structure type
export type PortfolioContent = typeof contentEN;

// Export content getter function
export function getContent(language: Language): PortfolioContent {
  return language === 'en' ? contentEN : contentTH;
}

// Export individual language content
export { contentEN, contentTH };

// Export images and image helper
export { images, getImage };

// Export default content (English)
export default contentEN;
