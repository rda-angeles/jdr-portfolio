import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
// import ContactImg from "../assets/contact.jpg";
// import Socials from "../components/UI/Socials";

const Contact = () => {
  const socials = [
    {
      id: 1,
      name: "Facebook",
      icon: (
        <FacebookIcon
          sx={{ fontSize: "1.5rem", color: "#dc5f00", marginRight: ".2rem" }}
        />
      ),
      path: "https://www.facebook.com/jruzzz/",
    },
    {
      id: 2,
      name: "Instagram",
      icon: (
        <InstagramIcon
          sx={{ fontSize: "1.5rem", color: "#dc5f00", marginRight: ".2rem" }}
        />
      ),
      path: "https://www.instagram.com/jruzzzzz/",
    },
    {
      id: 3,
      name: "LinkedIn",
      icon: (
        <LinkedInIcon
          sx={{ fontSize: "1.5rem", color: "#dc5f00", marginRight: ".2rem" }}
        />
      ),
      path: "https://www.linkedin.com/in/justine-delos-reyes-611488257/",
    },
  ];
  return (
    <motion.div
      className=" flex flex-col items-center justify-center  py-[5rem] px-5 lg:px-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="contacts"
      exit={{
        opacity: 0,
        transition: { duration: 0.6, ease: "easeInOut" },
      }}
    >
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="uppercase mb-12 font-bold leading-[3.5rem]">
          How you can reach me?
        </h1>
        {/* <p className="mb-6 ">Contact</p> */}
      </div>

      <div className="container mx-auto grid place-items-center lg:grid-cols-2 gap-x-6">
        {/* Contact Content */}

        <div className="text-center lg:text-left">
          <p className="mb-5 text-xl">
            <span className="font-f-secondary font-bold mr-1 flex-initial items-center">
              <LocationOnIcon
                sx={{
                  fontSize: "1.5rem",
                  marginRight: ".2rem",
                  color: "#dc5f00",
                }}
              />
              Location:
            </span>
            Cavite, Philippines
          </p>

          <p className="my-10 text-xl">
            <span className="font-f-secondary font-bold mr-1 flex-initial items-center">
              <LocalPhoneIcon
                sx={{
                  fontSize: "1.5rem",
                  marginRight: ".2rem",
                  color: "#dc5f00",
                }}
              />
              Phone:
            </span>
            <a href="tel:+(+63)995 458 5907">(+63)995 458 5907</a>
          </p>

          <p className="my-10 text-xl">
            <span className="font-f-secondary font-bold mr-1 flex-initial items-center">
              <LocalPhoneIcon
                sx={{
                  fontSize: "1.5rem",
                  marginRight: ".2rem",
                  color: "#dc5f00",
                }}
              />
              Email:
            </span>
            <a href="mailto: raedominique.angeles@gmail.com">
              justinedreyes0426@gmail.com
            </a>
          </p>
        </div>
        <div className="text-center lg:text-left">
          {socials.map((social) => (
            <p className="mb-10 text-xl">
              <span className="font-f-secondary font-bold mr-1 flex-initial items-center">
                {social.icon}
                {social.name}:
              </span>
              <a
                href={social.path}
                target="_blank"
                className="font-f-secondary text-[1rem]"
              >
                {social.path}
              </a>
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
