import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import Dogs from "../../../../../public/dogs.png";
import AudioNotes from "../../../../../public/audioNotes.png";
import FancyWatches from "../../../../../public/fancyWatches.png";
import LojaMaster from "../../../../../public/lojaMaster.png";
import BMI from "../../../../../public/bmiFlutter.png";
import Skyfall from "../../../../../public/skyfall.jpg";

export default function Cards() {
  return (
    <Grid container gap="48px" justifyContent="center">
      <Grid item xs={5}>
        <Card
          sx={{
            borderRadius: "8px",
            height: "500px",
          }}
        >
          <CardContent>
            {/* <Stack maxHeight="600px"> */}
            <img
              src={Dogs}
              alt="Dogs - Social Media for Pets"
              style={{
                objectFit: "contain",
                width: "100%",
                maxHeight: "250px",
                borderRadius: "8px 8px 0 0",
              }}
            />
            {/* </Stack> */}
            <Stack sx={{ padding: "16px 16px 0 16px" }}>
              <Typography variant="h5" component="div" marginBottom="8px">
                Dogs | The Social Media For Pets
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                This is a project for a social media for pets, where pet owners
                can create a profile for their pets and interact with other pet
                owners. It was developed using ReactJS, JavaScript, Node.js, CSS
                modules and other technologies. It's one of the most complex and
                complete projects I've ever done, and I was able to learn about
                using and integrating APIs, authenticating users, creating
                comments and many other features that we deal with in day-to-day
                development.
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={5}>
        <Card
          sx={{
            borderRadius: "8px",
            height: "500px",
          }}
        >
          <CardContent>
            <img
              src={AudioNotes}
              alt="AudioNotes"
              style={{
                objectFit: "contain",
                width: "100%",
                maxHeight: "250px",
                borderRadius: "8px 8px 0 0",
              }}
            />
            <Stack sx={{ padding: "16px 16px 0 16px" }}>
              <Typography variant="h5" component="div" marginBottom="8px">
                AudioNotes
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                AudioNotes is a project that I developed to practice my skills
                and learn more about React.JS, Typescript and some libery like
                Radix and other ones. The Project was developed on the Next
                Level Week #5 from Rocketseat. AudioNotes is a simple web
                aplication that you can create notes using your keyboard or your
                voice and visualize it in a list of cards.
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={5}>
        <Card
          sx={{
            borderRadius: "8px",
            height: "500px",
          }}
        >
          <CardContent>
            <img
              src={FancyWatches}
              alt="Fancy Watches"
              style={{
                objectFit: "contain",
                width: "100%",
                maxHeight: "250px",
                borderRadius: "8px 8px 0 0",
              }}
            />
            <Stack sx={{ padding: "16px 16px 0 16px" }}>
              <Typography variant="h5" component="div" marginBottom="8px">
                Fancy Watches
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Fancy Watches is a project that I developed to practice my
                skills and learn more about HTML, CSS and just a little of
                Javascript. The project was made 100% by me, and I was able to
                learn a lot about CSS Flexbox, CSS Grid, and other CSS
                properties. Fancy Watches is about a fancy store that sells
                watches, and I was able to create a responsive layout for it.
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={5}>
        <Card
          sx={{
            borderRadius: "8px",
            height: "500px",
          }}
        >
          <CardContent>
            <img
              src={LojaMaster}
              alt="Loja Master"
              style={{
                objectFit: "contain",
                width: "100%",
                maxHeight: "250px",
                borderRadius: "8px 8px 0 0",
              }}
            />
            <Stack sx={{ padding: "16px 16px 0 16px" }}>
              <Typography variant="h5" component="div" marginBottom="8px">
                Loja Master
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Loja Master is a project that I developed to practice and learn
                about how navegation bettween pages works in a website that use
                Node.js and React.JS and how to use the React Router Dom. The
                project was made 100% by me, and I was able to learn a lot about
                how to create a simple website using React.JS and Node.JS. Loja
                Master is about a store that sells tech products, and I was able
                to create a responsive layout for it.
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={5}>
        <Card
          sx={{
            borderRadius: "8px",
            height: "500px",
          }}
        >
          <CardContent>
            <img
              src={BMI}
              alt="BMI Calculator"
              style={{
                objectFit: "contain",
                width: "100%",
                maxHeight: "250px",
                borderRadius: "8px 8px 0 0",
              }}
            />
            <Stack sx={{ padding: "16px 16px 0 16px" }}>
              <Typography variant="h5" component="div">
                BMI Calculator
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                BMI Calculator is a mobile project that I developed in
                Dart/Flutter. The project was made 100% by me. The BMI
                Calculator is a simple app that calculates the body mass index
                of a person. The app has a simple and clean layout and was
                developed to practice my skills in Dart/Flutter during the
                Santander Bootcamp, where I was one of the top 25 participants
                out of more than 3000 people. The calculator makes the math and
                shows the result in a list and save it in the local storage. The
                user can see if he is underweight, normal weight, overweight or
                obese.
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={5}>
        <Card
          sx={{
            borderRadius: "8px",
            height: "500px",
          }}
        >
          <CardContent>
            <img
              src={Skyfall}
              alt="Skyfall"
              style={{
                objectFit: "contain",
                width: "100%",
                maxHeight: "250px",
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
