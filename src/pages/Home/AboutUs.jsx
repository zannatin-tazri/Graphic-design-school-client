import React, { useEffect, useState, useContext } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';
import decorativeimg from '../../assets/03.PNG';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    const [aboutData, setAboutData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/aboutus')
            .then(res => res.json())
            .then(data => setAboutData(data[0]))  // assuming there's only one about us entry
            .catch(err => console.error('Failed to fetch about us:', err));
    }, []);

    return (
        <div id="about" className="pb-48 pt-24 px-5 sm:px-8 relative rounded-lg shadow-lg flex flex-col-reverse md:flex-row bg-green-700">
            <div className="w-full md:w-1/2 flex items-center justify-center">
                <img
                    src={aboutData?.photo_url || 'https://via.placeholder.com/300'}
                    alt="Graphic Design"
                    className="w-64 sm:w-80 h-64 sm:h-80 object-cover rounded-lg shadow-md"
                />
            </div>

            <div className="text-white w-full md:w-1/2 mt-6 md:mt-0 md:pr-32">
                <h2 className="font-serif text-3xl sm:text-5xl font-bold mb-4 text-center md:text-left">About Us</h2>
                <p className="text-center md:text-left mb-4">
                    {(aboutData?.description || '').slice(0, 200)}...
                </p>
                <div className="text-center my-10 md:text-left">
                    <Link to='/aboutdetails'>
                        <button className="btn bg-white text-green-900">Read More</button>
                    </Link>
                </div>
            </div>

            <img
                className="absolute bottom-0 right-0 w-full sm:w-5/6 h-16 sm:h-36 object-cover opacity-80"
                src={decorativeimg}
                alt="Decorative right image"
            />
        </div>
    );
};

export default AboutUs;
