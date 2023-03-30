import React from "react";

import { motion } from "framer-motion";
import { skills } from "../../data";

const SkillsCard = () => {
    return (
        <div className="grid place-items-center lg:grid-cols-2 gap-9 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <div key={skill.id}>
              <div className="card-content flex flex-col items-center text-center">
                <div className="img-wrapper max-w-[10rem]">
                    <img src={skill.icon} alt="" />
                </div>
                <h2 className="text-3xl mb-2 mt-4">{skill.skill}</h2>
                <p className="max-w-sm">{skill.desc}</p>
              </div>
            </div>
          ))}
        </div>
      );
};

export default SkillsCard;