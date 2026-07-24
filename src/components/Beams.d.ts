// Type declarations for the React Bits Beams component (JS + CSS variant).
// Mirrors the documented props table so the untouched .jsx keeps its full API in TS files.
import type * as React from 'react'

export interface BeamsProps {
  beamWidth?: number
  beamHeight?: number
  beamNumber?: number
  lightColor?: string
  speed?: number
  noiseIntensity?: number
  scale?: number
  rotation?: number
}

declare const Beams: React.FC<BeamsProps>
export default Beams
