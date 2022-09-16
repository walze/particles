export const resolution = 1

const width = window.innerWidth / resolution
const height = window.innerHeight / resolution

export const aspect = [width, height] as const
