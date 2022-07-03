import { createTheme } from '@material-ui/core/styles'
import { blue, green, orange } from '@material-ui/core/colors'

export const blueTheme = createTheme({
  palette: {
    primary: {
      // main: blue[500]
      main: '#006efa'
    }
  }
})

export const greenTheme = createTheme({
  palette: {
    primary: {
      main: green[500]
    }
  }
})

export const orangeTheme = createTheme({
  palette: {
    primary: {
      main: orange[500]
    }
  }
})
