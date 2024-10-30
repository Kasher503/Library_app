"use client";
import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Laptop from "./components/Laptop";
import Hero from "./components/Hero";
import HomePage from "./pages/HomePage";
import Footertop from "./components/Footer/Footertop"
import Timelinepara from "./components/Timelinepara"

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleVideoEnd = () => {
    console.log("Video has ended!");
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Hero onVideoEnd={handleVideoEnd} />
      <div className="bg-DarkColor">
      <Laptop />
      <Timelinepara />
      <HomePage />
      <Footertop />
      </div>
    </>
  );
}
