import React from 'react';
import { Link } from 'react-router-dom';
import Banner from "../../Components/Banner/Banner";
import Courses from "../../Components/Courses/Courses";
import About from "../../Components/About/About";
import Achievement from "../../Components/Achievement/Achievement";
import Teachers from "../../Components/Teachers/Teachers";
import Blogs from "../../Components/Blogs/Blogs";
import Newsletter from "../../Components/Newsletter/Newsletter";
import Contact from "../../Components/Contact/Contact";
import CourseCategories from "../../Components/CourseCategories/CourseCategories";
import Testimonial from '../../Components/Testimonial/Testimonial';
import CoreFeatures from "../../Components/CoreFeatures/CoreFeatures";
import InfoCard from "../../Components/InfoCard/InfoCard";


const Home = () => {

  return (
    <>
    <Banner></Banner>
    <Courses></Courses>
    <About></About>
    <Achievement></Achievement>
    <CourseCategories></CourseCategories>
    <Testimonial></Testimonial>
<Blogs></Blogs>
<CoreFeatures></CoreFeatures>
<Teachers></Teachers>
<Contact></Contact>
<Newsletter></Newsletter>
<InfoCard></InfoCard>
    </>
  );
};

export default Home;