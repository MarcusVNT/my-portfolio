import Skyfall from "../../../../assets/images/skyfall.jpg";
import Arvore from "../../../../assets/images/arvore.jpg";
import Pitu from "../../../../assets/images/pitu (1).jpg";
import { Grid, Stack, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";

export default function SwiperComponent() {
  const images = [Skyfall, Arvore, Pitu];

  return (
    <Carousel>
      {images.map((image, index) => (
        <Grid key={index} border="1px solid #fff" height="50%" width="50%">
          <Grid>
            <img src={image} width="100%" />
          </Grid>
          <Stack p={3} alignItems="center" justifyContent="center">
            <Typography
              variant="h2"
              color="primary.contrastText"
              fontFamily="Inter"
              textAlign="center"
              marginBottom="16px"
            >
              Skyfall
            </Typography>
            <Typography color="primary.contrastText">
              Skyfall is a project that I developed to help people to find their
              dream home. It's a web application that uses the ZAP API to get
              the properties and show them in a beautiful way.
            </Typography>
          </Stack>
        </Grid>
      ))}
    </Carousel>
  );
}
