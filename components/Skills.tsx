import React from "react";

function Skills() {
  return (
    <>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h2
              id="skills"
              className="text-3xl lg:text-4xl font-bold leading-9 text-gray-200 pb-4 text-center"
            >
              Skills
            </h2>
            <p className="font-normal text-base leading-6 text-gray-300 text-center mb-2">
              Here are some of my skills:
            </p>

            <div className="hidden md:grid grid-cols-2 md:grid-cols-4 mx-auto justify-between py-2">
              <ul className="space-y-4 text-left text-gray-400 dark:text-gray-400 mb-4">
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5 text-amber-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      // stroke-linecap="round"
                      // stroke-linejoin="round"
                      // stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span>Next JS</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5 text-amber-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      // stroke-linecap="round"
                      // stroke-linejoin="round"
                      // stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span>React</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5 text-amber-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      // stroke-linecap="round"
                      // stroke-linejoin="round"
                      // stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span>
                    Vue
                    <span className="font-semibold text-gray-900 dark:text-white"></span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5 text-amber-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      // stroke-linecap="round"
                      // stroke-linejoin="round"
                      // stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span>
                    React Native
                    <span className="font-semibold text-gray-900 dark:text-white"></span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5 text-amber-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      // stroke-linecap="round"
                      // stroke-linejoin="round"
                      // stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span>
                    PHP (Laravel)
                    <span className="font-semibold text-gray-900 dark:text-white"></span>
                  </span>
                </li>
              </ul>

              <ul className="space-y-4 text-left text-gray-400 dark:text-gray-400">
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5 text-amber-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      // stroke-linecap="round"
                      // stroke-linejoin="round"
                      // stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span>TypeScript</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5 text-amber-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      // stroke-linecap="round"
                      // stroke-linejoin="round"
                      // stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span>JavaScript</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5 text-amber-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      // stroke-linecap="round"
                      // stroke-linejoin="round"
                      // stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span>
                    Java
                    <span className="font-semibold text-gray-900 dark:text-white"></span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5 text-amber-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      // stroke-linecap="round"
                      // stroke-linejoin="round"
                      // stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span>
                    Bootstrap 5
                    <span className="font-semibold text-gray-900 dark:text-white"></span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5 text-amber-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      // stroke-linecap="round"
                      // stroke-linejoin="round"
                      // stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span>
                    Figma / Adobe XD
                    <span className="font-semibold text-gray-900 dark:text-white"></span>
                  </span>
                </li>
              </ul>

              <ul className="space-y-4 text-left text-gray-400 dark:text-gray-400 mr-5">
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5 text-amber-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      // stroke-linecap="round"
                      // stroke-linejoin="round"
                      // stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span>Tailwind CSS</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5 text-amber-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      // stroke-linecap="round"
                      // stroke-linejoin="round"
                      // stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span>MySQL</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5 text-amber-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      // stroke-linecap="round"
                      // stroke-linejoin="round"
                      // stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span>
                    Mongo DB
                    <span className="font-semibold text-gray-900 dark:text-white"></span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5 text-amber-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      // stroke-linecap="round"
                      // stroke-linejoin="round"
                      // stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span>
                    Wordpress / Joomla
                    <span className="font-semibold text-gray-900 dark:text-white"></span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5 text-amber-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      // stroke-linecap="round"
                      // stroke-linejoin="round"
                      // stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span>
                    Node JS / Express
                    <span className="font-semibold text-gray-900 dark:text-white"></span>
                  </span>
                </li>
              </ul>

              <ul className="space-y-4 text-left text-gray-400 dark:text-gray-400">
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5 text-amber-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      // stroke-linecap="round"
                      // stroke-linejoin="round"
                      // stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span>MERN Stack</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5 text-amber-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      // stroke-linecap="round"
                      // stroke-linejoin="round"
                      // stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span>Prisma</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5 text-amber-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      // stroke-linecap="round"
                      // stroke-linejoin="round"
                      // stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span>
                    GraphQL
                    <span className="font-semibold text-gray-900 dark:text-white"></span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5 text-amber-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      // stroke-linecap="round"
                      // stroke-linejoin="round"
                      // stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span>
                    Firebase
                    <span className="font-semibold text-gray-900 dark:text-white"></span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5 text-amber-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      // stroke-linecap="round"
                      // stroke-linejoin="round"
                      // stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span>
                    Github
                    <span className="font-semibold text-gray-900 dark:text-white"></span>
                  </span>
                </li>
              </ul>
            </div>

            <div className="sm:hidden grid-cols-2 mx-auto justify-between py-2">
            <div className="grid grid-cols-2 md:grid-cols-4 mx-auto justify-between py-2">
            <ul className="space-y-4 text-center mx-auto text-gray-400 dark:text-gray-400 mb-4">
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5 text-amber-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      // stroke-linecap="round"
                      // stroke-linejoin="round"
                      // stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span>Next JS</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5 text-amber-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      // stroke-linecap="round"
                      // stroke-linejoin="round"
                      // stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span>React</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5 text-amber-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      // stroke-linecap="round"
                      // stroke-linejoin="round"
                      // stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span>
                    Vue
                    <span className="font-semibold text-gray-900 dark:text-white"></span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5 text-amber-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      // stroke-linecap="round"
                      // stroke-linejoin="round"
                      // stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span>
                    React Native
                    <span className="font-semibold text-gray-900 dark:text-white"></span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5 text-amber-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      // stroke-linecap="round"
                      // stroke-linejoin="round"
                      // stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span>
                    PHP (Laravel)
                    <span className="font-semibold text-gray-900 dark:text-white"></span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5 text-amber-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      // stroke-linecap="round"
                      // stroke-linejoin="round"
                      // stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span>MERN Stack</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5 text-amber-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      // stroke-linecap="round"
                      // stroke-linejoin="round"
                      // stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span>Prisma</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5 text-amber-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      // stroke-linecap="round"
                      // stroke-linejoin="round"
                      // stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span>
                    GraphQL
                    <span className="font-semibold text-gray-900 dark:text-white"></span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5 text-amber-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      // stroke-linecap="round"
                      // stroke-linejoin="round"
                      // stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span>
                    Firebase
                    <span className="font-semibold text-gray-900 dark:text-white"></span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5 text-amber-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      // stroke-linecap="round"
                      // stroke-linejoin="round"
                      // stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span>
                    Github
                    <span className="font-semibold text-gray-900 dark:text-white"></span>
                  </span>
                </li>
              </ul>

              <ul className="space-y-4 text-center mx-auto text-gray-400 dark:text-gray-400">
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5 text-amber-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      // stroke-linecap="round"
                      // stroke-linejoin="round"
                      // stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span>TypeScript</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5 text-amber-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      // stroke-linecap="round"
                      // stroke-linejoin="round"
                      // stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span>JavaScript</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5 text-amber-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      // stroke-linecap="round"
                      // stroke-linejoin="round"
                      // stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span>
                    Java
                    <span className="font-semibold text-gray-900 dark:text-white"></span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5 text-amber-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      // stroke-linecap="round"
                      // stroke-linejoin="round"
                      // stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span>
                    Bootstrap 5
                    <span className="font-semibold text-gray-900 dark:text-white"></span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5 text-amber-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      // stroke-linecap="round"
                      // stroke-linejoin="round"
                      // stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span>
                    Figma / Adobe XD
                    <span className="font-semibold text-gray-900 dark:text-white"></span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5 text-amber-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      // stroke-linecap="round"
                      // stroke-linejoin="round"
                      // stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span>Tailwind CSS</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5 text-amber-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      // stroke-linecap="round"
                      // stroke-linejoin="round"
                      // stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span>MySQL</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5 text-amber-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      // stroke-linecap="round"
                      // stroke-linejoin="round"
                      // stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span>
                    Mongo DB
                    <span className="font-semibold text-gray-900 dark:text-white"></span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5 text-amber-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      // stroke-linecap="round"
                      // stroke-linejoin="round"
                      // stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span>
                    Wordpress / Joomla
                    <span className="font-semibold text-gray-900 dark:text-white"></span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-3.5 h-3.5 text-amber-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      // stroke-linecap="round"
                      // stroke-linejoin="round"
                      // stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span>
                    Node JS / Express
                    <span className="font-semibold text-gray-900 dark:text-white"></span>
                  </span>
                </li>
              </ul>
            </div>
            </div>


          </div>
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h2
              
              className="text-3xl lg:text-4xl font-bold leading-9 text-gray-200 pb-4 text-center"
            >
              Titulations
            </h2>
            <p className="font-normal text-base leading-6 text-gray-300 text-center mb-2">
            In my free time I like to continue learning. These are some of the titles I have received:
            </p>

          <div>
            <ul>
                <li className="m-2 text-center">
                    
<a href="https://www.coursera.org/account/accomplishments/verify/BXMARAFBN6DW?utm_source=mobile&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course" className="bg-amber-100 hover:bg-amber-200 text-blue-900 text-md font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-amber-400 inline-flex items-center justify-center w-full">Google Certificate - Foundations of User Experience (UX) Design</a>
                </li>

                                <li className="m-2">
                    
<a href="https://www.efset.org/cert/j7HGD9" className="bg-amber-100 hover:bg-amber-200 text-blue-900 text-md font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-amber-400 inline-flex items-center justify-center w-full">EF SET English Certificate 66/100 (C1 Advanced)</a>
                </li>

                <li className="m-2">
                    
<a href="/java.pdf" className="bg-amber-100 hover:bg-amber-200 text-blue-900 text-md font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-amber-400 inline-flex items-center justify-center w-full">IT Academy - JAVA Foundations: POO</a>
                </li>
                 <li className="m-2">
                 <a href="https://learn.microsoft.com/en-us/training/achievements/learn.language.build-javascript-applications-typescript.trophy?username=FranciscoJavierGonzlezSantos-1922&sharingId=9ED96310D3B48B50" className="bg-amber-100 hover:bg-amber-200 text-blue-900 text-md font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-amber-400 inline-flex items-center justify-center w-full">Microsoft Certificate - Build JavaScript applications using TypeScript </a>
                </li>
            </ul>
          </div>
          <p className="text-gray-300 mx-auto">And a lot of Udemy courses!</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
