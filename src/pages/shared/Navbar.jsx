import React, { useContext, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaPen } from "react-icons/fa";
import AuthContext from "../../context/AuthContext/AuthContext";
import logo from "../../assets/logo.png";
import { getAuth, updateProfile } from "firebase/auth";

const Navbar = () => {

 


  const { user, signOutUser } = useContext(AuthContext);
  const [photoURL, setPhotoURL] = useState(user?.photoURL);
  const fileInputRef = useRef(null);
  const auth = getAuth();

  const handleSignout = () => {
    signOutUser()
      .then(() => {
        console.log("Signed out");
      })
      .catch((error) => {
        console.error("Signout error:", error);
      });
  };

  const handlePhotoClick = () => {
    fileInputRef.current.click();
  };

  const handlePhotoUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=YOUR_IMGBB_API_KEY`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      const newPhotoURL = data.data.display_url;

      await updateProfile(auth.currentUser, { photoURL: newPhotoURL });
      setPhotoURL(newPhotoURL); 
    } catch (error) {
      console.error("Error uploading photo:", error);
    }
  };

  const links = (
    <>
      <li className="text-base-100 font-semibold text-lg">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-base-100 font-semibold text-lg">
        <NavLink to="/myApplications">About</NavLink>
      </li>
      <li className="text-base-100 font-semibold text-lg">
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      
    </>
  );

  return (
    <div>
      <div className="navbar bg-gray-800 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl text-purple-950 font-semibold">
            <img className="w-20" src={logo} alt="Logo" />
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end gap-3">
          {user ? (
            <>
              <div className="relative">
                <img
                  src={photoURL || "https://i.ibb.co/yYVjY2L/user.png"}
                  alt="Profile"
                  className="w-10 h-10 rounded-full cursor-pointer border border-white"
                  onClick={handlePhotoClick}
                />
                <FaPen className="absolute bottom-0 right-0 text-white bg-black p-1 rounded-full w-4 h-4" />
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                />
              </div>
              <button onClick={handleSignout} className="btn">
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-primary bg-purple-700" to="/register">
                Register
              </Link>
              <Link className="btn btn-primary bg-purple-700" to="/signin">
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
