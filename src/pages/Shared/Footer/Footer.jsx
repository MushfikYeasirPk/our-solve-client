import React from 'react';
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer className="footer p-2 flex justify-center text-center bg-slate-800 ">
       
      <footer
		
			className='main-footer text-center text-gray-300 bg-gray-900 pt-6'>
			<div className='container mx-auto grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 pb-8'>
				<div className='logo-part py-6 px-12'>
					<Link to='/home'>
						<img
							className='w-40 mb-4'
							src='https://i.ibb.co/HzzW0Xv/logo.png'
							alt='footer logo'
						/>
					</Link>
					<p className='text-sm'>
						{" "}
						Great lesson ideas and lesson plans for students, that students can
						observe their learning.
					</p>
				</div>
				<div className='ul-section'>
					<ul className='text-left'>
						<h5 className='pt-6 text-lg uppercase font-black mb-4 text-red-500'>
							Programs
						</h5>
						<li className='mb-4 hover:text-red-500'>
							{/* <FontAwesomeIcon className='mt-1' icon={faAnglesRight} /> */}
							<Link to='/home'> Web Development </Link>
						</li>
						<li className='mb-4 hover:text-red-500'>
							{/* <FontAwesomeIcon className='mt-1' icon={faAnglesRight} /> */}
							<Link to='/home'> Digital Marketing </Link>
						</li>
						<li className='mb-4 hover:text-red-500'>
							{/* <FontAwesomeIcon className='mt-1' icon={faAnglesRight} /> */}
							<Link to='/home'> Res.Web Design </Link>
						</li>
						<li className='mb-4 hover:text-red-500'>
							{/* <FontAwesomeIcon className='mt-1' icon={faAnglesRight} /> */}
							<Link to='/home'> SEO (Advance) </Link>
						</li>
					</ul>
				</div>
				<div className='ul-section'>
					<ul className='text-left'>
						<h5 className='pt-6 uppercase font-black text-lg mb-4 text-red-500'>
							About Us
						</h5>
						<li className='mb-4 hover:text-red-500'>
							{/* <FontAwesomeIcon className='mt-1' icon={faAnglesRight} /> */}
							<Link to='/home'> Student List </Link>
						</li>
						<li className='mb-4 hover:text-red-500'>
							{/* <FontAwesomeIcon className='mt-1' icon={faAnglesRight} /> */}
							<Link to='/home'> Developers </Link>
						</li>
						<li className='mb-4 hover:text-red-500'>
							{/* <FontAwesomeIcon className='mt-1' icon={faAnglesRight} /> */}
							<Link to='/home'> Our Terms </Link>
						</li>
						<li className='mb-4 hover:text-red-500'>
							{/* <FontAwesomeIcon className='mt-1' icon={faAnglesRight} /> */}
							<Link to='/home'> Site Map </Link>
						</li>
					</ul>
				</div>
				<div className='ul-section'>
					<ul className='text-left'>
						<h5 className='pt-6 text-lg uppercase font-black mb-4 text-red-500'>
							Support
						</h5>
						<li className='mb-4 hover:text-red-500'>
							{/* <FontAwesomeIcon className='mt-1' icon={faAnglesRight} /> */}
							<Link to='/home'> Career Guides</Link>
						</li>
						<li className='mb-4 hover:text-red-500'>
							{/* <FontAwesomeIcon className='mt-1' icon={faAnglesRight} /> */}
							<Link to='/home'> Contsct Us </Link>
						</li>
						<li className='mb-4 hover:text-red-500'>
							{/* <FontAwesomeIcon className='mt-1' icon={faAnglesRight} /> */}
							<Link to='/home'> Conditions </Link>
						</li>
						<li className='mb-4 hover:text-red-500'>
							{/* <FontAwesomeIcon className='mt-1' icon={faAnglesRight} /> */}
							<Link to='/home'> Guidlines </Link>
						</li>
					</ul>
				</div>
			</div>
			<hr className='new' />
			<div className='text-center py-6'>
				<span>Copyright- © 2023 - </span>
				<a className='text-red-500 font-black' href='test'>
					Team Our Solve
				</a>
			</div>
		</footer>
      </footer>

    </div>
  );
};

export default Footer;