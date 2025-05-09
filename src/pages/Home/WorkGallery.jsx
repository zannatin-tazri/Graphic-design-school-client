import React, { useEffect, useState, useContext } from 'react';
import WorkGalleryCard from './WorkGalleryCard';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext';

const WorkGallery = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin, setIsAdmin] = useState(false);
    const [workgallery, setWorkGallery] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/users/admin/${user.email}`)
                .then(res => res.json())
                .then(data => setIsAdmin(data.isAdmin));
        }
    }, [user]);

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

    const handleManageGallery = () => {
        navigate('/workgallery-admin'); // Make sure this route exists in your router
    };

    const visibleGallery = showAll && user ? workgallery : workgallery.slice(0, 6);

    return (
        <div>
            <h1 className='pt-12 my-10 font-serif text-center text-5xl font-bold text-gray-600'>
                Work Gallery
            </h1>

            {isAdmin && (
                <div className="text-center mb-6">
                   <Link to='/manageadmin'><button onClick={handleManageGallery} className="btn btn-outline btn-warning">
                        Manage Gallery
                    </button></Link> 
                </div>
            )}

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
