import {
  Grid,
  Container,
  Typography,
  styled,
  Box,
  useMediaQuery,
} from "@mui/material";
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
    "Tailwind",
    "Next.JS",
    "Node.JS",
    "Flutter",
    "Dart",
    "Git",
    "GitHub",
    "REST API",
    "Figma",
    "Insomnia",
    "Styled Components",
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
    "Proactivity",
    "Organized",
    "Collaborative Spirit",
  ];
  const isSmallScreen = useMediaQuery("(max-width:500px)");

  const StyledAbout = styled("section")(({}) => ({
    backgroundColor: "#ffffff",
    display: "flex",
    justifyContent: "center",
    margin: "2rem 4rem",
    [theme.breakpoints.down("xs")]: {
      margin: "2rem 1rem",
    },
  }));

  const StyledExEd = styled(Box)(({}) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid #f0f0f0",
    borderRadius: "4px",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    padding: "16px",
    gap: "4px",
    minWidth: "203px",
    transition: "transform .3s ease",
    "&:hover": {
      transform: "scale(1.1)",
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  }));

  const StyledList = styled(List)(({}) => ({
    display: "grid",
    justifyContent: "center",
    gridTemplateColumns: "repeat(6, 1fr)",
    gap: "16px",
    marginBottom: "32px",
    fontSize: isSmallScreen ? "0.825rem" : "1rem",

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
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "8px",
    transition: "transform .3s ease",
    "&:hover": {
      transform: "scale(1.1)",
      backgroundColor: "#f0f0f0",
    },
  }));

  return (
    <StyledAbout id="about">
      <Container maxWidth="lg">
        <Typography
          variant="h1"
          fontFamily="Inter"
          textAlign="center"
          marginBottom="48px"
          style={{ fontSize: isSmallScreen ? "2.5rem" : "4rem" }}
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
          <StyledExEd>
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
          </StyledExEd>
          <StyledExEd>
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
          </StyledExEd>
        </Grid>
        <Grid
          sx={{
            borderBottom: "1px solid #d4d4d4",
            marginBottom: "1rem",
          }}
        >
          <Typography variant="body1" marginBottom="1rem">
            I'm Marcus Vinícius do Nascimento Teixeira, a dedicated Front-End
            Developer with a passion for crafting engaging and user-friendly web
            experiences. Currently pursuing a Bachelor's degree in Software
            Engineering, I bring a solid foundation in JavaScript, TypeScript,
            and React.js to my projects. I'm adept at building dynamic and
            responsive user interfaces, prioritizing clean code, accessibility,
            and maintainability.
          </Typography>
          <Typography variant="body1" marginBottom="1rem">
            My expertise extends to modern CSS frameworks like Tailwind CSS and
            Material UI, and I leverage Git and GitHub for efficient version
            control. I'm also familiar with Flutter for mobile development and
            dedicated to continuous learning and applying best practices to
            deliver high-quality solutions.
          </Typography>
        </Grid>
        <Grid borderBottom="1px solid #d4d4d4">
          <Typography
            variant="h2"
            textAlign="center"
            fontFamily="Inter"
            mb="24px"
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
