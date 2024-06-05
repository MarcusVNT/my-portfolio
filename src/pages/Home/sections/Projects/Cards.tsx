import {
  Card,
  CardContent,
  Grid,
  Link,
  Modal,
  Stack,
  Typography,
  styled,
} from "@mui/material";
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

  const modalStyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  return (
    <Grid container gap="48px" justifyContent="center">
      {cardsData.map((card: CardInfo, index: number) => (
        <CardComponent key={index} {...card} />
      ))}
    </Grid>
  );
}
