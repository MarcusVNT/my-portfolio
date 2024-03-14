import { Grid, Container, Typography, styled, Box } from "@mui/material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SchoolIcon from "@mui/icons-material/School";
import { theme } from "../../../../theme";

const About = () => {
  const StyledAbout = styled("section")(({}) => ({
    backgroundColor: "#ffffff",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    margin: "2rem 4rem",
    [theme.breakpoints.down("xs")]: {
      margin: "2rem 1rem",
    },
  }));

  return (
    <StyledAbout>
      <Container maxWidth="lg">
        <Typography
          variant="h1"
          fontFamily="Inter"
          textAlign="center"
          marginBottom="4rem"
        >
          About Me
        </Typography>
        <Grid
          container
          sx={{
            justifyContent: "center",
            gap: "3rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "1px solid #000",
              borderRadius: "4px",
              padding: "1rem",
              gap: ".25rem",
              width: "203px",
            }}
          >
            <WorkspacePremiumIcon />
            <Typography variant="h6" fontWeight="bold">
              Experience
            </Typography>
            <Typography variant="body1" paragraph={true} marginBottom="0">
              Software Developer
            </Typography>
            <Typography variant="body1" paragraph={true} marginBottom="0">
              Front-End
            </Typography>
            <Typography variant="body1" paragraph={true} marginBottom="0">
              2 Years of Improvement
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "1px solid #000",
              borderRadius: "4px",
              padding: "1rem",
              gap: ".25rem",
              width: "203px",
            }}
          >
            <SchoolIcon />
            <Typography variant="h6" fontWeight="bold">
              Education
            </Typography>
            <Typography variant="body1" paragraph={true} marginBottom="0">
              Bachelors Degree
            </Typography>
            <Typography variant="body1" paragraph={true} marginBottom="0">
              Software Engineering
            </Typography>
            <Typography variant="body1" paragraph={true} marginBottom="0">
              (2022-2026)
            </Typography>
          </Box>
        </Grid>
      </Container>
    </StyledAbout>
  );
};

export default About;
