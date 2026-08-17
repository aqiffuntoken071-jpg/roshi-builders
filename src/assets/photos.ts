/** Real completed-project photos supplied by Roshi Builders.
 *  Files live in the repo at /public/images/ and are served by literal path. */
export const PHOTO = {
  mediaWallLed: "/images/media-wall-led.jpg",
  mediaWallFire: "/images/media-wall-fire.jpg",
  livingMediaWall: "/images/living-media-wall.jpg",
  livingLed: "/images/living-led.jpg",
  ceilingLed: "/images/ceiling-led.jpg",
  ceilingLed2: "/images/ceiling-led-2.jpg",
  plastering: "/images/plastering.jpg",
  loft: "/images/loft.jpg",
  bathroom: "/images/bathroom.jpg",
  stairs: "/images/stairs.jpg",
} as const;

/** Aliases used across the site sections. */
export const hero1 = PHOTO.mediaWallLed;
export const hero2 = PHOTO.loft;
export const hero3 = PHOTO.bathroom;
export const workTiling = PHOTO.bathroom;
export const workPainting = PHOTO.livingLed;
export const workFlooring = PHOTO.stairs;
export const workPlastering = PHOTO.plastering;
export const workLighting = PHOTO.ceilingLed;
export const workGarden = PHOTO.livingMediaWall;
export const roshi = PHOTO.mediaWallFire;
