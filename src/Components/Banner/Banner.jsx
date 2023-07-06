
import "./Banner.css";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from "react-router-dom";
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const bgStyle = { top: "20%" };

const Banner = () => {
	const progressCircle = useRef(null);
	const progressContent = useRef(null);
	const onAutoplayTimeLeft = (s, time, progress) => {
		progressCircle.current.style.setProperty('--progress', 1 - progress);
		progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
	};
	return (
		<>

			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				onAutoplayTimeLeft={onAutoplayTimeLeft}
				className="mySwiper"
			>

				<SwiperSlide>
					<img
						className='w-full'
						src='https://i.ibb.co/5WmBpfk/slider-1.png'
						alt='SliderImage'
					/>
					<div
						className='slider-text text-left absolute left-1/4'
						style={bgStyle}>
						<p className='text-red-500 font-bold text-xl tracking-wider mb-3'>
							Learn & Achieve
						</p>
						<h1 className='lg:text-5xl md:text-3xl sm:text-xl mb-4 text-white uppercase font-bold'>
							Find The Right Online
						</h1>
						<h3 className='lg:text-3xl md:text-xl sm:hidden md:block lg:block mb-6 text-white uppercase font-bold'>
							Tutor For You
						</h3>
						<p className='mb-8 text-gray-300 text-lg sm:hidden lg:block description'>
							Better Education For A Better World. Best Industry Leaders And
							Learn Courses Online <br /> “Learning to code has the inadvertent
							effect of teaching you how to think,” says Adrian Degus. <br />
							Better Education For A Better World. Best Industry Leaders And
							Learn Courses Online.
						</p>
						<Link to='/Courses'>
							<button className="border-2 border-red-500 bg-red-500 rounded-lg hover:bg-transparent  text-center tracking-wider duration-300">Get Started</button>
						</Link>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className='w-full'
						src='https://i.ibb.co/b263ZBR/slider-2.png'
						alt='SliderImage'
					/>
					<div
						className='slider-text text-left absolute left-1/4'
						style={bgStyle}>
						<p className='text-red-500 font-bold text-xl tracking-wider mb-3'>
							Learn & Achieve
						</p>
						<h1 className='lg:text-5xl md:text-3xl sm:text-xl mb-4 text-white uppercase font-bold'>
							Become A Developer
						</h1>
						<h3 className='lg:text-3xl md:text-xl sm:hidden md:block lg:block mb-6 text-white uppercase font-bold'>
							With Our Solve
						</h3>
						<p className='mb-8 text-gray-300 text-lg sm:hidden lg:block description'>
							Better Education For A Better World. Best Industry Leaders And
							Learn Courses Online <br /> “Learning to code has the inadvertent
							effect of teaching you how to think,” says Adrian Degus. <br />
							Better Education For A Better World. Best Industry Leaders And
							Learn Courses Online.
						</p>
						<Link to='/Courses'>
						<button className="border-2 border-red-500 bg-red-500 rounded-lg hover:bg-transparent  text-center tracking-wider duration-300">Get Started</button>
						</Link>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className='w-full'
						src='https://i.ibb.co/6gCTndZ/slider-3.png'
						alt='SliderImage'
					/>
					<div
						className='slider-text text-left absolute left-1/4'
						style={bgStyle}>
						<p className='text-red-500 font-bold text-xl tracking-wider mb-3'>
							Learn & Achieve
						</p>
						<h1 className='lg:text-5xl md:text-3xl sm:text-xl mb-4 text-white uppercase font-bold'>
							Explore A Different Way
						</h1>
						<h3 className='lg:text-3xl md:text-xl sm:hidden md:block lg:block mb-6 text-white uppercase font-bold'>
							To Learn Coding
						</h3>
						<p className='mb-8 text-gray-300 text-lg sm:hidden lg:block description'>
							Better Education For A Better World. Best Industry Leaders And
							Learn Courses Online <br /> “Learning to code has the inadvertent
							effect of teaching you how to think,” says Adrian Degus. <br />
							Better Education For A Better World. Best Industry Leaders And
							Learn Courses Online.
						</p>
						<Link to='/Courses'>
						<button className="border-2 border-red-500 bg-red-500 rounded-lg hover:bg-transparent  text-center tracking-wider duration-300">Get Started</button>
						</Link>
					</div>
				</SwiperSlide>
				<div ref={progressCircle} className="-mt-10 autoplay-progress" slot="container-end">
					<span  ref={progressContent}></span>
				</div>



			</Swiper>
		</>
	);
};

export default Banner;
