import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import Header from "./Header";
import Footer from "./Footer";

const projects = [
  {
    id: 1,
    title: "Travel List",
    description:
      "It's Like a TO-DO app you can list what are the items you need pack for trip and you can note what all you already packed and how many you still need to pack.",
    imageUrl:
      "https://tse1.mm.bing.net/th?id=OIG3.ZihbSC4KF9Fd_mJx6KkQ&pid=ImgGn",
    link: "https://spudaykiran.github.io/travel-list/",
  },
  {
    id: 2,
    title: "usePopcorn",
    description:
      "It is a like movie platform you can search a movie and add to your watchlist and you can give rating to the movie. you can watch the cast of the movie also",
    imageUrl:
      "https://tse3.mm.bing.net/th?id=OIG1.otIGW0Ve9OQn0r2O0MnL&pid=ImgGn",
    link: "https://spudaykiran.github.io/use-popcorn/",
  },
  {
    id: 3,
    title: "Quiz Application",
    description:
      "It is a Quiz application where you can conduct quiz for the students and a timer for the quiz for each question you can set time what ever you want.",
    imageUrl: "https://tinyurl.com/quiz-app-photo",
    link: "https://spudaykiran.github.io/react-quiz-own",
  },
  {
    id: 4,
    title: "Eat-n-Split",
    description:
      "It is a app where you split the expenses between your friends and the friend will have a profile and who is paying the bill and split according to it.",
    imageUrl: "https://rb.gy/t34408",
    link: "https://spudaykiran.github.io/eat-n-split/",
  },
  {
    id: 5,
    title: "Smart Bin",
    description:
      "It is an IOT Project designed in my college. The dustbin contains features like opening and closing automatically and it is also have RFID feature like whenever the dustbin is full the municipality person needs to use id card to open.",
    imageUrl: "https://rb.gy/tfbqlr",
    link: "https://github.com/spudaykiran/SmartBin/blob/main/P-1.ino",
  },
  {
    id: 6,
    title: "Classy-Weather",
    description:
      "It is a weather app you can search about the weather of particular location it will next 7 days weather report in the particular place you asked for.",
    imageUrl: "https://rb.gy/hyoqe8",
    link: "https://spudaykiran.github.io/classy-weather/",
  },
  {
    id: 7,
    title: "WorldWise",
    description:
      "It is a application where you can take notes of your trip about the trip, by selecting the particular location of the trip in the map and you can add that location into your visited lists.",
    imageUrl: "https://rb.gy/vam1hv",
    link: "https://github.com/spudaykiran/worldwise",
  },
  // Add more projects here
];

function Projects() {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <section className="projects-section">
        <h2>Projects</h2>
        <div className="projects-container" ref={containerRef}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <button
          className="carousel-button carousel-button-left"
          onClick={scrollLeft}
        >
          &#8249;
        </button>
        <button
          className="carousel-button carousel-button-right"
          onClick={scrollRight}
        >
          &#8250;
        </button>
      </section>
      <Footer />
    </>
  );
}

export default Projects;
