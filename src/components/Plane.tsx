import {MeshProps} from '@react-three/fiber'

export default function Plane({
  color = 'white',
  ...props
}: MeshProps): JSX.Element {
  return (
    <mesh {...props}>
      <planeGeometry />
      <meshBasicMaterial color={color} />
    </mesh>
  )
}
