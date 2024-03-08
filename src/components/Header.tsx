import { AppBar, MenuItem, Toolbar, styled } from "@mui/material";
import { darkModeTheme as theme } from "../theme";

const Header = () => {
  const StyledToolBar = styled(Toolbar)(({}) => ({
    display: "flex",
    justifyContent: "end",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-between",
    },
  }));

  const StyledMenuItem = styled(MenuItem)(({}) => ({
    color: theme.palette.primary.contrastText,
    fontFamily: "Inter",
    fontSize: "1.25rem",
    fontWeight: 300,
    position: "relative",

    "&::before": {
      content: "''",
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "1px",
      backgroundColor: theme.palette.secondary.main,
      transform: "scaleX(0)", // Inicialmente oculta a borda
      transition: "transform 0.3s ease-out", // Adiciona a transição
    },

    "&:hover::before": {
      transform: "scaleX(1)", // Mostra a borda durante o hover
    },
  }));

  return (
    <>
      <AppBar position="relative">
        <StyledToolBar>
          <StyledMenuItem>About</StyledMenuItem>
          <StyledMenuItem>Skills</StyledMenuItem>
          <StyledMenuItem>Projects</StyledMenuItem>
        </StyledToolBar>
      </AppBar>
    </>
  );
};

export default Header;
