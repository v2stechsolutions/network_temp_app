import {HEIGHT, WIDTH} from '../constants/Dimensions';

const guidelineBaseWidth = 350;

const guidelineBaseHeight = 680;

export const horizontalScale = (size: number): number =>
  (WIDTH / guidelineBaseWidth) * size;

export const verticalScale = (size: number): number =>
  (HEIGHT / guidelineBaseHeight) * size;

export const moderateScale = (size: number, factor = 0.5): number =>
  size + (horizontalScale(size) - size) * factor;
