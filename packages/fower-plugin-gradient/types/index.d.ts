import { FowerPlugin, FowerColor, ResponsiveValue } from '@fower/core'

declare const _default: () => FowerPlugin
export default _default

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    bgGradientX?: false | FowerColor[]

    bgGradientY?: false | FowerColor[]

    bgGradient?: ResponsiveValue<string>
  }
}
