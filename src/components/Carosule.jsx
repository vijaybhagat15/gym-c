import Slide1 from "./slides/Slide1";
import Slide2 from "./slides/Slide2";
import Slide3 from "../components/slides/Slide3";
import { useState, useEffect } from "react";

const Carousel = () => {
  // State to track the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaderWidth, setLoaderWidth] = useState(0);

  // Array of slides
  const slides = [<Slide1 key="slide1" />, <Slide2 key="slide2" />, <Slide3 key="slide3" />];

  // Automatically navigate to the next slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);

  // Reset loader on slide change
  useEffect(() => {
    setLoaderWidth(0);

    const loaderInterval = setInterval(() => {
      setLoaderWidth((prev) => {
        if (prev >= 100) return 0;
        return prev + 1; // Increment loader width
      });
    }, 40); // Adjust speed (100 steps over 4 seconds)

    return () => clearInterval(loaderInterval); // Cleanup on unmount
  }, [currentSlide]);

  // Function to navigate to the next slide manually
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Function to navigate to the previous slide manually
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="intro-container relative overflow-hidden border-b-2 border-white">
      {/* Slides */}
      <div
        className="slides flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 h-full">
            {slide}
          </div>
        ))}
      </div>

      {/* Loader */}
      <div className="bg-black border-t-2 border-gray-800">
        <div className="relative mx-auto h-2 w-full bg-gray-600">
          <div
            className="absolute h-2 bg-black transition-all"
            style={{
              width: `${loaderWidth}%`,
            }}
          ></div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute sm:left-4 left-1 top-1/2 transform -translate-y-1/2 bg-transparent border-2 border-white font-bold text-white p-2 rounded-full"
        onClick={prevSlide}
      >
        &lt;
      </button>
      <button
        className="absolute sm:right-4 right-1 top-1/2 transform -translate-y-1/2 bg-transparent border-2 border-white font-bold text-white p-2 rounded-full"
        onClick={nextSlide}
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
