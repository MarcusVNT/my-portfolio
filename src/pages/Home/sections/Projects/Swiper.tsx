import { Swiper, SwiperSlide } from "swiper/react";
import Skyfall from "../../../../assets/images/skyfall.jpg";
import { Grid, Stack, Typography } from "@mui/material";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

export default function SwiperComponent() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={48}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <Grid container gap="48px" justifyContent="center">
          <SwiperSlide>
            <Grid border="1px solid #fff" flexDirection="column" item sm={5}>
              <Grid>
                <img src={Skyfall} width="100%" />
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
                  Skyfall is a project that I developed to help people to find
                  their dream home. It's a web application that uses the ZAP API
                  to get the properties and show them in a beautiful way.
                </Typography>
              </Stack>
            </Grid>
          </SwiperSlide>
          <SwiperSlide>
            <Grid border="1px solid #fff" flexDirection="column" item sm={5}>
              <Grid>
                <img src={Skyfall} width="100%" />
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
                  Skyfall is a project that I developed to help people to find
                  their dream home. It's a web application that uses the ZAP API
                  to get the properties and show them in a beautiful way.
                </Typography>
              </Stack>
            </Grid>
          </SwiperSlide>
          <SwiperSlide>
            <Grid border="1px solid #fff" flexDirection="column" item sm={5}>
              <Grid>
                <img src={Skyfall} width="100%" />
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
                  Skyfall is a project that I developed to help people to find
                  their dream home. It's a web application that uses the ZAP API
                  to get the properties and show them in a beautiful way.
                </Typography>
              </Stack>
            </Grid>
          </SwiperSlide>
          <SwiperSlide>
            <Grid border="1px solid #fff" flexDirection="column" item sm={5}>
              <Grid>
                <img src={Skyfall} width="100%" />
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
                  Skyfall is a project that I developed to help people to find
                  their dream home. It's a web application that uses the ZAP API
                  to get the properties and show them in a beautiful way.
                </Typography>
              </Stack>
            </Grid>
          </SwiperSlide>
          <SwiperSlide>
            <Grid border="1px solid #fff" flexDirection="column" item sm={5}>
              <Grid>
                <img src={Skyfall} width="100%" />
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
                  Skyfall is a project that I developed to help people to find
                  their dream home. It's a web application that uses the ZAP API
                  to get the properties and show them in a beautiful way.
                </Typography>
              </Stack>
            </Grid>
          </SwiperSlide>
          <SwiperSlide>
            <Grid border="1px solid #fff" flexDirection="column" item sm={5}>
              <Grid>
                <img src={Skyfall} width="100%" />
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
                  Skyfall is a project that I developed to help people to find
                  their dream home. It's a web application that uses the ZAP API
                  to get the properties and show them in a beautiful way.
                </Typography>
              </Stack>
            </Grid>
          </SwiperSlide>
        </Grid>
      </Swiper>
    </>
  );
}
