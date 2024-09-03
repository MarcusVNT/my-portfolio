import { Button, Stack, styled } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Footer = () => {
  const StyledFooter = styled("div")(({}) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginBottom: "16px",
  }));

  const handleEmailClick = () => {
    window.location.href = "mailto:marcus-vnt@live.com";
  };
  return (
    <StyledFooter id="contact-me">
      <Stack m="16px">
        <p style={{ margin: 0 }}>
          © 2024 Marcus Vinícius do Nascimento Teixeira. All rights reserved.
        </p>
      </Stack>
      <Stack flexDirection="row">
        <Button href="www.linkedin.com/in/marcusvnt">
          <LinkedInIcon />
        </Button>
        <Button href="https://github.com/MarcusVNT">
          <GitHubIcon />
        </Button>
        <Button href="https://twitter.com/marcusvnt">
          <XIcon />
        </Button>
        <Button href="https://www.instagram.com/marcusvnt/">
          <InstagramIcon />
        </Button>
        <Button onClick={handleEmailClick}>
          <MailOutlineIcon />
        </Button>
      </Stack>
    </StyledFooter>
  );
};

export default Footer;
