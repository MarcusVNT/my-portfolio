import { Container, Typography, styled } from "@mui/material";

const About = () => {
  const StyledAbout = styled("section")(({}) => ({
    backgroundColor: "#ffffff",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    margin: "2rem 4rem",
  }));

  return (
    <StyledAbout>
      <Container maxWidth="lg">
        <Typography variant="h1" fontFamily="Inter" textAlign="center">
          About Me
        </Typography>
      </Container>
    </StyledAbout>
  );
};

export default About;
