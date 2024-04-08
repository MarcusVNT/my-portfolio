import { Container, Grid, Stack, Typography, styled } from "@mui/material";
import Skyfall from "../../../../assets/images/skyfall.jpg";

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

        <Grid container gap="48px" justifyContent="center">
          <Grid border="1px solid #fff" flexDirection="column" item xs={5}>
            <Grid>
              <img src={Skyfall} width="100%" />
            </Grid>
            <Stack p={3} alignItems="center" justifyContent="center">
              <Typography
                variant="h2"
                color="primary.contrastText"
                fontFamily="Inter"
                textAlign="center"
                marginBottom="16px"
              >
                Skyfall
              </Typography>
              <Typography color="primary.contrastText">
                Skyfall is a project that I developed to help people to find
                their dream home. It's a web application that uses the ZAP API
                to get the properties and show them in a beautiful way.
              </Typography>
            </Stack>
          </Grid>
          <Grid border="1px solid #fff" flexDirection="column" item xs={5}>
            <Grid>
              <img src={Skyfall} width="100%" />
            </Grid>
            <Stack p={3} alignItems="center" justifyContent="center">
              <Typography
                variant="h2"
                color="primary.contrastText"
                fontFamily="Inter"
                textAlign="center"
                marginBottom="16px"
              >
                Skyfall
              </Typography>
              <Typography color="primary.contrastText">
                Skyfall is a project that I developed to help people to find
                their dream home. It's a web application that uses the ZAP API
                to get the properties and show them in a beautiful way.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </StyledProjects>
  );
};

export default Projects;
