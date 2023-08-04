import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
// import ThemeToggle from "../../ThemeToggle/ThemeToggle";

const Header = ({ isAboutPageVisible, isContactPageVisible, isSkillsPageVisible, isProjectsPageVisible }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  return (
    <header
      className="bg-gray-300
    sticky top-0 px-4 font-semibold text-sm text-slate-900 dark:text-slate-200 bg-slate-50/90 dark:bg-slate-700/90 backdrop-blur-sm ring-1 ring-slate-900/10 dark:ring-black/10 z-10"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 md:px-8 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">{/* <ThemeToggle /> */}</div>
        <div className="flex md:hidden lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden md:flex md:gap-x-12 lg:flex lg:gap-x-12">
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? "text-red-500 text-sm font-semibold leading-6" : "text-sm font-semibold leading-6")}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive || isAboutPageVisible ? "text-red-500 text-sm font-semibold leading-6" : "text-sm font-semibold leading-6"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive || isSkillsPageVisible ? "text-red-500 text-sm font-semibold leading-6" : "text-sm font-semibold leading-6"
            }
          >
            Skills
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive || isProjectsPageVisible ? "text-red-500 text-sm font-semibold leading-6" : "text-sm font-semibold leading-6"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive || isContactPageVisible ? "text-red-500 text-sm font-semibold leading-6" : "text-sm font-semibold leading-6"
            }
          >
            Contact
          </NavLink>
        </Popover.Group>
      </nav>

      <Dialog as="div" className="md:hidden lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <NavLink
                  onClick={() => setMobileMenuOpen(false)}
                  to="/home"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </NavLink>
                <NavLink
                  onClick={() => setMobileMenuOpen(false)}
                  to="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About
                </NavLink>
                <NavLink
                  onClick={() => setMobileMenuOpen(false)}
                  to="/skills"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Skills
                </NavLink>
                <NavLink
                  onClick={() => setMobileMenuOpen(false)}
                  to="projects"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Projects
                </NavLink>
                <NavLink
                  onClick={() => setMobileMenuOpen(false)}
                  to="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </NavLink>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
      <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
    </header>
  );
};
export default Header;
