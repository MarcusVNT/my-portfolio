import { Button, Grid, Stack, styled } from "@mui/material";

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
        <Button>LinkedIn</Button>
        <Button>GitHub</Button>
        <Button>X</Button>
        <Button>Instagram</Button>
        <Button>E-mail</Button>
      </Stack>
    </StyledFooter>
  );
};

export default Footer;
