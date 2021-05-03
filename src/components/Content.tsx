import {ReactNode} from 'react'

import {useBlock} from 'hooks/useBlock'

import Plane from './Plane'

interface Props {
  left?: boolean
  children?: ReactNode
}

export default function Content({left, children}: Props): JSX.Element {
  const {contentMaxWidth, canvasWidth, margin} = useBlock()
  const aspect = 1.75
  const alignRight = (canvasWidth - contentMaxWidth - margin) / 2

  return (
    <group position={[alignRight * (left ? -1 : 1), 0, 0]}>
      <Plane
        scale={[contentMaxWidth, contentMaxWidth / aspect, 1]}
        color="#bfe2ca"
      />
      {children}
    </group>
  )
}
