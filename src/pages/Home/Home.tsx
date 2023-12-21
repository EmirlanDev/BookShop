import React from "react";
import Books from "./Books/Books";
import Genres from "./Genres/Genres";
import HomeHero from "./HomeHero/HomeHero";
import NewBooks from "./NewBooks/NewBooks";

const Home: React.FC = () => {
  return (
    <div>
      <HomeHero />
      <Genres />
      <NewBooks />
      <Books />
    </div>
  );
};

export default Home;
