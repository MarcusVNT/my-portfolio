import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import Skyfall from "../../../../../public/skyfall.jpg";

export default function Cards() {
  return (
    <Grid container gap="48px" justifyContent="center">
      <Grid item xs={5}>
        <Card
          sx={{
            borderRadius: "8px",
          }}
        >
          <CardContent>
            <img
              src={Skyfall}
              alt="Skyfall"
              style={{
                objectFit: "contain",
                width: "100%",
                borderRadius: "8px 8px 0 0",
              }}
            />
            <Stack sx={{ padding: "16px 16px 0 16px" }}>
              <Typography variant="h5" component="div">
                Lizard
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={5}>
        <Card
          sx={{
            borderRadius: "8px",
          }}
        >
          <CardContent>
            <img
              src={Skyfall}
              alt="Skyfall"
              style={{
                objectFit: "contain",
                width: "100%",
                borderRadius: "8px 8px 0 0",
              }}
            />
            <Stack sx={{ padding: "16px 16px 0 16px" }}>
              <Typography variant="h5" component="div">
                Lizard
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={5}>
        <Card
          sx={{
            borderRadius: "8px",
          }}
        >
          <CardContent>
            <img
              src={Skyfall}
              alt="Skyfall"
              style={{
                objectFit: "contain",
                width: "100%",
                borderRadius: "8px 8px 0 0",
              }}
            />
            <Stack sx={{ padding: "16px 16px 0 16px" }}>
              <Typography variant="h5" component="div">
                Lizard
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={5}>
        <Card
          sx={{
            borderRadius: "8px",
          }}
        >
          <CardContent>
            <img
              src={Skyfall}
              alt="Skyfall"
              style={{
                objectFit: "contain",
                width: "100%",
                borderRadius: "8px 8px 0 0",
              }}
            />
            <Stack sx={{ padding: "16px 16px 0 16px" }}>
              <Typography variant="h5" component="div">
                Lizard
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={5}>
        <Card
          sx={{
            borderRadius: "8px",
          }}
        >
          <CardContent>
            <img
              src={Skyfall}
              alt="Skyfall"
              style={{
                objectFit: "contain",
                width: "100%",
                borderRadius: "8px 8px 0 0",
              }}
            />
            <Stack sx={{ padding: "16px 16px 0 16px" }}>
              <Typography variant="h5" component="div">
                Lizard
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={5}>
        <Card
          sx={{
            borderRadius: "8px",
          }}
        >
          <CardContent>
            <img
              src={Skyfall}
              alt="Skyfall"
              style={{
                objectFit: "contain",
                width: "100%",
                borderRadius: "8px 8px 0 0",
              }}
            />
            <Stack sx={{ padding: "16px 16px 0 16px" }}>
              <Typography variant="h5" component="div">
                Lizard
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
