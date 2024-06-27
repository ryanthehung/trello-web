import { red } from '@mui/material/colors'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

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

export const colorDark = {
  primary: {
    50: '#e3f4ff',
    100: '#bbe2ff',
    200: '#8dd0ff',
    300: '#56bdff',
    400: '#1dadff',
    500: '#009eff',
    600: '#008fff',
    700: '#007bff',
    800: '#1269ec',
    900: '#1f47cd'
  },
  secondary: {
    50: '#fff8e1',
    100: '#ffecb3',
    200: '#ffe082',
    300: '#ffd54f',
    400: '#ffca28',
    500: '#ffc107',
    600: '#ffb300',
    700: '#ffa000',
    800: '#ff8f00',
    900: '#ff6f00'
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
    appBarHeight: '48px',
    boardBarHeight: '58px'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: colorLight.primary[500],
          light: colorLight.primary[300],
          dark: colorLight.primary[800]
        },
        secondary: {
          main: colorLight.secondary[500]
        },
        background: {
          main: colorOn.grey[500],
          light: colorOn.grey[0],
          dark: colorOn.grey[1000]
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
          main: colorDark.primary[700]
        },
        secondary: {
          main: colorDark.secondary[500]
        }
      }
      // spacing: (factor) => `${0.25 * factor}rem`
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
