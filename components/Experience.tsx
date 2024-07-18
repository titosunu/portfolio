import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/Moving-Border";

const Experience = () => {
  return (
    <div className="py-20" id="experience">
      <h1 className="heading">
        My
        <span className="text-blue-200"> Experience</span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((item) => (
          <Button
            key={item.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(18, 18, 18)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={item.thumbnail}
                alt={item.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {item.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {item.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
