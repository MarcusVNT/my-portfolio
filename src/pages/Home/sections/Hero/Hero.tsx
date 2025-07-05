import {
  Box,
  Container,
  Grid,
  Stack,
  styled,
  useMediaQuery,
} from "@mui/material";
import Avatar from "../../../../../public/avatar1.png";
import { AnimatedBackground } from "../../../../components/AnimatedBackground";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    padding: "4rem 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  const StyledImg = styled("img")(({ theme }) => ({
    borderRadius: "50%",
    border: `2px solid ${theme.palette.primary.contrastText}`,
    width: "100%",
    [theme.breakpoints.down("md")]: {
      width: "60%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
  }));
  const isSmallScreen = useMediaQuery("(max-width:550px)");

  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <Box position="relative">
              <Box position="absolute" width={"150%"} top={-150} right={0}>
                <AnimatedBackground />
              </Box>
              <Box position="relative" textAlign="center">
                <StyledImg src={Avatar} />
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={7}>
            <Stack alignItems="center">
              <TypeAnimation
                sequence={[800, "Marcus Vinícius"]}
                repeat={Infinity}
                style={{
                  color: "#fff",
                  fontSize: isSmallScreen ? "2.5rem" : "5rem",
                  fontFamily: "Finlandica",
                  textAlign: "center",
                }}
                cursor={false}
              />
            </Stack>
            <Stack alignItems="center">
              <TypeAnimation
                sequence={[
                  1800,
                  "I'm Software Enginner",
                  1000,
                  "I'm Front-End Developer",
                  1000,
                ]}
                repeat={Infinity}
                style={{
                  color: "#fff",
                  fontFamily: "inter",
                  fontSize: isSmallScreen ? "1.5rem" : "2.75rem",
                  fontWeight: 200,
                }}
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
};

export default Hero;
