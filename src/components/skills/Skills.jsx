import React from "react";
import ProgressBar from "../../chip/ProgressBar";
import SkillBox from "../../chip/SkillBox";

import { IoLogoCss3 } from "react-icons/io";

import { SiJavascript, SiMongodb, SiExpress } from "react-icons/si";
import { GrCode } from "react-icons/gr";
import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";

const Skills = ({ darkMode }) => {
  return (
    <div id="skills">
      <div className=" container m-auto  mt-16">
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
            My Skills
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </div>
        <div className="flex md:flex-col ">
          <div className="left flex-1 w-full">
            <p
              data-aos="fade-up"
              className=" text-gray-700 font-medium w-[100%]"
            >
              Here are my skills.
            </p>
            {/* left box */}
            <div
              data-aos="zoom-in"
              className="progress flex items-center h-[100%] justify-end md:justify-center"
            >
              <div className=" flex flex-col gap-6  w-3/4  my-5 md:w-[90%]">
                <ProgressBar logo={<GrCode />} name={"Go"} value={45} />
                <ProgressBar logo={<IoLogoCss3 />} name={"CSS"} value={88} />
                <ProgressBar
                  logo={<SiJavascript />}
                  name={"Javascript"}
                  value={80}
                />
                <ProgressBar logo={<FaReact />} name={"React Js"} value={80} />
                <ProgressBar
                  logo={<IoLogoNodejs />}
                  name={"Node Js"}
                  value={80}
                />
              </div>
            </div>
          </div>
          {/* right box */}
          <div className="right relative flex-1 flex flex-wrap p-5 gap-10 items-center justify-center sm:w-full">
            <div className="first2 flex flex-col gap-10">
              <SkillBox
                logo={<SiMongodb />}
                black={"white"}
                white={"black"}
                skill={"MongoDB"}
              />
              <SkillBox
                className=""
                logo={
                  <SiNextdotjs className=" text-white bg-black rounded-full h-fit border-white overflow-hidden" />
                }
                black={"white"}
                white={"black"}
                skill={"NextJs"}
              />
            </div>

            <div className="last2 flex flex-col gap-10">
              <SkillBox
                logo={<SiExpress />}
                black={"black"}
                white={"white"}
                skill={"Express Js"}
              />
              <SkillBox
                className=""
                logo={<GrCode />}
                black={"black"}
                white={"white"}
                skill={"Java"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
