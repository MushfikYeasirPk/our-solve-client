import React, { useEffect, useState } from 'react';

const courses = () => {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    fetch(`http://localhost:5000/courses`)
      .then((res) => res.json())
      .then((result) => {
        setCourses(result);
      });
  }, []);
  console.log(courses);
  return (
    <div>
      <h1 className='text-center text-4xl text-cyan-700 border-b-4 border-indigo-500'>Our Beloved courses</h1>
      <div className='lg:grid grid-cols-3 ml-10 gap-10 py-5'>
        {
          courses.map((sigleCourses) =>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure><img src={sigleCourses.image} alt="Person Image" /></figure>
              <div className="card-body">
                <h2 className="card-title border-b">Name: {sigleCourses.name}</h2>
                <h2 className="card-title border-b"> Email: {sigleCourses.email}</h2>

                {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                      </div> */}
              </div>
            </div>
          )}

      </div>
    </div>
  );
};

export default courses;