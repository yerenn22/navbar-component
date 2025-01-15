import { useState } from "react";

import { default as Logo } from "../../shared/assets/abstractly.svg";
import { BurgerIcon, CloseIcon } from "../../shared/icons";

export const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  return (
    <header className="mt-4 xl:mt-0 flex justify-center">
      <nav
        className="flex w-full max-w-[1280px] items-center justify-between px-4 py-[18px] md:px-8 xl:justify-start xl:gap-[96px]"
        aria-label="Main Navigation"
      >
        <div className="flex-shrink-0">
          <a href="/" aria-label="Go to homepage">
            <img src={Logo} alt="Abstractly Logo" className="h-8 w-28" />
          </a>
        </div>

        <ul className="hidden flex-1 gap-8 xl:flex">
          <li className="flex h-9 items-center">
            <a href="/" className="inline-block text-nowrap px-[2px] font-medium text-neutral-600">
              Home
            </a>
          </li>
          <li className="flex h-9 items-center">
            <a href="/features" className="inline-block text-nowrap px-[2px] font-medium text-neutral-600">
              Features
            </a>
          </li>
          <li className="flex h-9 items-center">
            <a href="/pricing" className="inline-block text-nowrap px-[2px] font-medium text-neutral-600">
              Pricing
            </a>
          </li>
          <li className="flex h-9 items-center">
            <a href="/about-us" className="inline-block text-nowrap px-[2px] font-medium text-neutral-600">
              About us
            </a>
          </li>
          <li className="flex h-9 items-center">
            <a href="/contact" className="inline-block text-nowrap px-[2px] font-medium text-neutral-600">
              Contact
            </a>
          </li>
        </ul>

        <div className="hidden gap-4 xl:flex">
          <button className="flex items-center justify-center rounded-[4px] bg-white px-4 py-[10px] font-medium text-neutral-900 [box-shadow:_0px_1px_3px_rgba(0,_0,_0,_0.1),_0px_1px_2px_rgba(0,_0,_0,_0.06)]">
            <a href="/learn-more" className="transform-gpu px-[2px]">
              Learn more
            </a>
          </button>
          <button className="flex items-center justify-center rounded-[4px] bg-indigo-700 px-4 py-[10px] font-medium text-white [box-shadow:_0px_1px_3px_rgba(0,_0,_0,_0.1),_0px_1px_2px_rgba(0,_0,_0,_0.06)]">
            <a href="/try-it-out" className="transform-gpu px-[2px]">
              See pricing
            </a>
          </button>
        </div>

        <button
          onClick={toggleDrawer}
          className="cursor-pointer text-neutral-600 xl:hidden"
          aria-expanded={isDrawerOpen}
          aria-controls="main-drawer"
        >
          <BurgerIcon />
          <span className="sr-only">Open navigation menu</span>
        </button>
      </nav>

      <aside
        id="main-drawer"
        className={`fixed left-0 top-0 z-50 flex h-full w-[300px] transform flex-col gap-6 bg-white p-4 pt-8 transition-transform duration-300 ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        hidden={!isDrawerOpen}
        role="navigation"
        aria-label="Sidebar Navigation"
      >
        <nav className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="/" aria-label="Go to homepage">
              <img src={Logo} alt="Abstractly Logo" className="h-8 w-28" />
            </a>
          </div>

          <button
            onClick={toggleDrawer}
            className="cursor-pointer text-neutral-600"
            aria-expanded={isDrawerOpen}
            aria-controls="main-drawer"
          >
            <CloseIcon />
            <span className="sr-only">Close navigation menu</span>
          </button>
        </nav>

        <ul className="flex flex-1 flex-col gap-2">
          <li className="flex h-9 items-center">
            <a href="/" className="block text-sm text-neutral-900">
              Home
            </a>
          </li>
          <li className="flex h-9 items-center">
            <a href="/features" className="block text-sm text-neutral-900">
              Features
            </a>
          </li>
          <li className="flex h-9 items-center">
            <a href="/pricing" className="block text-sm text-neutral-900">
              Pricing
            </a>
          </li>
          <li className="flex h-9 items-center">
            <a href="/about-us" className="block text-sm text-neutral-900">
              About us
            </a>
          </li>
          <li className="flex h-9 items-center">
            <a href="/contact" className="block text-sm text-neutral-900">
              Contact
            </a>
          </li>
        </ul>

        <div className="flex flex-col gap-4">
          <a
            href="/learn-more"
            className="flex h-11 items-center justify-center rounded-[4px] bg-white font-medium text-neutral-900 [box-shadow:_0px_1px_3px_rgba(0,_0,_0,_0.1),_0px_1px_2px_rgba(0,_0,_0,_0.06)]"
          >
            Learn more
          </a>
          <a
            href="/try-it-out"
            className="flex h-11 items-center justify-center rounded-[4px] bg-indigo-700 font-medium text-white [box-shadow:_0px_1px_3px_rgba(0,_0,_0,_0.1),_0px_1px_2px_rgba(0,_0,_0,_0.06)]"
          >
            Try it out
          </a>
        </div>
      </aside>

      {isDrawerOpen && <div className="fixed inset-0 z-40" onClick={toggleDrawer} />}
    </header>
  );
};
