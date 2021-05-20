import { Theme } from '@fower/types'
import { colors } from '@fower/colors'

export const theme: Partial<Theme> = {
  colors,
  spacings: {
    0: 0,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 20,
    6: 24,
    7: 28,
    8: 32,
    9: 36,
    10: 40,
    11: 44,
    12: 48,
    14: 56,
    16: 64,
    20: 80,
    24: 96,
    28: 112,
    32: 128,
    36: 144,
    40: 160,
    44: 176,
    48: 192,
    52: 208,
    56: 224,
    60: 240,
    64: 256,
    72: 288,
    80: 320,
    96: 384,
  },
  fontFamilies: {
    sans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
    mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
    '5xl': 48,
    '6xl': 60,
    '7xl': 72,
    '8xl': 96,
    '9xl': 128,
  },
  lineHeights: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  radii: {
    none: 0,
    sm: 2,
    base: 4,
    md: 6,
    lg: 8,
    xl: 12,
    '2xl': 16,
    '3xl': 24,
    full: 9999,
  },
  shadows: {
    sm: '0 1rpx 3rpx rgba(0, 0, 0, 0.12), 0 0 1rpx rgba(0,0,0,0.01)',
    base: '0 2rpx 4rpx rgba(0, 0, 0, 0.12), 0 0 2rpx rgba(0,0,0,0.02)',
    md: '0 4rpx 8rpx rgba(0, 0, 0, 0.12), 0 0 2rpx rgba(0,0,0,0.02)',
    lg: '0 8rpx 16rpx rgba(0, 0, 0, 0.12), 0 0 2rpx rgba(0,0,0,0.02)',
    xl: '0 14rpx 24rpx rgba(0, 0, 0, 0.16), 0 0 2rpx rgba(0,0,0,0.02)',
    '2xl': '0 24rpx 48rpx rgba(0, 0, 0, 0.2), 0 0 2rpx rgba(0,0,0,0.02)',
    inner: 'inset 0 2rpx 4rpx 0 rgba(0, 0, 0, 0.06)',
    outline: '0 0 0 3rpx rgba(66, 153, 225, 0.5)',
    none: 'none',
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
}