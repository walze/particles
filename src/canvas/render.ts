import { Renderer } from 'pixi.js'

const w = window.innerWidth
const h = window.innerHeight

const width = Math.min(window.innerWidth, 500)
const height = Math.round((h * width) / w)

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
  })

  return { renderer: r, render: r.render.bind(r) }
}
