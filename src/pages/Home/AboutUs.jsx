import React from 'react';
import aboutimg from '../../assets/02.PNG';
import decorativeimg from '../../assets/03.PNG';

const AboutUs = () => {
    return (
        <div className="pb-48 pt-24  px-5 sm:px-8 relative rounded-lg shadow-lg flex flex-col-reverse md:flex-row bg-green-700">
            {/* Main Image */}
            <div className="w-full md:w-1/2 flex items-center justify-center">
                <img src={aboutimg} alt="Graphic Design" className="w-64 sm:w-80 h-64 sm:h-80 object-cover rounded-lg shadow-md" />
            </div>

            {/* Content Section */}
            <div className="text-white w-full md:w-1/2 mt-6 md:mt-0 md:pr-32">
                <h2 className="font-serif text-3xl sm:text-5xl font-bold mb-4 text-center md:text-left">About Us</h2>
                <p className="text-center md:text-left mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                </p>
                <div className="text-center my-10 md:text-left">
                    <button className="btn bg-white text-green-900">Read More</button>
                </div>
            </div>

            {/* Decorative Image */}
            <img
                className="absolute bottom-0 right-0 w-full sm:w-5/6 h-16 sm:h-36 object-cover opacity-80"
                src={decorativeimg}
                alt="Decorative right image"
            />
        </div>
    );
};

export default AboutUs;
