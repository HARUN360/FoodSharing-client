import logo from '../../public/logo.jpg'
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";



const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    const navigate = useNavigate();
    const handleSignOut = () => {
        logOut()
            .then(
                navigate(location?.state ? location.state : '/')
            )
            .catch()
    }


    const navlinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/availablefoods'>Available Foods</NavLink></li>
        {user && <>
            <li><NavLink to='/addfood'>Add Food</NavLink></li>
            <li><NavLink to='/manage'>Manage My Foods</NavLink></li>
            <li><NavLink to='/request'>My Food Request</NavLink></li>
        </>
        }
        <li><NavLink to='/register'>Register</NavLink></li>
    </>
    return (
        <div>
            {/* extra navbar */}
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl md:text-4xl flex justify-center items-center gap-2"> <span><img src={logo} alt="" className='h-10' /> </span> <span>Foods</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex items-center">

                        <div>
                            {
                                user ?
                                    <div className="dropdown dropdown-end mr-2">

                                        <div className="w-10">
                                            <div className="dropdown">
                                                <div tabIndex={0} role="button" className=" m-1"><img src={user?.photoURL || "https://i.ibb.co/fd53zKP/pofile.jpg"} className="rounded-full" /></div>
                                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                                    <li><a>{user?.displayName}</a></li>
                                                    <li><button className="btn btn-sm" onClick={handleSignOut}> Sign Out</button></li>
                                                </ul>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    : " "
                            }
                        </div>
                        <div>
                            {
                                user ? <button className="btn" onClick={handleSignOut}> Sign Out</button> : <button><NavLink to='/login' className="btn">Login</NavLink></button>
                            }
                        </div>
                    </div>
                    {/* light */}

                </div>

            </div>
        </div>
    );
};

export default Navbar;