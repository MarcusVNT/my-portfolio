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

const cardsData: CardInfo[] = [
  {
    title: "Dogs - Social Media for Pets",
    image: Dogs,
    description: `This is a project for a social media for pets, where pet owners
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
];
