import React from "react";
import data from './works.json'
import Slider from "./Slider";

function Projects() {
  return (
    <>
      <div className="bg-gray-950 w-full">
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div className="w-full lg:w-5/12 flex flex-col justify-center">
              <h2
                id="works"
                className="text-3xl lg:text-4xl font-bold leading-9 text-gray-200 pb-4 text-center"
              >
                Works
              </h2>
              <p className="font-normal text-base leading-6 text-gray-300 text-center mb-2">
                Here are some of my works! <br />
                Swipe to see all the jobs. <br />
If you click on each of them you can get more information.
              </p>

              <Slider works={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
