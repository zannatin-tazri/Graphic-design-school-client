import React from 'react';

const WorkGalleryCard = ({gallery}) => {
    const {title, subtitle,image_url}=gallery;
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={image_url}
      alt="" />
  </figure>
  <div className="card-body text-center">
    <h2 className="text-center text-2xl font-bold text-gray-600">
      {title}
      
    </h2>
    <p className='text-center font-semibold text-gray-600'>{subtitle}</p>
  </div>
</div>
    );
};

export default WorkGalleryCard;