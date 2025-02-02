// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Shukurdev.pro";
export const SITE_DESCRIPTION =
  "Shukurdev.pro © 2023. Welcome to my personal website! I mostly write about modern web development, coding and lifestyle";
export const TWITTER_HANDLE = "@cannnibaldev";
export const MY_NAME = "Shukur Huseynli";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
