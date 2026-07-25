import { Component, useState } from 'react'
import type { ReactNode } from 'react'

/** True only if the browser can actually give us a WebGL context.
 *  Brave (aggressive fingerprint protection) and disabled hardware
 *  acceleration both make this return false. */
function webglAvailable(): boolean {
  if (typeof window === 'undefined') return false
  try {
    const canvas = document.createElement('canvas')
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    )
  } catch {
    return false
  }
}

/** Renders nothing (instead of crashing the whole app) if a shader throws. */
class ShaderBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false }
  static getDerivedStateFromError() {
    return { failed: true }
  }
  componentDidCatch() {
    /* swallow — the background shader is decorative, the site works without it */
  }
  render() {
    return this.state.failed ? null : this.props.children
  }
}

/** Wrap any WebGL shader in this. If WebGL is unavailable (Brave, no GPU),
 *  or the shader throws, the site renders normally without it. */
export function Fx({ children }: { children: ReactNode }) {
  const [supported] = useState(webglAvailable)
  if (!supported) return null
  return <ShaderBoundary>{children}</ShaderBoundary>
}
