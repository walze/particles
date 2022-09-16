import { ParticleRenderer, Renderer, Ticker } from 'pixi.js'
import { type Particle, update as pUpdate } from '../Particle'
import { PARTICLE_NUMBER, stage } from './particles'

import { aspect, resolution } from '../config'

const [width, height] = aspect

const isInBounds = ({ x, y }: { x: number; y: number }) =>
  x > -1000 || x < width + 1000 || y > -1000 || y < height + 1000

const update = () => {
  for (let i = 0; i < PARTICLE_NUMBER; i++) {
    const p = stage.children[i] as Particle

    if (isInBounds(p)) pUpdate(p)
  }
}

Ticker.system.autoStart = false

export const ticker = new Ticker()

const renderer = new Renderer({
  width,
  height,
  backgroundColor: 0x111111,
  powerPreference: 'high-performance',
  useContextAlpha: false,
  antialias: false,
  resolution,
})

const pr = new ParticleRenderer(renderer)
const render = pr.render.bind(pr, stage)

ticker.add(update)
ticker.add(render)

const destroy = () => {
  ticker.remove(update)
  ticker.remove(render)
  pr.destroy()
  renderer.destroy()
  stage.destroy({
    children: false,
  })
}

export { renderer, update, destroy, render }
