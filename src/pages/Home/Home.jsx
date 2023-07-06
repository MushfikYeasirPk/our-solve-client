import React from 'react';
import { Link } from 'react-router-dom';
import Banner from "../Home/Banner/Banner";
import Courses from "../Home/Courses/Courses";
import About from "../Home/About/About";
import Achievement from "../Home/Achievement/Achievement";
// import Testimonial from "../Home/Testimonial/Testimonial";
// import Teachers from "../Home/Teachers/Teachers";
// import Blogs from "../Home/Blogs/Blogs";
// import Newsletter from "../Home/Newsletter/Newsletter";
// import Contact from "../../Contact/Contact";
import CourseCategories from "../Home/CourseCategories/CourseCategories";
// import CoreFeatures from "../Home/CoreFeatures/CoreFeatures";
// import InfoCard from "../Home/InfoCard/InfoCard";


const Home = () => {

  return (
    <>
    <Banner></Banner>
    <Courses></Courses>
    <About></About>
    <Achievement></Achievement>
    <CourseCategories></CourseCategories>
    </>
  );
};

export default Home;