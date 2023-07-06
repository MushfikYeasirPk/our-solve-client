import React from 'react';
import UseClasses from '../Custom Hooks/UseClasses';
import { Fade } from 'react-awesome-reveal';

const PopularClasses = () => {
    const [PopClasses] = UseClasses();
// console.log("Pop class", PopClasses);
    return (
        <div className='py-5'>
            <h1 className='text-center text-4xl text-cyan-700 border-b-4 border-indigo-500 py-2'>Popular Classes</h1>
            <div className='lg:grid grid-cols-3 ml-10 gap-10 py-5'>
                {
                    PopClasses.slice(0, 6).map((SingleClass) =>
                        <div className="card w-96 bg-base-100 shadow-xl mb-5" key={SingleClass._id}>
                            <figure><img src={SingleClass.image} alt="Shoes" /></figure>
                            
                        </div >
                    )}

            </div>
        </div>
    );
};

export default PopularClasses;