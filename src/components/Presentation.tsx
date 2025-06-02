import React, { useState, useEffect } from "react";
import { slides } from "@/data/slides";
import Slide from "./Slide";
import SlideNavigation from "./SlideNavigation";
import ProgressBar from "./ProgressBar";
import PresentationHeader from "./PresentationHeader";

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideStatus, setSlideStatus] = useState("current");
  const totalSlides = slides.length;

  const goToNextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setSlideStatus("exit");
      setTimeout(() => {
        setCurrentSlide((prev) => prev + 1);
        setSlideStatus("enter");
        setTimeout(() => {
          setSlideStatus("current");
        }, 100);
      }, 300);
    }
  };

  const goToPrevSlide = () => {
    if (currentSlide > 0) {
      setSlideStatus("exit");
      setTimeout(() => {
        setCurrentSlide((prev) => prev - 1);
        setSlideStatus("enter");
        setTimeout(() => {
          setSlideStatus("current");
        }, 100);
      }, 300);
    }
  };

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        goToNextSlide();
      } else if (e.key === "ArrowLeft") {
        goToPrevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentSlide]);

  return (
    <div className="h-screen flex flex-col">
      {/* Presentation header with controls */}
      <PresentationHeader
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onPrev={goToPrevSlide}
        onNext={goToNextSlide}
      />

      {/* Progress bar */}
      <ProgressBar
        current={currentSlide + 1}
        total={totalSlides}
        animated={true}
      />

      {/* Presentation content */}
      <div className="relative flex-grow overflow-hidden">
        {/* Navigation arrows for larger screens */}
        <SlideNavigation
          currentSlide={currentSlide}
          totalSlides={totalSlides}
          onPrev={goToPrevSlide}
          onNext={goToNextSlide}
        />

        {/* Current slide */}
        <Slide
          content={slides[currentSlide].content}
          background={slides[currentSlide].background}
          status={slideStatus as "enter" | "current" | "exit"}
        />
      </div>
    </div>
  );
};

export default Presentation;
