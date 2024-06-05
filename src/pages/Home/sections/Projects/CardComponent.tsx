import { FC, useState } from "react";
import { CardInfo } from "./CardsData";
import {
  Card,
  CardContent,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #4f8e3e",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const CardComponent: FC<CardInfo> = ({ title, image, description, link }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Grid item sm={5}>
      <Card
        sx={{
          borderRadius: "8px",
          backgroundColor: "#e2e2e2",
          height: "400px",
          boxShadow: "inset 0px -100px 20px 0px rgba(0, 0, 0, 0.5)",
          cursor: "pointer",
        }}
        onClick={handleOpen}
      >
        <CardContent>
          <img
            src={image}
            alt={title}
            style={{
              objectFit: "contain",
              width: "100%",
              maxHeight: "200px",
            }}
          />
          <Stack sx={{ padding: "16px 16px 0 16px" }}>
            <Typography variant="h5" component="div" marginBottom="8px">
              {title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {description}
            </Typography>
          </Stack>
          <Link href={link} underline="none" target="_blank" rel="noreferrer" />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CardComponent;
