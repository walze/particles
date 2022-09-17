import { ParticleRenderer, Renderer, Ticker } from 'pixi.js'
import { PARTICLE_NUMBER, stage } from './particles'

import { aspect, resolution } from '../config'

const [width, height] = aspect

export const isInBounds = ({ x, y }: { x: number; y: number }) =>
  x > 0 && x < width && y > 0 && y < height

export const update = () => {
  for (let i = 0; i < PARTICLE_NUMBER; i++)
    stage.children[i]?.update()
}

Ticker.system.autoStart = false

export const renderer = new Renderer({
  width,
  height,
  backgroundColor: 0x111111,
  powerPreference: 'high-performance',
  useContextAlpha: false,
  antialias: false,
  resolution,
})

export const pr = new ParticleRenderer(renderer)
export const render = pr.render.bind(pr, stage)

export const start = () => {
  // window.loop.delta = t - window.loop.previous
  // window.loop.previous = t
  // window.loop.elapsed = t

  update()
  render()

  requestAnimationFrame(start)
}

export const destroy = () => {
  pr.destroy()
  renderer.destroy()
  stage.destroy({
    children: true,
  })
}
