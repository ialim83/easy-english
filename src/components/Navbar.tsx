import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
// import Header from "./Header";
// import { FaBookReader } from "react-icons/fa";
import { useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import SearchBar from "./SearchBar";
import { Button } from "flowbite-react";
import { MdLocalPhone } from "react-icons/md";

const Navbar = () => {
  const auth = useAuth();
  // console.log(auth);
  const [nav, setNav] = useState(false);

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleLogout = async () => {
    if (auth) {
      await auth.logout();
    }
  };

  const changedBackground = () => {
    if (window.scrollY >= 10) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  window.addEventListener("scroll", changedBackground);

  return (
    <>
      {/* <div className=""><Header /</div> */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 right-0 z-50 transition bg-slate-100  text-pink-500 font-bold"
            : "bg-white font-bold text-black"
        }
      >
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                onClick={handleClick}
                tabIndex={0}
                role="button"
                className="btn btn-ghost "
              >
                {click ? (
                  <FaRegTimesCircle className="w-5 h-5" />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                )}
                {/* menu */}
              </div>
              <ul
                tabIndex={0}
                className={
                  click
                    ? "menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-box w-52 text-green-400 dark:text-slate-400 border-2 border-green-400"
                    : "dropdown-content right-96"
                }
              >
                <li>
                  <Link onClick={closeMobileMenu} to={"/"}>
                    Home
                  </Link>
                </li>

                <li>
                  <Link onClick={closeMobileMenu} to={"/about"}>
                    About
                  </Link>
                </li>
                {!auth?.user && (
                  <>
                    <li>
                      <Link onClick={closeMobileMenu} to={"/login"}>
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link onClick={closeMobileMenu} to={"/register"}>
                        Sign Up
                      </Link>
                    </li>
                  </>
                )}

                {auth?.user && (
                  <>
                    <li>
                      <Link onClick={closeMobileMenu} to={"/ssc"}>
                        SSC
                      </Link>
                    </li>
                    <li>
                      <Link onClick={closeMobileMenu} to={"/hsc"}>
                        HSC
                      </Link>
                    </li>
                    <li>
                      <Link onClick={closeMobileMenu} to={"/degree"}>
                        Degree
                      </Link>
                    </li>
                    <li>
                      <Link onClick={closeMobileMenu} to={"/dashboard"}>
                        Dashboard
                      </Link>
                    </li>
                  </>
                )}

                {auth?.user && (
                  <li>
                    <Button
                      type="button"
                      gradientDuoTone="purpleToPink"
                      className="w-flexDirection: 'column',"
                      onClick={handleLogout}
                      // className="btn bg-red-500 text-white"
                    >
                      Logout
                    </Button>
                  </li>
                )}
              </ul>
            </div>

            <Link
              onClick={closeMobileMenu}
              to={"/"}
              className="btn btn-ghost text-xl ml-[-20px]"
            >
              {/* <img src={"/man.jpg"}/> */}
              <img src={auth?.user?.photoURL || "/man.jpg"} className="w-10 border-2 rounded-full"  />
              <span className="heading2 ">Easy English</span>
            </Link>
          </div>

          <div className="hidden md:flex z-50">
            <SearchBar />
          </div>
          {/* <> */}
            {/* Desktop menu */}
            {/* <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-0">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              {!auth?.user && (
                <>
                  <li>
                    <Link to={"/login"}>Login</Link>
                  </li>
                  <li>
                    <Link to={"/register"}>Register</Link>
                  </li>
                </>
              )}
              {auth?.user && (
                <li>
                  <Link to={"/dashboard"}>Dashboard</Link>
                </li>
              )}
            </ul>
          </div> */}
          {/* </> */}
          <div className="navbar-end space-x-2 mr-3">
            {auth?.user ? (
              <Button
                pill
                size="sm"
                type="button"
                gradientDuoTone="purpleToPink"
                // className="w-flexDirection: 'column',"
                onClick={handleLogout}
                // className="btn bg-red-500 text-white"
              >
                Logout
              </Button>
            ) : (
              <Link to={"/login"}>
                <Button
                  pill
                  size="sm"
                  type="button"
                  gradientDuoTone="purpleToPink"
                >
                  Sign In
                </Button>
              </Link>
            )}
            <div className="avatar">
              <div
                className={
                  nav
                    ? "w-10 rounded-full border border-pink-600 animate-pulse"
                    : "w-10 rounded-full border-2 animate-pulse"
                }
              >
                <ul className="flex items-center justify-center gap-2">
                  <li className="p-2  hover:text-rose-500 transition-all">
                    <a href="tel:+8801751337773">
                      <MdLocalPhone size={20} className="" />
                    </a>
                  </li>
                </ul>
                {/* <img src={auth?.user?.photoURL || "/man.jpg"} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
