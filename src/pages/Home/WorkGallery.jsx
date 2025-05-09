import React, { useEffect, useState, useContext } from 'react';
import WorkGalleryCard from './WorkGalleryCard';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext';

const WorkGallery = () => {
    
    const isAdmin=true;

    const [workgallery, setWorkGallery] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/gallery')
            .then(res => res.json())
            .then(data => setWorkGallery(data));
    }, []);

    const handleSeeMore = () => {
        if (user) {
            setShowAll(!showAll);
        } else {
            navigate('/signin'); 
        }
    };

    const visibleGallery = showAll && user ? workgallery : workgallery.slice(0, 6);

    return (
        <div>
            <h1 className='pt-12 my-10 font-serif text-center text-5xl font-bold text-gray-600'>
                Work Gallery
            </h1>

            {
                isAdmin ? <>
                 
                </>
                :
                <>
                
                </>
            }

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 px-4'>
                {
                    visibleGallery.map(gallery => (
                        <WorkGalleryCard key={gallery._id} gallery={gallery} />
                    ))
                }
            </div>

            {
                workgallery.length > 6 && (
                    <div className="flex justify-center my-12">
                        <button
                            onClick={handleSeeMore}
                            className="bg-gray-700 btn btn-primary"
                        >
                            {showAll ? 'Show Less' : 'See More'}
                        </button>
                    </div>
                )
            }
        </div>
    );
};

export default WorkGallery;
