import { ReactElement } from "react";
import { SlSocialFacebook} from "react-icons/sl"
import { PiGithubLogo, PiLinkedinLogoLight, PiInstagramLogoLight } from "react-icons/pi";

interface PortfolioItem {
   id: string;
   img: string;
   title: string;
   description: string;
}

interface SocialLink  {
   name: string
   url: string
   logo : ReactElement 
}

export const portfolioItems: PortfolioItem[] = [
   {
      id: "1",
      img: "/pokemon.png",
      title: "Pokemon Information App",
      description: "A comprehensive React application that provides detailed information about various Pokemon. It utilizes the PokeAPI to fetch and display data such as Pokemon stats, abilities, and evolution chains."
   },
   {
      id: "2",
      img: "/cahkerjo.png",
      title: "Job Vacancy Website",
      description: "A dynamic job board built with React JS. It allows users to search and filter job listings, view detailed job descriptions, and apply directly through the platform. The site also includes features for employers to post new job openings."
   },
   {
      id: "3",
      img: "/bookshelf.png",
      title: "Bookshelf App",
      description: "A vanilla JavaScript application for managing a personal book collection. Users can add books, mark them as read or unread, and organize them into different categories. The app uses local storage to persist data between sessions."
   },
];

export const linkItems: SocialLink[] = [
   {
      name: 'Github',
      url: 'https://github.com/Eirfand1',
      logo : <PiGithubLogo /> 
   },
   {
      name: 'Facebook',
      url: 'https://web.facebook.com/profile.php?id=100022535239857',
      logo : <SlSocialFacebook /> 
   },
   {
      name: 'Instagram',
      url: 'https://www.instagram.com/wicis_literally/',
      logo : <PiInstagramLogoLight /> 
   },
   {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ego-irfandi-894580272',
      logo: <PiLinkedinLogoLight /> 
   }
];

export const logoItems: string[] = [
   "/JavaScript-logo.png",
   "/kinglara.png",
   "/nerd.png",
   "/ekorAngin.svg",
   "/React.webp",
   "/tor-512.webp",
   "/Tux.png",
   "/vimlogo.svg",
   "/json.png",
   "/console.png"
]
