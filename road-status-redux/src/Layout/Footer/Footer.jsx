import { NavLink } from "react-router-dom";
import EnvelopeIcon from "../../Components/Icons/EnvelopeIcon";
import PhoneIcon from "../../Components/Icons/PhoneIcon";
import LinkedInIcon from "../../Components/Icons/LInkedInIcon";
import GitHubIcon from "../../Components/Icons/GitHubIcon";

const Footer = () => {
  return (
    <div className="flex items-end w-full bg-white">
      <footer className="w-full text-gray-700 bg-gray-300 body-font">
        <div className="container flex flex-col flex-wrap px-5 py-4 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
          <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
            <p className="mt-2 text-sm text-gray-900">Design By</p>
            <div className="mt-4">
              <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                <a href="https://github.com/Mile1301" aria-label="Homepage" className="footer-octicon" title="GitHub" target="_blank">
                  <GitHubIcon />
                </a>
                <a
                  className="ml-3 text-blue-500 cursor-pointer hover:text-gray-700"
                  href="https://github.com/Mile1301"
                  title="LinkedIn"
                  target="_blank"
                >
                  <LinkedInIcon />
                </a>
              </span>
            </div>
          </div>
          <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:mt-0 md:text-left">
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Links</h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <NavLink to="/home" className="text-gray-500 cursor-pointer hover:text-gray-900">
                    Home
                  </NavLink>
                </li>
                <li className="mt-3">
                  <NavLink to="/about" className="text-gray-500 cursor-pointer hover:text-gray-900">
                    About
                  </NavLink>
                </li>
                <li className="mt-3">
                  <NavLink to="/faq" className="text-gray-500 cursor-pointer hover:text-gray-900">
                    FAQ
                  </NavLink>
                </li>
                <li className="mt-3">
                  <NavLink to="/contact" className="text-gray-500 cursor-pointer hover:text-gray-900">
                    Contact
                  </NavLink>
                </li>
                <li className="mt-3">
                  <NavLink to="/privacy" className="text-gray-500 cursor-pointer hover:text-gray-900">
                    Privacy Policy
                  </NavLink>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Company Info</h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <NavLink to="" className="text-gray-500 cursor-pointer hover:text-gray-900">
                    Web Development
                  </NavLink>
                </li>
                <li className="mt-3">
                  <NavLink to="" className="text-gray-500 cursor-pointer hover:text-gray-900">
                    Front-end Development
                  </NavLink>
                </li>
                <li className="mt-3">
                  <NavLink to="" className="text-gray-500 cursor-pointer hover:text-gray-900">
                    Back-End Development
                  </NavLink>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Partnerships</h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <NavLink to="" className="text-gray-500 cursor-pointer hover:text-gray-900">
                    Business Analysis
                  </NavLink>
                </li>
                <li className="mt-3">
                  <NavLink to="" className="text-gray-500 cursor-pointer hover:text-gray-900">
                    SCRUM Methodology
                  </NavLink>
                </li>
                <li className="mt-3">
                  <NavLink to="" className="text-gray-500 cursor-pointer hover:text-gray-900">
                    Project Management
                  </NavLink>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Contact</h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <NavLink to="/contact" className="text-gray-500 cursor-pointer hover:text-gray-900">
                    <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start items-center lg:text-xs 2xl:text-[16px]">
                      <EnvelopeIcon />
                      <small>
                        &nbsp; roadstatus<span>@</span>hotmail<span hidden>@</span>.com
                      </small>
                    </span>
                  </NavLink>
                </li>
                <li className="mt-3">
                  <NavLink to="" className="text-gray-500 cursor-pointer hover:text-gray-900">
                    <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start items-center">
                      <PhoneIcon />
                      <small>
                        &nbsp;+389<span hidden>@</span>-75-***<span hidden>@</span>-***
                      </small>
                    </span>
                  </NavLink>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-300">
          <div className="container px-5 py-4 mx-auto">
            <p className="text-sm text-gray-700 capitalize text-center">© 2023 All rights reserved </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
