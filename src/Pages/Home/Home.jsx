import React from "react";
import HomeHero from "../../componets/HomeHero/HomeHero";
import HomeFuturis from "../../componets/HomeFuturis/HomeFuturis";
import HomeSolution from "../../componets/HomeSolution/HomeSolution";
import HomeFaq from "../../componets/HomeFaq/HomeFaq";
import HomeReview from "../../componets/HomeReview/HomeReview";

const Home = () => {
  return (
    <>
      <main>
        <HomeHero />
        <HomeFuturis />
        <HomeSolution />
        <HomeFaq />
        <HomeReview />
      </main>
    </>
  );
};

export default Home;
