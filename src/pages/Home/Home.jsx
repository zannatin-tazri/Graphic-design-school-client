import React from 'react';
import Banner from './Banner';
import StudyGraphicDesign from './StudyGraphicDesign';
import WorkGallery from './WorkGallery';
import AboutUs from './AboutUs';
import OnlineEducation from './OnlineEducation';


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <AboutUs></AboutUs>
           <WorkGallery></WorkGallery>
           <StudyGraphicDesign></StudyGraphicDesign>
           <OnlineEducation></OnlineEducation>
        </div>
    );
};

export default Home;