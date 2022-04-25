import { colors, grey } from './utils'
import { createTheme } from '@mui/material/styles'
import { rgba } from 'polished'

export const theme = createTheme({
  palette: {
    primary: {
      main: colors['PM-red'],
      dark: colors['PD-red'],
      light: colors['PL-red']
    },
    secondary: {
      main: colors['NM-blue'],
      dark: colors['ND-blue'],
      light: colors['NL-blue']
    },
    error: {
      main: colors['EM-red'],
      dark: colors['ED-red'],
      light: colors['EL-red']
    },
    warning: {
      main: colors['WM-yellow'],
      dark: colors['WD-yellow'],
      light: colors['WL-yellow']
    },
    info: {
      main: colors['IM-blue'],
      dark: colors['ID-blue'],
      light: colors['IL-blue']
    },
    success: {
      main: colors['SM-green'],
      dark: colors['SD-green'],
      light: colors['SL-green']
    },
    text: {
      primary: colors['PM-black'],
      disabled: rgba(colors['PM-black'], 0.5)
    },
    action: {
      active: colors['PM-orange'],
      hover: colors['PM-orange'],
      hoverOpacity: 0.08,
      focus: colors['PM-orange'],
      selected: colors['PM-orange'],
      disabled: colors['NL-blue'],
      disabledBackground: rgba(colors['PM-black'], 0.08),
      disabledOpacity: 0.08
    },
    grey: {
      ...grey
    }
  },
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
    fontSize: 16
  }
})
