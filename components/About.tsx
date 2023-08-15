"use client"
import React from "react";
import CarrouselAbout from "./CarrouselAbout";
import {motion} from "framer-motion"
import Image from "next/image";

const About = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    //   viewport={{ once: true }}
    transition={{ duration: 3 }}
    
  >
    
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h2
            id="about"
            className="text-3xl lg:text-4xl font-bold leading-9 text-gray-200 pb-4"
          >
            F5antos
          </h2>
          <p className="font-normal text-base leading-6 text-gray-300 ">
            Hi! I&apos;m Frank Santos.
          </p>
          <p className="font-normal text-base leading-6 text-gray-300 ">
            I am a passionate Web/App Full-Stack developer who enjoys creating
            websites and mobile applications with personality and style. My
            workflow focuses on achieving an attractive and satisfying user
            experience, which is why I enjoy both design (UX/UI) and programming
            (Front-End/Back-End).
          </p>
          <br />
          <p className="font-normal text-base leading-6 text-gray-300 pb-2">
            My experience in NextJS (React), Vue, Laravel, and Java, as well as
            SQL and MongoDB databases, enables me to carry out projects from the
            conception of the idea to its launch.
          </p>
                    <p className="font-normal text-base leading-6 text-gray-300 py-2">
                    My main tools are NextJS, React, and the MERN Stack.
For mobile app development I use React Native.
          </p>
        </div>
        <div className="w-full lg:w-8/12 ">
          <Image
            className="w-full h-full rounded-md"
            src="/aboutpic.jpg"
            alt="A group of People"
          />
          <p className="text-gray-300 text-center text-sm">
            Me visiting the Konami offices in Ariake, Tokyo.
          </p>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <p className="font-normal text-base leading-6 text-gray-300 ">
            In addition to designing, programming and maintaining different
            types of websites and mobile applications, I have also traveled to
            various congresses around the world to ensure the proper functioning
            of their applications and see live how the public interacts with the
            final product.
          </p>
        </div>

        {/*Fotos */}
        <div className=" hidden w-full md:block lg:w-8/12 lg:pt-8">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <Image
                className="md:block hidden rounded-md"
                src="/pic1.png"
                alt="Working on a train"
              />
              <Image
                className="md:hidden block rounded-md"
                src="/pic1.png"
                alt="Working on a train"
              />
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <Image
                className="md:block hidden rounded-md"
                src="/pic2.png"
                alt="Working in a congress avenue"
              />
              <Image
                className="md:hidden block rounded-md"
                src="/pic2.png"
                alt="Working in a congress avenue"
              />
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <Image
                className="md:block hidden rounded-md"
                src="/pic3.png"
                alt="Working online in different devices"
              />
              <Image
                className="md:hidden block rounded-md"
                src="/pic3.png"
                alt="Working online in different devices"
              />
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <Image
                className="md:block hidden rounded-md"
                src="/pic5.png"
                alt="Talk about an app"
              />
              <Image
                className="md:hidden block rounded-md"
                src="/pic5.png"
                alt="Talk about an app"
              />
            </div>
          </div>
        </div>
        <CarrouselAbout />
      </div>
    </div>
    </motion.div>
  );
};

export default About;
