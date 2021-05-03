import {useEffect, useRef} from 'react'

import {Canvas} from '@react-three/fiber'
import state from 'store'

import {Block, Content, Cross, Stripe} from 'components'

export default function Home(): JSX.Element {
  const scrollArea = useRef()
  const onScroll = e => (state.top.current = e.target.scrollTop)

  useEffect(() => onScroll({target: scrollArea.current}), [])

  return (
    <>
      <Canvas
        linear
        orthographic
        style={{
          position: 'absolute',
        }}
        camera={{zoom: state.zoom, position: [0, 0, 500]}}
      >
        <Block factor={1.5} offset={0}>
          <Content left />
        </Block>
        <Block factor={2.0} offset={1}>
          <Content />
        </Block>
        <Block factor={-1.0} offset={1}>
          <Stripe />
        </Block>
        <Block factor={1.5} offset={2}>
          <Content left>
            <Block factor={-0.5}>
              <Cross />
            </Block>
          </Content>
        </Block>
      </Canvas>
      <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
        <div style={{height: `${state.pages * 100}vh`}} />
      </div>
    </>
  )
}
