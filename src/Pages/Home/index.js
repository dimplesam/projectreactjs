import React from "react";
import HomeComponent from "../../Components/Home";

const Home = () => {
  const name = "Aditya";
  return (
    <div>
      <HomeComponent name={name} num={10} />
    </div>
  );
};

export default Home;
