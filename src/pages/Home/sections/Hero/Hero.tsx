import { Box, Container, Grid, Typography, styled } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.png";
import DownloadIcon from "@mui/icons-material/FileDownloadOutlined";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import Button from "../../../../components/Button";
import { AnimatedBackground } from "../../../../components/AnimatedBackground";

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
      width: "40%",
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
            <Typography
              color="primary.contrastText"
              variant="h1"
              textAlign="center"
              pb={2}
              fontFamily="Finlandica"
            >
              Marcus Vinícius
            </Typography>
            <Typography
              color="primary.contrastText"
              variant="h2"
              textAlign="center"
              fontFamily="inter"
            >
              I'm Software Enginner
            </Typography>
            <Typography
              color="primary.contrastText"
              variant="h4"
              textAlign="center"
              fontFamily="inter"
            >
              Front-End Developer
            </Typography>
            <Grid
              container
              display="flex"
              justifyContent="center"
              pt={3}
              spacing={3}
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
