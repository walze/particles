import { ParticleRenderer, Renderer, Ticker } from 'pixi.js'
import { type Particle, update as pUpdate } from '../Particle'
import { stage } from './particles'

import { aspect, resolution } from '../config'

const [width, height] = aspect

const isInBounds = ({ x, y }: { x: number; y: number }) =>
  x > -1000 || x < width + 1000 || y > -1000 || y < height + 1000

const n = stage.children.length
const update = () => {
  for (let i = 0; i < n; i++) {
    const p = stage.children[i] as Particle

    if (isInBounds(p)) pUpdate(p)
  }
}

Ticker.system.autoStart = false

export const ticker = new Ticker()
ticker.add(update)

export const getRenderer = (view: HTMLCanvasElement) => {
  const renderer = new Renderer({
    view,
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
  render()

  ticker.add(render)

  return {
    renderer,
    frame: update,
    destroy: () => {
      ticker.remove(update)
      ticker.remove(render)
      pr.destroy()
      renderer.destroy()
      stage.destroy({
        children: true,
      })
    },
  }
}

export default getRenderer
