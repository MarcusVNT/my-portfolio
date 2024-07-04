import { Box, Container, Grid, Stack, Typography, styled } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.png";
import DownloadIcon from "@mui/icons-material/FileDownloadOutlined";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import Button from "../../../../components/Button";
import { AnimatedBackground } from "../../../../components/AnimatedBackground";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  const StyledImg = styled("img")(({ theme }) => ({
    width: "75%",
    borderRadius: "50%",
    border: `2px solid ${theme.palette.primary.contrastText}`,
    [theme.breakpoints.down("md")]: {
      width: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "60%",
    },
  }));

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
                  fontSize: "6rem",
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
                  fontSize: "3.5rem",
                  fontWeight: 200,
                }}
              />
            </Stack>

            <Grid
              container
              display="flex"
              justifyContent="center"
              pt={3}
              spacing={3}
              sx={{
                paddingBottom: { xs: "2rem", sm: 0 },
              }}
            >
              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <Button onClick={() => console.log("Download do Currículo.")}>
                  <DownloadIcon />
                  <Typography> Donwload CV</Typography>
                </Button>
              </Grid>
              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <Button onClick={() => console.log("Abre o modal de contato.")}>
                  <EmailIcon />
                  <Typography>Contact Me</Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
};

export default Hero;
