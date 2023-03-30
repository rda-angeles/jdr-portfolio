import React from "react";
import CivilSVG from "../../assets/civil-svg.svg";
import MySelf from "../../assets/jdr.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "../../stylesheets/hero.scss";
import Socials from "../UI/Socials";
const Hero = () => {
  return (
    <div
      className="h-screen py-[7rem] flex items-center hero-section relative"
      id="hero"
    >
      {/* Contents */}
      <div className="container mx-auto grid lg:grid-cols-2 place-items-center  text-center lg:text-left lg:px-0">
        {/* Contents */}
        <div className="max-w-lg px-1">
          <h4 className="mb-[-1rem]">Hello, I am</h4>
          <h1 className="max-w-md lg:max-w-none">
            <span className="text-c-primary font-semibold">Justine</span> Ruzzel
            Delos Reyes.
          </h1>
          <h4>A Civil Engineer</h4>
          <div className="mt-5 mb-2">
            <Socials />
          </div>

          <div className="absolute bottom-5 left-[50%] translate-x-[-50%]">
            <a href="#about">
              <ArrowForwardIosIcon
                sx={{
                  transform: "rotate(90deg)",
                  fontSize: "2.5rem",
                }}
              />
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="img-wrapper max-w-[35rem] hidden lg:block  ">
          <img src={CivilSVG} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
