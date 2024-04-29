import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import Dogs from "../../../../../public/dogs.png";
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
              src={Dogs}
              alt="Dogs - Social Media for Pets"
              style={{
                objectFit: "contain",
                width: "100%",
                borderRadius: "8px 8px 0 0",
              }}
            />
            <Stack sx={{ padding: "16px 16px 0 16px" }}>
              <Typography variant="h5" component="div" marginBottom="8px">
                Dogs | The Social Media For Pets
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                This is a project for a social network for pets, where pet
                owners can create a profile for their pets and interact with
                other pet owners. It was developed using ReactJS, JavaScript,
                Node.js, CSS modules and other technologies. It's one of the
                most complex and complete projects I've ever done, and I was
                able to learn about using and integrating APIs, authenticating
                users, creating comments and many other features that we deal
                with in day-to-day development.
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