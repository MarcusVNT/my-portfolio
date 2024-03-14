import { createTheme, responsiveFontSizes } from "@mui/material";

export let theme = createTheme({
  palette: {
    primary: {
      main: "#232323",
    },
    secondary: {
      main: "#4f8e3e",
    },
  },
  typography: {
    fontFamily: "Montserrat Alternates, Roboto, sans-serif",
  },
});

theme = responsiveFontSizes(theme);
