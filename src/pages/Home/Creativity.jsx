import React from 'react';
import videoimg from '../../assets/07.PNG';

const Creativity = () => {
  return (
    <div id='program' className="flex flex-col lg:flex-row gap-8 lg:gap-16 mx-auto px-4 sm:px-8 lg:px-16 py-10 items-center">
      <div className="w-full lg:w-1/2">
        <a href="https://youtu.be/GQS7wPujL2k?si=wuSxVuDfktZwX9J3">
          <img
            className="w-full h-auto rounded-3xl shadow-lg object-cover"
            src={videoimg}
            alt="Graphic Design Workshop"
          />
        </a>
      </div>
      <div className="w-full lg:w-1/2 text-gray-700 text-center lg:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-4">
          Graphic Design Workshop
        </h2>
        <p className="font-semibold text-base sm:text-lg">
          All about graphic design. Join our live streaming session to explore the world of creativity!
        </p>
        <p className="font-semibold text-base sm:text-lg text-gray-600 mt-2">
          More information:
        </p>
        <a href="https://youtu.be/GQS7wPujL2k?si=wuSxVuDfktZwX9J3">
          <button className="btn bg-gray-800 text-white text-base sm:text-lg px-6 py-2 mt-4 rounded-lg">
            See More
          </button>
        </a>
      </div>
    </div>
  );
};

export default Creativity;
