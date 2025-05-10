import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";
import logo from "../../assets/logo.png";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  // const auth = getAuth();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleSignout = () => {
    signOutUser()
      .then(() => console.log("Signed out"))
      .catch((error) => console.error("Signout error:", error));
  };

  const links = (
    <>
      <li className="text-base-100 font-semibold text-lg">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-base-100 font-semibold text-lg">
        <ScrollLink to="about" smooth={true} duration={500} className="cursor-pointer">
          About
        </ScrollLink>
      </li>
      <li className="text-base-100 font-semibold text-lg">
        <ScrollLink to="program" smooth={true} duration={500} className="cursor-pointer">
          Program
        </ScrollLink>
      </li>
      <li className="text-base-100 font-semibold text-lg">
        <ScrollLink to="contact" smooth={true} duration={500} className="cursor-pointer">
          Contact
        </ScrollLink>
      </li>
      <li className="text-base-100 font-semibold text-lg">
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="p-5 navbar h-24 bg-gray-800 shadow-sm">
        {/* Start */}
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="btn bg-white btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </button>

            {showMobileMenu && (
              <ul className="menu menu-sm dropdown-content bg-gray-700 rounded-box z-10 mt-3 w-52 p-2 shadow">
                {links}
                <div className="mt-3">
                  {user ? (
                    <button
                      onClick={handleSignout}
                      className="btn btn-sm w-full bg-white text-gray-800"
                    >
                      Sign Out
                    </button>
                  ) : (
                    <>
                      <li className="mt-2">
                        <Link to="/register" className="btn btn-sm w-full bg-green-700 text-white">
                          Sign Up
                        </Link>
                      </li>
                      <li className="mt-2">
                        <Link to="/signin" className="btn btn-sm w-full bg-green-700 text-white">
                          Sign In
                        </Link>
                      </li>
                    </>
                  )}
                </div>
              </ul>
            )}
          </div>
          <a className="btn btn-ghost text-3xl text-purple-950 font-semibold">
            <img className="w-36" src={logo} alt="Logo" />
          </a>
        </div>

        {/* Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* End */}
        <div className="navbar-end gap-3 hidden lg:flex">
          {user ? (
            <>
              
              <button onClick={handleSignout} className="btn">
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link className="btn border-none text-white bg-green-700" to="/register">
                Sign Up
              </Link>
              <Link className="btn border-none text-white bg-green-700" to="/signin">
                Sign In
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
