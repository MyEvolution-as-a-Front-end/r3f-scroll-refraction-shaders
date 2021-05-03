import {ReactNode, useRef} from 'react'

import {useFrame} from '@react-three/fiber'
import {useBlock, offsetContext} from 'hooks/useBlock'
import lerp from 'lerp'
import state from 'store'

interface Props {
  offset?: number
  factor?: number
  children?: ReactNode
}

export default function Block({
  children,
  offset,
  factor,
  ...props
}: Props): JSX.Element {
  const {offset: parentOffset, sectionHeight} = useBlock()

  const ref = useRef(null)

  offset = offset !== undefined ? offset : parentOffset

  useFrame(() => {
    const curY = ref.current.position.y
    const curTop = state.top.current
    ref.current.position.y = lerp(curY, (curTop / state.zoom) * factor, 0.1)
  })

  return (
    <offsetContext.Provider value={offset}>
      <group {...props} position={[0, -sectionHeight * offset * factor, 0]}>
        <group ref={ref}>{children}</group>
      </group>
    </offsetContext.Provider>
  )
}
