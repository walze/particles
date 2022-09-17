import { ParticleRenderer, Renderer, Ticker } from 'pixi.js'
import { type Particle, update as pUpdate } from '../Particle'
import { PARTICLE_NUMBER, stage } from './particles'

import { aspect, resolution } from '../config'

const [width, height] = aspect

export const isInBounds = ({ x, y }: { x: number; y: number }) =>
  x > -1000 || x < width + 1000 || y > -1000 || y < height + 1000

export const update = () => {
  for (let i = 0; i < PARTICLE_NUMBER; i++) {
    const p = stage.children[i] as Particle

    if (isInBounds(p)) pUpdate(p)
  }
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
