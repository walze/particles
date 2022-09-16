export const resolution = 1.5

const isVertical = window.innerHeight > window.innerWidth

const w = window.innerWidth
const h = window.innerHeight

// rw * h = rh * w
// rw = rh * w / h
// rh = rw * h / w

const r = isVertical ? 1080 : 1920

const width = isVertical ? r : (r * w) / h
const height = isVertical ? (r * h) / w : r

export const aspect = [
  Math.floor(width),
  Math.floor(height),
] as const
