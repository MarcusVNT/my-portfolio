import { styled } from "@mui/material";

const Footer = () => {
  const StyledFooter = styled("footer")(({}) => ({
    display: "flex",
    justifyContent: "center",
  }));
  return (
    <StyledFooter>
      <p>Todos os direitos reservados.</p>
    </StyledFooter>
  );
};

export default Footer;
