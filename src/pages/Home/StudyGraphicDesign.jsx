import React from 'react';
import img1 from '../../assets/04.PNG';
import img2 from '../../assets/05.PNG';

const StudyGraphicDesign = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full p-6 bg-green-700 shadow-2xl rounded-md">
     
      <img
        className="absolute top-0 left-0 w-5/6 sm:w-5/6 h-auto object-cover"
        src={img2}
        alt="Decorative left image"
      />
      <img
        className="absolute bottom-0 right-0 w-5/6 sm:w-5/6 h-auto object-cover"
        src={img1}
        alt="Decorative right image"
      />

      
      <div className="relative z-10 max-w-lg w-full text-center py-24 mb-16 sm:mb-28 mt-16 sm:mt-28">
        <h2 className="text-2xl font-serif sm:text-6xl font-bold text-white">
          Where to Study Graphic Design?
        </h2>
        <p className="mt-4 text-sm sm:text-lg text-white font-sans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="mt-2 text-xs sm:text-sm text-white">
          Quis ipsum suspendisse ultrices.
        </p>
        <button className="mt-6 mb-12 bg-white text-gray-800 rounded-full btn  w-full sm:w-3/4">See More</button>
      </div>
    </div>
  );
};

export default StudyGraphicDesign;
