import React from "react";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SkillsCard from "../UI/SkillsCard";
const Skills = () => {
  return (
    <motion.div className=" w-full pt-[5rem] pb-[2rem] " id="skills">
      <div className="text-center max-w-2xl mx-auto mb-10 section-title">
        <h3 className="lowercase opacity-[.5]">What I can do?</h3>
        <h1 className="uppercase mb-3 font-bold leading-[3.5rem] relative">
          Skills
        </h1>
      </div>
      <div className="mt-12">
        <SkillsCard />
      </div>
    
    </motion.div>
  );
};

export default Skills;
