export const resolution = 1.5

const isVertical = window.innerHeight > window.innerWidth

const width = isVertical ? 1920 : 1080
const height = isVertical ? 1080 : 1920

export const aspect = [width, height] as const
