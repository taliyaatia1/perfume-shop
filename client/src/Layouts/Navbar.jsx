import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { UserDropdown } from "../components/Dropdown";
import { userLogoutAction } from "../Redux/Action/User";
import logo from "../New_logo.png";
import Logo_smells_good from "../Logo_smells_good.png";
import Checkout from "../pages/Checkout";
import { useState } from 'react';

const Navbar = () => {
  const dispatch = useDispatch();
  const userLoginReducer = useSelector((state) => state.userLoginReducer);
  const { userInfo } = userLoginReducer;

  const cartItems = useSelector((state) => state.cartReducer.cartItems || []);
  const qty = cartItems.reduce((total, item) => total + item.qty, 0);

  const logoutHandler = () => {
    dispatch(userLogoutAction());
  };

  const [open, setOpen] = useState(false);

  // Get the current location
  const location = useLocation();

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo_smells_good} className="h-40 w-50" alt="Smells Good text" />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <a href="/" className="block py-2 px-3 text-black rounded md:bg-transparent md:text-black md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">
          Home
        </a>
        <div className="flex items-center space-x-4">
          <UserDropdown logoutHandler={logoutHandler} />
          {location.pathname !== '/login' && (
            <div className="relative" onClick={() => setOpen(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              {qty > 0 && (
                <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center h-5 w-5 text-xs font-bold leading-none text-white bg-black rounded-full">
                  {qty}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
      <Checkout open={open} setOpen={setOpen} />
    </nav>
  );
};

export default Navbar;
