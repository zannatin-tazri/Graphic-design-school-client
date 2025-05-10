import React from 'react';
import videoimg from '../../assets/07.PNG';

const Creativity = () => {
    return (
        <div className="flex flex-row gap-16 mx-auto px-16 h-96 items-center ">
            <div className="w-1/2">
                <a href="https://youtu.be/GQS7wPujL2k?si=wuSxVuDfktZwX9J3">
                <img className="h-60 w-full rounded-3xl shadow-lg" src={videoimg} alt="Graphic Design Workshop" /></a>
            </div>
            <div className="w-1/2 text-gray-700">
                <h2 className="text-4xl font-serif font-bold mb-4">Graphic Design Workshop</h2>
                <p className="text-wrap text-sm">
                    All about graphic design. Join our live streaming session to explore the world of creativity!
                </p>
                <p className="text-wrap text-sm text-gray-600 mt-2">
                    More information: <a href="http://www.graphiclasses.com" className="text-blue-500 underline">www.graphiclasses.com</a>
                </p>
                <a href="https://youtu.be/GQS7wPujL2k?si=wuSxVuDfktZwX9J3"><button className="btn bg-gray-800 text-white px-6 py-2 mt-4 rounded-lg hover:bg-gray-900">
                    See More
                </button></a>
                
            </div>
        </div>
    );
};

export default Creativity;
