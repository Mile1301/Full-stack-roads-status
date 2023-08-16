import { useState, useContext } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import roadIcon from "../../assets/maps-and-flags-road-sign-svgrepo-com.svg";
import { useSelector } from "react-redux";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { accessToken } = useSelector((state) => state.roads);
  return (
    <header
      className="bg-gray-300 relative
    sticky top-0 px-4 font-semibold text-sm text-slate-900 dark:text-white bg-slate-50/90 dark:bg-slate-700/90 backdrop-blur-sm ring-2 ring-slate-900/50 dark:ring-white/10 z-10"
    >
      <nav className="mx-auto flex items-center justify-between p-6 md:px-8 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <img src={roadIcon} alt="" />
        </div>
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
          {accessToken !== null && (
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? "text-red-500 text-sm font-semibold leading-6" : "text-sm font-semibold leading-6")}
            >
              Home
            </NavLink>
          )}
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "text-red-500 text-sm font-semibold leading-6" : "text-sm font-semibold leading-6")}
          >
            About
          </NavLink>
          <NavLink
            to="/faq"
            className={({ isActive }) => (isActive ? "text-red-500 text-sm font-semibold leading-6" : "text-sm font-semibold leading-6")}
          >
            FAQ
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "text-red-500 text-sm font-semibold leading-6" : "text-sm font-semibold leading-6")}
          >
            Contact
          </NavLink>
          {accessToken !== null ? (
            <NavLink
              to="/logout"
              className={({ isActive }) => (isActive ? "text-red-500 text-sm font-semibold leading-6" : "text-sm font-semibold leading-6")}
            >
              Logout
            </NavLink>
          ) : (
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-red-500 text-sm font-semibold leading-6" : "text-sm font-semibold leading-6")}
            >
              Login
            </NavLink>
          )}
        </Popover.Group>
      </nav>

      <Dialog as="div" className="md:hidden lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <NavLink to="/home" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Your Company</span>
              <img src={roadIcon} alt="" />
            </NavLink>
            <button type="button" className="-m-2.5 rounded-md p-2.5 " onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {accessToken !== null && (
                  <NavLink
                    onClick={() => setMobileMenuOpen(false)}
                    to="/home"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50"
                  >
                    Home
                  </NavLink>
                )}
                <NavLink
                  onClick={() => setMobileMenuOpen(false)}
                  to="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50"
                >
                  About
                </NavLink>
                <NavLink
                  onClick={() => setMobileMenuOpen(false)}
                  to="/faq"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50"
                >
                  FAQ
                </NavLink>
                <NavLink
                  onClick={() => setMobileMenuOpen(false)}
                  to="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50"
                >
                  Contact
                </NavLink>
                {accessToken !== null ? (
                  <NavLink
                    onClick={() => setMobileMenuOpen(false)}
                    to="/logout"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50"
                  >
                    Logout
                  </NavLink>
                ) : (
                  <NavLink
                    onClick={() => setMobileMenuOpen(false)}
                    to="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50"
                  >
                    Login
                  </NavLink>
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
export default Header;
