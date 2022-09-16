import { Renderer } from 'pixi.js'
import { update } from '../Particle'
import { stage } from './particles'

import { aspect, resolution } from '../config'

const [width, height] = aspect

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

  const frame = () => {
    for (const p of stage.children) update(p)

    r.render(stage)

    return () => r.destroy()
  }

  return { renderer: r, render: r.render.bind(r), frame }
}
