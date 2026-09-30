import restaurantImg from "../assets/restaurant.jpg";
import safetyAppImg from "../assets/safety-app.jpg";
import walletWiseImg from "../assets/wallet-wise.jpg";

export const projects = [
  {
    id: 1,
    title: "Restaurant",
    description: "A React Restaurant Websites.",
    link: "https://github.com/CHAANIEE/REACT-JS-RESTAURANT.git",
    status: "done",
    image: restaurantImg,
  },
  {
    id: 2,
    title: "Safety App",
    description: "A Django project, to know how safe you are.",
    link: "https://github.com/CHAANIEE/SAFETY-APP.git",
    status: "done",
    image: safetyAppImg,
  },
  {
    id: 3,
    title: "Wallet Wise",
    description: "A Django, Money Tracker system.",
    link: "https://github.com/CHAANIEE/DJANGO-PROJECT.git",
    status: "done",
    image: walletWiseImg,
  },
  {
    id: 4,
    title: "Hospital Website",
    description: "Work in progress.",
    link: null,
    status: "in-progress",
    image: null,
  },
  {
    id: 5,
    title: "Financial Management System",
    description: "Work in progress.",
    link: null,
    status: "in-progress",
    image: null,
  },
];

export const skills = {
  Frontend: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "HTML/CSS"],
  Backend: ["Node.js", "Python", "SQL", "PHP", "Laravel"],
  "Tools & Others": ["Git", "VS Code", "Figma"],
};