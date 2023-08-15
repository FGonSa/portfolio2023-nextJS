"use client";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";

const navigation = [
  { name: "About", href: "/#about" },
  { name: "Works", href: "/#works" },
  { name: "Skills", href: "/#skills" },
];

export default function NavbarSegunda() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
    <nav
      className="flex items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div className="flex lg:flex-1 text-gray-300 font-bold">
        <a id="top" href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
F5antos
        </a>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6 text-gray-200" aria-hidden="true" />
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-sm font-semibold leading-6 text-gray-200"
          >
            {item.name}
          </a>
        ))}
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <a
          href="https://www.linkedin.com/in/frank5antos/"
          className="text-sm font-semibold leading-6 text-gray-300"
        >
          Contact Me <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </nav>
    <Dialog
      as="div"
      className="lg:hidden"
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
    >
      <div className="fixed inset-0 z-50" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#0a0e17] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-200/10">
        <div className="flex items-center justify-between">
          <a href="/" className="-m-1.5 p-1.5 text-gray-200 font-bold">
            <span className="sr-only">F5antos</span>
            F5antos
          </a>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6 text-gray-300" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-300 hover:bg-gray-700"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="py-6">
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-300 hover:bg-gray-700"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  </header>
  );
}