import React from "react";


const Testimonial = () => {
	

	return (
		<div className='container mx-auto my-32 px-4 md:px-11'>
			<div className=' w-full'>
				<div
					className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6 '
					style={{ alignItems: "center" }}>
					<div className='text-left w-full'>
						<div className='md:text-4xl text-3xl font-semibold  text-red-500'>
							Testimonial
						</div>
						<h1 className='md:text-5xl text-4xl font-black md:mb-7 mb-5 mt-3 text-gray-800'>
							What Our Students Says About Us
						</h1>
						<div className='text-md my-5 text-justify text-p '>
							Coding Faculty creates high quality technology training content.
							We aim to teach technology the right way but at the same time
							putting emphasis on each of our students. We are a growing team of
							professional trainers who love our work but overall helping our
							students reach their maximum potential in their career.
						</div>
					</div>
					
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
