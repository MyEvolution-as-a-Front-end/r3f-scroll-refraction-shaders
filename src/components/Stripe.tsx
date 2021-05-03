import {useBlock} from 'hooks/useBlock'

import Plane from './Plane'

export default function Stripe() {
  const {contentMaxWidth} = useBlock()

  return (
    <Plane
      scale={[100, contentMaxWidth, 1]}
      rotation={[0, 0, Math.PI / 4]}
      position={[0, 0, -1]}
      color="#e3f6f5"
    />
  )
}
