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

  return (
    <>
      <AppBar position="relative">
        <StyledToolBar>
          <MenuItem>About</MenuItem>
          <MenuItem>Skills</MenuItem>
          <MenuItem>Projects</MenuItem>
        </StyledToolBar>
      </AppBar>
    </>
  );
};

export default Header;
