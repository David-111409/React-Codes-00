import { useEffect, useState, useRef } from "react";
import Navbar from "./components/Navbar/Navbar";
import Background from "./components/Background/Background";
import Hero from "./components/Hero/Hero";
const heroData = [
  {
    text1: "Dive into",
    text2: "what you love",
  },
  {
    text1: "Indulge",
    text2: "your passions",
  },
  {
    text1: "Give in to",
    text2: "your passions",
  },
];

function App() {
  const [heroCount, setHeroCount] = useState(0);
  const [playVideo, setPlayVideo] = useState(false);
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(true);
  };
  const handleHeroCount = () => {
    if (playVideo) {
      return;
    }
    setHeroCount((prev) => (prev === 2 ? 0 : prev + 1));
  };
  const handlePlayVideo = () => {
    setPlayVideo(!playVideo);
  };
  const stopNavigation = () => {
    setNav(!nav);
  };
  useEffect(() => {
    if (playVideo || nav) return;

    const interval = setInterval(() => {
      setHeroCount((prev) => (prev === 2 ? 0 : prev + 1));
    }, 1000);

    return () => clearInterval(interval);
  }, [playVideo, nav]);

  return (
    <>
      <Background playVideo={playVideo} heroCount={heroCount} />
      <Navbar />
      <Hero
        playState={playVideo}
        setPlayState={handlePlayVideo}
        heroData={heroData}
        heroCount={heroCount}
        setHeroCount={handleHeroCount}
        stopNavigation={stopNavigation}
        nav={nav}
        handleNav={handleNav}
      />
    </>
  );
}

export default App;
