import {  NavLink } from "react-router-dom";






const NavigationBar = () => {


    const navigationLink = <>
        <li><NavLink className={({ isActive }) => isActive ? 'text-gradient' : 'text-white'} to='/'>Home</NavLink></li>

        <li><NavLink className={({ isActive }) => isActive ? 'text-gradient' : 'text-white'} to='/'>News</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'text-gradient' : 'text-white'} to='/'>Upcomming Events</NavLink></li>

        <li><NavLink className={({ isActive }) => isActive ? 'text-gradient' : 'text-white'} to='/'>Jobs</NavLink></li>



    </>






    return (
        <div className="navbar fixed z-10  bg-gradient-to-r md:px-5 bg-opacity-30 max-w-screen-xl text-white bg-black">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden   ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="space-y-5   bg-opacity-70 bg-black menu-compact dropdown-content mt-3 p-6 shadow  rounded-box w-52">

                        {navigationLink}

                    </ul>

                </div>




                <div>



                    <h1 className="font-bold flex items-center w-full"><span className="text-2xl text-gradient flex items-center">   Blog</span>  <sub className="font-mono md:w-0 w-1 text-sm ml-1"><small>Website</small></sub></h1>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="gap-10 font-semibold  menu-horizontal px-1">
                    {navigationLink}
                </ul>
            </div>
            <div className="navbar-end gap-3">


                <button className="btn-success  btn px-1">Logout</button>


            </div>

        </div>

    );
};

export default NavigationBar;