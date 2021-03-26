import { Theme } from '@styli/types'
import { colors } from '@styli/colors'

export const theme: Theme = {
  breakpoints: {
    // => @media (min-width: 640px) { ... }
    sm: '640px',

    // => @media (min-width: 768px) { ... }
    md: '768px',

    // => @media (min-width: 1024px) { ... }
    lg: '1024px',

    // => @media (min-width: 1280px) { ... }
    xl: '1280px',

    // => @media (min-width: 1536px) { ... }
    '2xl': '1536px',
  },
  colors,
  spacing: {
    0: '0',
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    7: '28px',
    8: '32px',
    9: '36px',
    10: '40px',
    11: '44px',
    12: '48px',
    14: '56px',
    16: '64px',
    20: '80px',
    24: '96px',
    28: '112px',
    32: '128px',
    36: '144px',
    40: '160px',
    44: '176px',
    48: '192px',
    52: '208px',
    56: '224px',
    60: '240px',
    64: '256px',
    72: '288px',
    80: '320px',
    96: '384px',
  },
  headings: ['48px', '32px', '24px', , '20px', '16px', '14px'] as string[] | number[],
  fontSize: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '30px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '60px',
    '7xl': '72px',
    '8xl': '96px',
    '9xl': '128px',
  },
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  letterSpacings: {
    tighter: '-0.9px',
    tight: '-0.45px',
    normal: '0px',
    wide: '0.45px',
    wider: '0.9px',
    widest: '1.8px',
  },
  borderRadius: {
    none: '0',
    sm: '2px',
    base: '4px',
    md: '6px',
    lg: '8px',
    xl: '12px',
    '2xl': '16px',
    '3xl': '24px',
    full: '9999px',
  },
  shadow: {
    xs: '0 1px 1px rgba(0, 0, 0, 0.12), 0 0 1px rgba(0,0,0,0.01)',
    sm: '0 1px 3px rgba(0, 0, 0, 0.12), 0 0 1px rgba(0,0,0,0.01)',
    base: '0 2px 4px rgba(0, 0, 0, 0.12), 0 0 2px rgba(0,0,0,0.02)',
    md: '0 4px 8px rgba(0, 0, 0, 0.12), 0 0 2px rgba(0,0,0,0.02)',
    lg: '0 8px 16px rgba(0, 0, 0, 0.12), 0 0 2px rgba(0,0,0,0.02)',
    xl: '0 14px 24px rgba(0, 0, 0, 0.16), 0 0 2px rgba(0,0,0,0.02)',
    xxl: '0 24px 48px rgba(0, 0, 0, 0.2), 0 0 2px rgba(0,0,0,0.02)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
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