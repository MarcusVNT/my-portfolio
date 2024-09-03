import {
  AppBar,
  MenuItem,
  Toolbar,
  styled,
  useMediaQuery,
} from "@mui/material";
import { theme } from "../theme";

const Header = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const handleMenuItemClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const StyledToolBar = styled(Toolbar)(({}) => ({
    display: "flex",
    justifyContent: "end",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-around",
    },
  }));

  const StyledMenuItem = styled(MenuItem)(({}) => ({
    color: theme.palette.primary.contrastText,
    fontFamily: "Inter",
    fontSize: isSmallScreen ? "1rem" : "1.25rem",
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
      <AppBar position="relative" style={{ zIndex: 10 }}>
        <StyledToolBar>
          <StyledMenuItem onClick={() => handleMenuItemClick("about")}>
            About
          </StyledMenuItem>
          <StyledMenuItem onClick={() => handleMenuItemClick("projects")}>
            Projects
          </StyledMenuItem>
          <StyledMenuItem onClick={() => handleMenuItemClick("contact-me")}>
            Contact Me
          </StyledMenuItem>
        </StyledToolBar>
      </AppBar>
    </>
  );
};

export default Header;
