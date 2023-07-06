import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import UseInstructors from '../Custom Hooks/UseInstructors';
const PopularInstructors = () => {
    const [instructors] = UseInstructors();

    return (
        <div>
            <Fade right big>
                <h1 className='py-5 text-center text-4xl text-cyan-700 border-b-4 border-indigo-500'>Popular Instructors</h1>
            </Fade>
            
            <div className='lg:grid grid-cols-3 ml-10 gap-10 py-5'>
                {
                    instructors.slice(0, 6).map((sigleInstructors) =>
                        <div className="card w-96 bg-base-100 shadow-xl mb-5 " key={sigleInstructors._id}>
                            <figure><img src={sigleInstructors.image} alt="Shoes" /></figure>

                        </div>
                    )}

            </div>
        </div>


    );
};

export default PopularInstructors;