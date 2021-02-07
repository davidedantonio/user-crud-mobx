import { createMuiTheme } from '@material-ui/core/styles'

const config = {
  themeName: 'Example MobX React',
  palette: {
    primary: {
      light: '#d05ce3',
      main: '#9c27b0',
      dark: '#6a0080',
      contrastText: '#fff'
    }
  }
}

const theme = createMuiTheme(config)
export default theme