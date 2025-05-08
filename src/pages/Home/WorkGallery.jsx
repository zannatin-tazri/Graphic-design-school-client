import React, { useEffect, useState } from 'react';
import WorkGalleryCard from './WorkGalleryCard';

const WorkGallery = () => {
    const [workgallery, setWorkGallery] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/gallery')
            .then(res => res.json())
            .then(data => setWorkGallery(data))
    }, [])
    return (
        <div>
            <h1 className='pt-6 my-10 font-serif text-center text-5xl font-bold text-gray-600'>Work Gallery</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
                {
                    workgallery.map(gallery => <WorkGalleryCard key={gallery._id}
                        gallery={gallery}></WorkGalleryCard>)
                }
            </div>

        </div>
    );
};

export default WorkGallery;