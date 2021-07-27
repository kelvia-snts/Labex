import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: será calculada com base em palette.primary.main,
      main: '#094293',
      // dark: será calculada com base em palette.primary.main,
      // contrastText: será calculada para contrastar com palette.primary.main
    },
    secondary: {
      light: '#4040ff',
      main: '#0000ff',
      // dark: será calculada com base palette.secondary.main,
      contrastText: '#5556eb',
    },
    // Usado por `getContrastText()` para maximizar o contraste entre
    // o plano de fundo e o texto.
    contrastThreshold: 3,
    // Usado pelas funções abaixo para mudança de uma cor de luminância por aproximadamente
    // dois índices dentro de sua paleta tonal.
    // Por exemplo, mude de Red 500 para Red 300 ou Red 700.
    tonalOffset: 0.2,
  },
});

export default theme;