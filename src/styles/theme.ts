import { extendTheme } from '@chakra-ui/react'

const fonts = {
  body: 'Roboto, system-ui, sans-serif',
  heading: 'Roboto, system-ui, sans-serif',
  mono: 'Menlo, monospace'
}
const fontWeights = {
  normal: 400,
  medium: 600,
  bold: 700,
}
const radii = {
  sm: '5px',
  md: '8px',
}
const colors = {
  red: {
    500: '#FF4033'
  },
  purple: {
    500: '#8257e5',
  },
  gray: {
    300: '#e1e1e6',
    400: '#70707e',
    500: '#37373e',
    600: '#29292e',
    700: '#202024',
    800: '#121214'
  },
}

const theme = extendTheme({ fonts, fontWeights, radii, colors })
export default theme