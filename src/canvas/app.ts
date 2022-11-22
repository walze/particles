import { ParticleRenderer, Renderer, Ticker } from 'pixi.js'
import { type Particle, update as pUpdate } from '../Particle'
import { PARTICLE_NUMBER, stage } from './particles'

import { aspect, resolution } from '../config'

const [width, height] = aspect

export const isInBounds = ({ x, y }: { x: number; y: number }) =>
  x > -1000 || x < width + 1000 || y > -1000 || y < height + 1000

export const update = () => {
  for (let i = 0; i < PARTICLE_NUMBER; i++)
    pUpdate(stage.children[i] as Particle)
}

Ticker.system.autoStart = false

const view = document.createElement('canvas')
document.body.appendChild(view)

export const renderer = new Renderer({
  width,
  height,
  powerPreference: 'high-performance',
  premultipliedAlpha: false,
  antialias: false,
  // resolution,
  view,
})

export const pr = new ParticleRenderer(renderer)

export const start = () => {
  update()
  pr.render(stage)

  requestAnimationFrame(start)
}

export const destroy = () => {
  pr.destroy()
  renderer.destroy()
  stage.destroy({
    children: true,
  })
}
