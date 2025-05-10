import React from 'react';
import bannerImage1 from "./../../assets/bannerimg01.png"
import bannerImage2 from "./../../assets/bannerimg02.png"
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div>
      <div className="relative flex flex-col items-center justify-center w-full min-h-screen bg-white p-6">
      
      <img
        className="absolute top-0 left-0 w-1/2 sm:w-1/3 h-auto object-cover"
        src={bannerImage1} 
        alt="Decorative left image"
      />
      <img
        className="absolute bottom-0 right-0 w-1/2 sm:w-1/3 h-auto object-cover"
        src={bannerImage2} 
        alt="Decorative right image"
      />

      
      <div className="relative z-10 max-w-md w-full text-center p-4">
        <h1 className="font-serif text-xl sm:text-5xl font-bold text-gray-600">Graphic Design School</h1>
        <p className="font-sans mt-4 font-semibold text-xl sm:text-2xl text-gray-600">
          Study online and continue learning from home
        </p>
        <p className="mt-2 text-lg sm:text-xl text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        </p>
        <Link to='/register'>
        <button className="mt-6 btn btn-primary bg-gray-800 w-full sm:w-auto">Sign Up Now!</button></Link>
        
      </div>
    </div>

    </div>
  );
};

export default Banner;