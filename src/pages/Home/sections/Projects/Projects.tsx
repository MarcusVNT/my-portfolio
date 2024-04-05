import { Container, Typography, styled } from "@mui/material";

const Projects = () => {
  const StyledProjects = styled("section")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

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
      </Container>
    </StyledProjects>
  );
};

export default Projects;
