import { FC, useState } from "react";
import { CardInfo } from "./CardsData";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Link,
  Modal,
  Stack,
  Typography,
} from "@mui/material";

const CardComponent: FC<CardInfo> = ({ title, image, description, link }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  return (
    <Grid item sm={5}>
      <Card
        sx={{
          borderRadius: "8px",
          backgroundColor: "#d8d8d8",
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
        </CardContent>
      </Card>
      <Modal open={open} onClose={handleClose} aria-labelledby={title}>
        <Box sx={modalStyle}>
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
            <Typography
              variant="h5"
              component="div"
              marginBottom="8px"
              id="modal-title"
            >
              {title}
            </Typography>
            <Typography
              sx={{ mb: 1.5 }}
              color="text.secondary"
              id="modal-description"
            >
              {description}
            </Typography>
          </Stack>
          <Stack alignItems="center">
            <Link href={link} underline="none" target="_blank">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#a7a7a7",
                  color: "#fff",
                  margin: "16px",
                  "&:hover": {
                    backgroundColor: "#4f8e3e",
                  },
                }}
              >
                Check it out!
              </Button>
            </Link>
          </Stack>
        </Box>
      </Modal>
    </Grid>
  );
};

export default CardComponent;
