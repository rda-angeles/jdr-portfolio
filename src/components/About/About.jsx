import React from "react";
import Myself from "../../assets/jdr.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import DownloadIcon from "@mui/icons-material/Download";
import Button from "@mui/material/Button";
import Certificates from "../UI/Certificates";
import CV from "../../assets/Resume.pdf";
import { certificates } from "../../data";
const About = () => {
  return (
    <div
      className=" about-section px-4 pb-[5rem] lg:px-0  w-full bg-c-secondary text-white"
      id="about"
    >
      <div className="content grid place-items-center  container mx-auto lg:grid-cols-2">
        {/* Image */}
        <div className="img-wrapper max-w-md ">
          <img src={Myself} alt="" className="" />
        </div>

        {/* Profile */}
        <div className="text-justify mt-8 lg:mt-0">
          <h1 className="font-f-secondary font-bold mb-4 text-center text-5xl lg:text-left">
            About me.
          </h1>
          <p className="text-sm leading-[1.5rem]">
            I am newly graduated from Civil Engineer with my hardworking and
            passionate characteristics towards to my future job. Willing to
            serve with dedication to the assigned work. Possesses good work
            ethics and very flexible and versatile to work.
          </p>

          <div className="text-center lg:text-left">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#cf0a0a",
                marginTop: "1rem",
                color: "white",
                ":hover": {
                  backgroundColor: "#dc5f00",
                },
              }}
            >
              <a href={CV} download="Angeles_CV">
                Download CV
                <DownloadIcon />
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div className="text-center max-w-2xl mx-auto mb-10 section-title mt-12">
        <h1 className="uppercase mb-3 font-bold leading-[3.5rem] relative">
          Certifications
        </h1>
      </div>
      <div className="mt-10 container mx-auto">
        <Splide
          options={{
            focus: "center",
            arrows: true,
            pagination: false,
            drag: "free",
            perPage: 3,
            gap: "1rem",
            breakpoints: {
              935: {
                perPage: 1,
                perMove: 1,
                arrows: false,
                pagination: true,
              },
              1200: {
                perPage: 2,
                perMove: 2,
              },
            },
          }}
        >
          {certificates.map((certificate) => (
            <SplideSlide>
              <Certificates key={certificate.id} certificate={certificate} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default About;
