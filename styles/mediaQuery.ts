export const maxWidthMediaQuery = (maxWidth: number) => `@media (max-width: ${maxWidth}px)`

export const minWidthMediaQuery = (minWidth: number) => `@media (min-width: ${minWidth}px)`

export const breakPoints = {
  xlargeLarge: 1620,
  largeMedium: 1231,
  mediumSmall: 767,
  smallXsmall: 350
}

export const media = {
  xlargeUp: minWidthMediaQuery(breakPoints.xlargeLarge + 1),
  largeUp: minWidthMediaQuery(breakPoints.largeMedium + 1),
  mediumUp: minWidthMediaQuery(breakPoints.mediumSmall + 1),
  smallUp: minWidthMediaQuery(breakPoints.smallXsmall + 1),
  largeDown: maxWidthMediaQuery(breakPoints.xlargeLarge),
  mediumDown: maxWidthMediaQuery(breakPoints.largeMedium),
  smallDown: maxWidthMediaQuery(breakPoints.mediumSmall),
  xsmallDown: maxWidthMediaQuery(breakPoints.smallXsmall)
}
