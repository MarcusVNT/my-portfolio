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
  return (
    <StyledFooter>
      <Stack>
        <p>
          © 2024 Marcus Vinícius do Nascimento Teixeira. Todos os direitos
          reservados.
        </p>
      </Stack>
      <Stack flexDirection="row">
        <Button>
          <LinkedInIcon />
        </Button>
        <Button>
          <GitHubIcon />
        </Button>
        <Button>
          <XIcon />
        </Button>
        <Button>
          <InstagramIcon />
        </Button>
        <Button>
          <MailOutlineIcon />
        </Button>
      </Stack>
    </StyledFooter>
  );
};

export default Footer;
