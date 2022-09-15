import { Renderer } from 'pixi.js'

export const resolution = 1

const width = window.innerWidth / resolution
const height = window.innerHeight / resolution

export const aspect = [width, height] as const

export const renderer = (view: HTMLCanvasElement) => {
  const r = new Renderer({
    view,
    width,
    height,
    backgroundColor: 0x111111,
    powerPreference: 'high-performance',
    useContextAlpha: false,
    antialias: false,
    resolution,
  })

  return { renderer: r, render: r.render.bind(r) }
}
