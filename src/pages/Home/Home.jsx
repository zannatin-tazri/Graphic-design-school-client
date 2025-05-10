import React from 'react';
import Banner from './Banner';
import StudyGraphicDesign from './StudyGraphicDesign';
import WorkGallery from './WorkGallery';
import AboutUs from './AboutUs';


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <AboutUs></AboutUs>
           <WorkGallery></WorkGallery>
           <StudyGraphicDesign></StudyGraphicDesign>
        </div>
    );
};

export default Home;