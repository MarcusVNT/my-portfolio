import { AppBar, MenuItem, Toolbar, styled } from "@mui/material";

const Header = () => {
  const StyledToolBar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    justifyContent: "end",
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
