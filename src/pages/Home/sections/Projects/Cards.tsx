import { Grid, Link, Typography, styled } from "@mui/material";
import { cardsData, CardInfo } from "./CardsData";
import CardComponent from "./CardComponent";

export default function Cards() {
  const StyledLink = styled(Link)({
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    "&:hover": {
      color: "#4f8e3e",
    },
  });

  return (
    <Grid container gap="48px" justifyContent="center">
      {cardsData.map((card: CardInfo, index: number) => (
        <CardComponent key={index} {...card} />
      ))}
      <Typography sx={{ color: "#fff" }}>
        {" "}
        Para ver mais projectos clique{" "}
        <StyledLink href="https://github.com/MarcusVNT">aqui.</StyledLink>
      </Typography>
    </Grid>
  );
}
