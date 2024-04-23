import { Container, Typography, styled } from "@mui/material";
import SwiperComponent from "./Swiper";

const Projects = () => {
  const StyledProjects = styled("section")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "64px", //retirar depois de desenvolver a section.

    // [theme.breakpoints.down("xs")]: {
    //   margin: "2rem 1rem",
    // },
  }));
  return (
    <StyledProjects>
      <Container maxWidth="lg">
        <Typography
          variant="h1"
          color="primary.contrastText"
          fontFamily="Inter"
          textAlign="center"
          marginBottom="4rem"
          marginTop="2rem"
        >
          Projects
        </Typography>
        <SwiperComponent />
      </Container>
    </StyledProjects>
  );
};

export default Projects;
