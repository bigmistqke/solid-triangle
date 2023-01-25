import { createEffect, JSX, mapArray } from 'solid-js'
import { useTriangle } from '../'
import { childrenTokens } from '../ParserFunctions'

export default {
  Scene: (props: { children: JSX.Element | JSX.Element[]; id: string }) => {
    const tokens = childrenTokens(() => props.children)
    const context = useTriangle()
    const mapTokens = mapArray(tokens, token => {
      createEffect(() => {
        if (token.id === 'Scene' && token.props.id === props.id) {
          context.setScene?.(token.three)
        }
      })
    })
    createEffect(mapTokens)
    return <>{props.children}</>
  },
  Camera: (props: { children: JSX.Element | JSX.Element[]; id: string }) => {
    const tokens = childrenTokens(() => props.children)
    const context = useTriangle()
    const mapTokens = mapArray(tokens, token => {
      createEffect(() => {
        if (token.type === 'Camera' && token.id !== 'CubeCamera' && token.props.id === props.id) {
          context.setCamera?.(token.three)
        }
      })
    })
    createEffect(mapTokens)
    return <>{props.children}</>
  },
}
