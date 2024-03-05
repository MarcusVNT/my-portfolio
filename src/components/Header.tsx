import { useTheme } from "@mui/material/styles";
import {
  AppBar,
  MenuItem,
  Toolbar,
  styled,
  useMediaQuery,
} from "@mui/material";

const Header = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down(600));

  const StyledToolBar = styled(Toolbar)(({}) => ({
    display: "flex",
    justifyContent: isXs ? "space-between" : "end",
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
