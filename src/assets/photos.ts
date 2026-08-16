import bathroom from "./bathroom.jpg.asset.json";
import ceilingLed from "./ceiling-led.jpg.asset.json";
import ceilingLed2 from "./ceiling-led-2.jpg.asset.json";
import livingLed from "./living-led.jpg.asset.json";
import livingMediaWall from "./living-media-wall.jpg.asset.json";
import loftRoom from "./loft.jpg.asset.json";
import mediaWallFire from "./media-wall-fire.jpg.asset.json";
import mediaWallLed from "./media-wall-led.jpg.asset.json";
import plasteringImg from "./plastering.jpg.asset.json";
import stairsImg from "./stairs.jpg.asset.json";

/** Real completed-project photos supplied by Roshi Builders. */
export const PHOTO = {
  mediaWallLed: mediaWallLed.url,
  mediaWallFire: mediaWallFire.url,
  livingMediaWall: livingMediaWall.url,
  livingLed: livingLed.url,
  ceilingLed: ceilingLed.url,
  ceilingLed2: ceilingLed2.url,
  plastering: plasteringImg.url,
  loft: loftRoom.url,
  bathroom: bathroom.url,
  stairs: stairsImg.url,
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
