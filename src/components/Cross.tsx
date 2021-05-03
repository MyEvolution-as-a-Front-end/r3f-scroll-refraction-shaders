import {useRef} from 'react'

import {GroupProps, useFrame} from '@react-three/fiber'
import {useBlock} from 'hooks/useBlock'
import lerp from 'lerp'
import state from 'store'

import Plane from './Plane'

export default function Cross(): JSX.Element {
  const ref = useRef<GroupProps>(null)
  const {viewportHeight} = useBlock()

  useFrame(() => {
    const curTop = state.top.current
    const curY = ref.current.rotation.z
    const nextY =
      (curTop / ((state.pages - 1) * viewportHeight * state.zoom)) * Math.PI
    ref.current.rotation.z = lerp(curY, nextY, 0.1)
  })

  return (
    <group ref={ref}>
      <Plane scale={[1, 0.2, 0.2]} color="#e2bfca" />
      <Plane scale={[0.2, 1, 0.2]} color="#e2bfca" />
    </group>
  )
}
