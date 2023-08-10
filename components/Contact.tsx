import React from 'react'

function Contact() {
  return (
    <>
    <div className='bg-slate-700 w-full'>
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h2
            id="contact"
            className="text-3xl lg:text-4xl font-bold leading-9 text-gray-200 pb-4"
          >
            Contact Me!
          </h2>
          <p className="font-normal text-base leading-6 text-gray-300 ">
            Hi! I'm Frank Santos.
          </p>
          <p className="font-normal text-base leading-6 text-gray-300 ">
            I am a passionate Web/App Full-Stack developer who enjoys creating
            websites and mobile applications with personality and style. My
            workflow focuses on achieving an attractive and satisfying user
            experience, which is why I enjoy both design (UX/UI) and programming
            (Front-End/Back-End).
          </p>
          <br />
          <p className="font-normal text-base leading-6 text-gray-300 ">
            My experience in NextJS (React), Vue, Laravel, and Java, as well as
            SQL and MongoDB databases, enables me to carry out projects from the
            conception of the idea to its launch.
          </p>
        </div>
        <div className="w-full lg:w-8/12 ">
          <img
            className="w-full h-full rounded-md"
            src="/aboutpic.jpg"
            alt="A group of People"
          />
          <p className="text-gray-300 text-center text-sm">
            Me visiting the Konami offices in Ariake, Tokyo.
          </p>
        </div>
      </div>

    </div>
    </div>
    </>
  )
}

export default Contact