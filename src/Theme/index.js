import { createMuiTheme } from "@material-ui/core/styles";
import { useStore } from "../Store";
const theme = {
  palette: {
    type: "light",
    primary: {
      light: "#7986cb",
      main: "#3f51b5",
      dark: "#303f9f",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ff4081",
      main: "#f50057",
      dark: "#c51162",
      contrastText: "#fff"
    }
  },
  typography: {
    fontFamily: "'Noto Serif KR', serif",
    fontSize: 14
  }
};
const themeMain = ({ darkTheme, fontFamily, fontSize }) => {
  theme.palette.type = darkTheme ? "dark" : "light";
  theme.typography.fontFamily = fontFamily;
  document.body.style.zoom = fontSize / 100;
  // theme.typography.htmlFontSize = fontSize + 2;

  return createMuiTheme(theme);
};

export default themeMain;

// export * from './backColor';
