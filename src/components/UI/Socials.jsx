import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from '@mui/icons-material/Instagram';
import { motion } from "framer-motion";

const Socials = () => {
  const socials = [
    {
      id: 1,
      icon: <FacebookIcon sx={{ fontSize: "1.7rem" }} />,
      path: "https://www.facebook.com/jruzzz/",
    },
    {
      id: 2,
      icon: <InstagramIcon sx={{ fontSize: "1.7rem" }} />,
      path: "https://www.instagram.com/jruzzzzz/",
    },
    {
      id: 3,
      icon: <LinkedInIcon sx={{ fontSize: "1.7rem" }} />,
      path: "https://www.linkedin.com/in/justine-delos-reyes-611488257/",
    },
  ];
  return (
    <div className="grid grid-cols-3 max-w-[10rem] mx-auto lg:mx-0">
      {socials.map((social) => (
        <motion.div whileHover={{ scale: 1.2 }} key={social.id}>
          <a href={social.path} target="_blank">
            {social.icon}
          </a>
        </motion.div>
      ))}
    </div>
  );
};

export default Socials;
