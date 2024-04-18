import { Grid, Container, Typography, styled, Box } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SchoolIcon from "@mui/icons-material/School";
import { theme } from "../../../../theme";

const About = () => {
  const hardSkillsArray: Array<string> = [
    "HTML",
    "CSS",
    "Javascript",
    "Typescript",
    "React",
    "Material UI",
    "Tailwind CSS",
    "Next.JS",
    "Node.JS",
  ];
  const softSkillsArray: Array<string> = [
    "Communication",
    "Teamwork",
    "Problem Solving",
    "Time Management",
    "Adaptability",
    "Creativity",
    "Empathy",
    "Critical Thinking",
    "Professional Ethics",
  ];

  const StyledAbout = styled("section")(({}) => ({
    backgroundColor: "#ffffff",
    display: "flex",
    justifyContent: "center",
    margin: "2rem 4rem",
    [theme.breakpoints.down("xs")]: {
      margin: "2rem 1rem",
    },
  }));

  const StyledList = styled(List)(({}) => ({
    display: "grid",
    justifyContent: "center",
    gridTemplateColumns: "repeat(6, 1fr)",
    gap: "1rem",
    marginBottom: "2rem",
    [theme.breakpoints.down("lg")]: {
      gridTemplateColumns: "repeat(4, 1fr)",
    },
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  }));

  const StyledListItem = styled(ListItem)(({}) => ({
    border: "1px solid #d4d4d4",
    borderRadius: "4px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: ".5rem 1.5rem",
    width: "10rem",
    transition: "transform .3s ease",
    "&:hover": {
      transform: "scale(1.1)",
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
            mb: "2rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "1px solid #f0f0f0",
              borderRadius: "4px",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              padding: "1rem",
              gap: ".25rem",
              width: "203px",
              transition: "transform .3s ease",
              "&:hover": {
                transform: "scale(1.1)",
              },
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
              border: "1px solid #f0f0f0",
              borderRadius: "4px",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              padding: "1rem",
              gap: ".25rem",
              width: "205px",
              transition: "transform .3s ease",
              "&:hover": {
                transform: "scale(1.1)",
              },
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
        <Grid
          sx={{
            borderBottom: "1px solid #d4d4d4",
            marginBottom: "1rem",
          }}
        >
          <Typography variant="body1" marginBottom="1rem">
            I am a software developer with a passion for creating beautiful and
            functional user interfaces. I have been working as a front-end
            developer for the past two years and I have been improving my skills
            ever since. I am currently pursuing a degree in Software Engineering
            and I am expected to graduate in 2026. I am a quick learner and I
            love to learn new technologies and frameworks. I am looking forward
            to working with a team of talented individuals and I am excited to
            bring my skills and experience to the table.
          </Typography>
        </Grid>
        <Grid borderBottom="1px solid #d4d4d4">
          <Typography
            variant="h2"
            textAlign="center"
            fontFamily="Inter"
            mb="1.5rem"
          >
            Hard Skills
          </Typography>
          <StyledList>
            {hardSkillsArray.map((hardSkill, index) => (
              <StyledListItem key={index}>{hardSkill}</StyledListItem>
            ))}
          </StyledList>
          <Typography
            variant="h2"
            textAlign="center"
            fontFamily="Inter"
            mb="1.5rem"
          >
            Soft Skills
          </Typography>
          <StyledList>
            {softSkillsArray.map((softSkill, index) => (
              <StyledListItem key={index}>{softSkill}</StyledListItem>
            ))}
          </StyledList>
        </Grid>
      </Container>
    </StyledAbout>
  );
};

export default About;
