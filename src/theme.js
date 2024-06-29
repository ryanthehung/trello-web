import { red, blueGrey, amber } from '@mui/material/colors'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const APP_BAR_HEIGHT = '58pX'
const BOARD_BAR_HEIGHT = '60px'
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`

export const colorOn = {
  grey: {
    0: '#FFFFFF',
    10: '#F6F6F6',
    50: '#F0F0F0',
    100: '#E0E0E0',
    200: '#C2C2C2',
    300: '#A3A3A3',
    400: '#858585',
    500: '#666666',
    600: '#4D4D4D',
    700: '#333333',
    800: '#1A1A1A',
    900: '#0A0A0A',
    1000: '#000000'
  }
}

export const colorLight = {
  primary: {
    50: '#eee8f7',
    100: '#d4c7ec',
    200: '#b7a2e0',
    300: '#9b7bd5',
    400: '#845ecb',
    500: '#6F42C1',
    600: '#653dbb',
    700: '#5835b1',
    800: '#4c2ea9',
    900: '#38229b'
  },
  secondary: {
    50: '#e7f6e9',
    100: '#c5e9ca',
    200: '#9fdaa8',
    300: '#76cd85',
    400: '#56c26a',
    500: '#28A745',
    600: '#28a746',
    700: '#1a953a',
    800: '#0a842f',
    900: '#00641b'
  }
}
// Create a theme instance.
const theme = extendTheme({
  trello: {
    appBarHeight: APP_BAR_HEIGHT,
    boardBarHeight: BOARD_BAR_HEIGHT,
    boardContentHeight: BOARD_CONTENT_HEIGHT
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: colorLight.primary[500],
          light: colorLight.primary[300],
          dark: colorLight.primary[700]
        },
        secondary: {
          main: colorLight.secondary[500],
          light: colorLight.secondary[300],
          dark: colorLight.secondary[700]
        },
        background: {
          main: colorOn.grey[500],
          light: colorOn.grey[100],
          dark: colorOn.grey[900]
        }
      },
      error: {
        main: red.A400
      },
      text: {
        secondary: red[500]
      }
      // spacing: (factor) => `${0.25 * factor}rem`
    },
    dark: {
      palette: {
        primary: {
          main: '#74b9ff',
          light: blueGrey[300],
          dark: blueGrey[700]
        },
        secondary: {
          main: amber[500],
          light: amber[300],
          dark: amber[700]
        },
        background: {
          main: colorOn.grey[500],
          light: colorOn.grey[100],
          dark: colorOn.grey[900]
        }
      }
    }
  },
  components: {
    // Name of the component
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: '8px',
            height: '8px'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: colorOn.grey[200],
            borderRadius: '8px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: colorOn.grey[10],
            borderRadius: '8px'
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: '0.875rem',
          fontWeight: 'bold',
          textTransform: 'none',
          borderWidth: '0.5px'
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem'
          // color: theme.palette.primary.main
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          '&.MuiTypography-h5': { fontSize: '0.875rem' }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& fieldset': { borderWidth: '0.5px !important' },
          '&:hover fieldset': { borderWidth: '1px !important' },
          '&.Mui-focused fieldset': { borderWidth: '1px !important' }
        }
      }
    }
  },
  error: {
    main: red.A400
  },
  typography: {
    fontSize: 12,
    h1: {
      fontSize: 40
    },
    h2: {
      fontSize: 32
    },
    h3: {
      fontSize: 24
    },
    h4: {
      fontSize: 20
    },
    h5: {
      fontSize: 16
    },
    h6: {
      fontSize: 14
    }
  }
})

export default theme
