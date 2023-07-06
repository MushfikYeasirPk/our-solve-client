import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../Custom Hooks/UserAdmin';

const Dashboard = () => {
  // const isAdmin = true;
  const [isAdmin] = useAdmin();
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-base-300">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inLinkne-block w-6 h-6 stroke-current"><path strokeLinknecap="round" strokeLinknejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </label>
            </div>

            <div className="flex-1 px-2 mx-2">My DashBoard</div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                {isAdmin ? 
                <>
                <li><NavLink to='/' className={({ isActive }) => (isActive ? 'text-blue-700' : 'default')}>Home</NavLink></li>
                <li><NavLink to='mycart/msnsgeclasses' className={({ isActive }) => (isActive ? 'text-blue-700' : 'default')}>Manage Classes</NavLink></li>
                <li><NavLink to='mycart/manageusers' className={({ isActive }) => (isActive ? 'text-blue-700' : 'default')}>Manage Users</NavLink></li>
                </> 
                :
                 <>
                 <li><NavLink to='/' className={({ isActive }) => (isActive ? 'text-blue-700' : 'default')}>Home</NavLink></li>
                <li><NavLink to='mycart/myselectedclasses' className={({ isActive }) => (isActive ? 'text-blue-700' : 'default')}>My </NavLink></li>
                <li><NavLink to='mycart/myenrolledclasses' className={({ isActive }) => (isActive ? 'text-blue-700' : 'default')}>My Enrolled Classes</NavLink></li>
                 </>
                 
                 }
                

              </ul>
            </div>
          </div>
          {/* Page content here */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200">
            {/* Sidebar content here */}
            <li><NavLink to='/' className={({ isActive }) => (isActive ? 'text-blue-700' : 'default')}>Home</NavLink></li>
            <li><NavLink to='mycart/myselectedclasses' className={({ isActive }) => (isActive ? 'text-blue-700' : 'default')}>My Selected Classes</NavLink></li>
            <li><NavLink to='mycart/myenrolledclasses' className={({ isActive }) => (isActive ? 'text-blue-700' : 'default')}>My Enrolled Classes</NavLink></li>

          </ul>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;