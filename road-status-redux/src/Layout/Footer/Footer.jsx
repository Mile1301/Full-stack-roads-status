import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex items-end w-full bg-white">
      <footer className="w-full text-gray-700 bg-gray-300 body-font">
        <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
          <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
            <p className="mt-2 text-sm text-gray-500">Design logic, Code and Ship!</p>
            <div className="mt-4">
              <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                <a href="https://github.com/Mile1301" aria-label="Homepage" className="footer-octicon" title="GitHub" target="_blank">
                  <svg
                    aria-hidden="true"
                    className="text-black-500 cursor-pointer hover:text-gray-700"
                    height="24"
                    version="1.1"
                    viewBox="0 0 16 16"
                    width="24"
                  >
                    <path
                      fill="currentColor"
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                    ></path>
                  </svg>
                </a>
                <a
                  className="ml-3 text-blue-500 cursor-pointer hover:text-gray-700"
                  href="https://github.com/Mile1301"
                  title="LinkedIn"
                  target="_blank"
                >
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
          <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
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
                  <NavLink to="/skills" className="text-gray-500 cursor-pointer hover:text-gray-900">
                    Skills
                  </NavLink>
                </li>
                <li className="mt-3">
                  <NavLink to="/projects" className="text-gray-500 cursor-pointer hover:text-gray-900">
                    Projects
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
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Tech POV</h2>
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
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Business POV</h2>
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        className="bi bi-envelope"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                      </svg>
                      <small>
                        &nbsp; mile1todorovski<span>@</span>hotmail<span hidden>@</span>.com
                      </small>
                    </span>
                  </NavLink>
                </li>
                <li className="mt-3">
                  <NavLink to="" className="text-gray-500 cursor-pointer hover:text-gray-900">
                    <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        className="text-black-500 cursor-pointer hover:text-gray-700"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />{" "}
                        <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                      </svg>
                      <small>
                        &nbsp;+389<span hidden>@</span>-75-342<span hidden>@</span>-726
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
