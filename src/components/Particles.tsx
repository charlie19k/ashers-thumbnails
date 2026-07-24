import { useEffect, useRef } from 'react'
import { Renderer, Camera, Geometry, Program, Mesh } from 'ogl'

// React Bits–style floating particle field. Tiny white dust motes drifting in
// 3D space, rendered on a transparent canvas.

const VERT = /* glsl */ `
attribute vec3 position;
attribute float aRandom;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform float uTime;
varying float vRandom;
void main() {
  vRandom = aRandom;
  vec3 pos = position;
  pos.y += sin(uTime * 0.18 + aRandom * 6.2831) * 0.35;
  pos.x += cos(uTime * 0.12 + aRandom * 6.2831) * 0.25;
  vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mvPos;
  gl_PointSize = (1.2 + aRandom * 3.4) * (14.0 / max(0.1, -mvPos.z));
}
`

const FRAG = /* glsl */ `
precision highp float;
varying float vRandom;
uniform float uTime;
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float d = length(c);
  float alpha = smoothstep(0.5, 0.05, d);
  float twinkle = 0.55 + 0.45 * sin(uTime * (0.4 + vRandom) + vRandom * 40.0);
  gl_FragColor = vec4(vec3(1.0), alpha * twinkle * (0.12 + vRandom * 0.22));
}
`

interface ParticlesProps {
  count?: number
  className?: string
}

export default function Particles({ count = 140, className = '' }: ParticlesProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const renderer = new Renderer({ alpha: true, antialias: false, dpr: Math.min(window.devicePixelRatio, 2) })
    const gl = renderer.gl
    gl.clearColor(0, 0, 0, 0)
    container.appendChild(gl.canvas)
    gl.canvas.style.position = 'absolute'
    gl.canvas.style.inset = '0'
    gl.canvas.style.width = '100%'
    gl.canvas.style.height = '100%'

    const camera = new Camera(gl, { fov: 45 })
    camera.position.z = 6

    const positions = new Float32Array(count * 3)
    const randoms = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8
      positions[i * 3 + 2] = (Math.random() - 0.5) * 5
      randoms[i] = Math.random()
    }

    const geometry = new Geometry(gl, {
      position: { size: 3, data: positions },
      aRandom: { size: 1, data: randoms },
    })
    const program = new Program(gl, {
      vertex: VERT,
      fragment: FRAG,
      uniforms: { uTime: { value: 0 } },
      transparent: true,
      depthTest: false,
    })
    const points = new Mesh(gl, { mode: gl.POINTS, geometry, program })

    const resize = () => {
      renderer.setSize(container.offsetWidth, container.offsetHeight)
      camera.perspective({ aspect: container.offsetWidth / Math.max(1, container.offsetHeight) })
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(container)

    let raf = 0
    const start = performance.now()
    const loop = () => {
      raf = requestAnimationFrame(loop)
      program.uniforms.uTime.value = (performance.now() - start) / 1000
      renderer.render({ scene: points, camera })
    }
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      container.removeChild(gl.canvas)
      gl.getExtension('WEBGL_lose_context')?.loseContext()
    }
  }, [count])

  return <div ref={containerRef} className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true" />
}
