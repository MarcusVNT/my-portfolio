import RDP from "../../../../../public/rainha.png";
import MyWeather from "../../../../../public/weather.png";
import Dogs from "../../../../../public/dogs.png";
import AudioNotes from "../../../../../public/audioNotes.png";
import FancyWatches from "../../../../../public/fancyWatches.png";
import LojaMaster from "../../../../../public/lojaMaster.png";
import BMI from "../../../../../public/bmiFlutter.png";
import BuscaCep from "../../../../../public/buscaCep.png";

export interface CardInfo {
  title: string;
  description: string;
  image: string;
  link: string;
}

export const cardsData: CardInfo[] = [
  {
    title: "Rainha das Perigrinações",
    image: RDP,
    description: `Rainha das Perigrinações is a project that I developed to be a christian travel agency. I worked on this project as a freelancer, and it was a great opportunity to
    apply my skills in Next.js, ReactJS, TypeScript, Tailwind CSS, Rest API and other technologies. I learned to work with some tools like Insominia to test the API. I worked on integration with the API, creating the pages, user authetication and implementing the design. The project is a complete travel agency website that allows users to search for trips, book them, and manage their bookings. Unfortunately, I don't have access to the project anymore, but it was a great experience to work on it.`,
    link: "https://github.com/MarcusVNT",
  },
  {
    title: "My Weather",
    image: MyWeather,
    description: `This project is a weather application that I developed to
    practice my skills in Next.js, ReactJS, TypeScript, Material UI, Rest API
    and other technologies. We can search for the weather in any
    city in the world, and it will show us the current weather with some
    details like temperature, humidity, wind speed and more. The
    application uses the WeatherAPI to get the weather data.`,
    link: "https://mv-weather.vercel.app/",
  },
  {
    title: "Dogs - Social Media for Pets",
    image: Dogs,
    description: `This project is a social media for pets, where pet owners
    can create a profile for their pets and interact with other pet
    owners. It was developed using ReactJS, JavaScript, Node.js, CSS
    modules and other technologies. It's one of the most complex and
    complete projects I've ever done, and I was able to learn about
    using and integrating APIs, authenticating users, creating
    comments and many other features that we deal with in day-to-day
    development.`,
    link: "https://dogs-marcusvnt.vercel.app/",
  },
  {
    title: "AudioNotes",
    image: AudioNotes,
    description: `AudioNotes is a project that I developed to practice my skills
    and learn more about React.JS, Typescript and some libery like
    Radix and other ones. The Project was developed on the Next
    Level Week #5 from Rocketseat. AudioNotes is a simple web
    aplication that you can create notes using your keyboard or your
    voice and visualize it in a list of cards.`,
    link: "https://audionotes-marcusvnt.vercel.app/",
  },
  {
    title: "Fancy Watches",
    image: FancyWatches,
    description: `Fancy Watches is a project that I developed to practice my
    skills and learn more about HTML, CSS and just a little of
    Javascript. The project was made 100% by me, and I was able to
    learn a lot about CSS Flexbox, CSS Grid, and other CSS
    properties. Fancy Watches is about a fancy store that sells
    watches, and I was able to create a responsive layout for it.`,
    link: "https://github.com/MarcusVNT/fancywatches.github.io.git",
  },
  {
    title: "Loja Master",
    image: LojaMaster,
    description: `Loja Master is a project that I developed to practice and learn
  about how navegation bettween pages works in a website that use
  Node.js and React.JS and how to use the React Router Dom. The
  project was made 100% by me, and I was able to learn a lot about
  how to create a simple website using React.JS and Node.JS. Loja
  Master is about a store that sells tech products, and I was able
  to create a responsive layout for it.`,
    link: "https://github.com/MarcusVNT/loja-projeto.git",
  },
  {
    title: "BMI Calculator",
    image: BMI,
    description: `BMI Calculator is a mobile project that I developed in
    Dart/Flutter. The project was made 100% by me. The BMI
    Calculator is a simple app that calculates the body mass index
    of a person. The app has a simple and clean layout and was
    developed to practice my skills in Dart/Flutter during the
    Santander Bootcamp, where I was one of the top 25 participants
    out of more than 3000 people. The calculator makes the math and
    shows the result in a list and save it in the local storage. The
    user can see if he is underweight, normal weight, overweight or
    obese.`,
    link: "https://github.com/MarcusVNT/bmi.git",
  },
  {
    title: "Busca Cep",
    image: BuscaCep,
    description: `BuscaCep is a mobile project that I developed in Dart/Flutter.
    It is a simple project with a simple design layout that I
    developed to practice my skills in Dart/Flutter. It was also
    developed during the Santander Bootcamp. You can search for a
    Brazillian zip code and the app will show you the address that
    is related to that zip code. The app uses an API to get the
    address and show it to the user in a list in outher page. It
    also saves the search in the local storage.`,
    link: "https://github.com/MarcusVNT/buscacep.git",
  },
];
