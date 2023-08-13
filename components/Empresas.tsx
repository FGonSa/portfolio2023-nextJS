import React from "react";
import SliderCompanies from "./SliderCompanies";


function Empresas() {
  return (
    <>
      <div className="bg-white w-full">
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div className="w-full lg:w-5/12 flex flex-col justify-center">
              <h2
                
                className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4 text-center"
              >
                Companies
              </h2>
              <p className="font-normal text-base leading-6 text-gray-700 text-center mb-2">
              I have developed applications and websites for conferences sponsored by some of the following companies:
              </p>

              <div>
                <SliderCompanies />
              </div>
              <p className="font-normal text-base leading-6 text-gray-700 text-center my-4">And many more!</p>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Empresas;
