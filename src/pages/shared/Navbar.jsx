import React, { useContext, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import AuthContext from '../../context/AuthContext/AuthContext';
import logo from '../../assets/logo.png';
import { Pencil } from 'lucide-react';

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const fileInputRef = useRef();
  const [hovering, setHovering] = useState(false);

  const handleSignout = () => {
    signOutUser()
      .then(() => {
        console.log('Signed out successfully');
      })
      .catch(() => {
        console.log('Failed to sign out');
      });
  };

  const handlePhotoUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const formData = new FormData();
      formData.append('image', file);

      // 🔑 Replace with your actual imgbb API key
      const res = await fetch(`https://api.imgbb.com/1/upload?key=YOUR_IMGBB_API_KEY`, {
        method: 'POST',
        body: formData
      });

      const data = await res.json();
      const photoURL = data.data.display_url;

      await updateProfile(user, { photoURL });
      window.location.reload();

    } catch (err) {
      console.error("Failed to update photo:", err);
    }
  };

  const links = (
    <>
      <li className='text-purple-950 font-semibold text-lg'><NavLink to='/'>Home</NavLink></li>
      <li className='text-purple-950 font-semibold text-lg'><NavLink to='/myApplications'>My Applications</NavLink></li>
      <li className='text-purple-950 font-semibold text-lg'><NavLink to='/'>Add a Job</NavLink></li>
    </>
  );

  return (
    <div className="navbar bg-gray-800 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor"> 
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" /> 
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-3xl text-purple-950 font-semibold">
          <img className='w-20' src={logo} alt="Logo" />
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>

      <div className="navbar-end gap-3 items-center">
        {
          user ? (
            <>
              {/* Avatar + Update */}
              <div
                className="relative w-10 h-10"
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
              >
                <img
                  src={user.photoURL || 'https://i.ibb.co/2yH9rjK/user.png'}
                  alt="User"
                  className="rounded-full w-10 h-10 object-cover border-2 border-purple-700"
                />
                {hovering && (
                  <div
                    className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center cursor-pointer rounded-full"
                    onClick={() => fileInputRef.current.click()}
                  >
                    <Pencil className="text-white w-4 h-4" />
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  ref={fileInputRef}
                  onChange={handlePhotoUpload}
                />
              </div>

              <button onClick={handleSignout} className='btn'>Sign Out</button>
            </>
          ) : (
            <>
              <Link className='btn btn-primary bg-purple-700' to='/register'>Register</Link>
              <Link className='btn btn-primary bg-purple-700' to='/signin'>Sign In</Link>
            </>
          )
        }
      </div>
    </div>
  );
};

export default Navbar;
