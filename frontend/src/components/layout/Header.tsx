import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useAuthStore } from "../../state/store";

export const Header: React.FC = () => {
  // const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [adminIsOpen, setAdminIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const adminDropdownRef = useRef<HTMLDivElement | null>(null);
  const { userInfo, setCredentials } = useAuthStore();

  useEffect(() => {
    setCredentials({
      id: 2,
      name: "John Doe",
      email: "john@email.com",
      token: "JohnJohnJohn",
      isAdmin: true,
    });
  }, [setCredentials]);

  useEffect(() => {
    const closeDropdown = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
      if (
        adminDropdownRef.current &&
        !adminDropdownRef.current.contains(e.target as Node)
      ) {
        setAdminIsOpen(false);
      }
    };

    document.addEventListener("mousedown", closeDropdown);
    return () => document.removeEventListener("mousedown", closeDropdown);
  }, []);

  return (
    <header className="bg-blue-500 py-3 text-white">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          {/* <img src={logo} alt='Shop' className='w-10 h-10' /> */}
          <span className="text-xl font-semibold">Shop</span>
        </Link>
        <div className="flex items-center space-x-8">
          <Link
            to="/"
            className="text-white-700 block px-4 py-2 text-sm hover:bg-blue-800"
            role="menuitem"
          >
            Home
          </Link>
          <Link
            to="/information"
            className="text-white-700 block px-4 py-2 text-sm hover:bg-blue-800"
            role="menuitem"
          >
            Information
          </Link>
          {userInfo ? (
            <div className="relative inline-block text-left" ref={dropdownRef}>
              <div>
                <button
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center space-x-2"
                >
                  <FaUser className="h-5 w-5" />
                  <span data-testid="user-info-name">{userInfo.name}</span>
                  {isOpen ? (
                    <FaChevronUp className="h-5 w-5" />
                  ) : (
                    <FaChevronDown className="h-5 w-5" />
                  )}
                </button>
              </div>

              {isOpen && (
                <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Profile
                    </Link>
                    <button
                      // onClick={logoutHandler}
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="flex items-center space-x-2">
              <FaUser className="h-5 w-5" />
              <span>Sign In</span>
            </Link>
          )}
          {/* Admin Links */}
          {userInfo && userInfo.isAdmin && (
            <div
              className="relative inline-block text-left"
              ref={adminDropdownRef}
            >
              <button
                type="button"
                onClick={() => setAdminIsOpen(!adminIsOpen)}
                className="text-white-700 flex items-center space-x-2 px-4 py-2 hover:bg-blue-800"
                // className="text-white-700 block px-4 py-2 text-sm hover:bg-gray-800"
              >
                <span>Admin Function</span>
                {adminIsOpen ? (
                  <FaChevronUp className="h-5 w-5" />
                ) : (
                  <FaChevronDown className="h-5 w-5" />
                )}
              </button>
              {adminIsOpen && (
                <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <Link
                      to="/admin/product-list"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Products
                    </Link>
                    <Link
                      to="/admin/order-list"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Orders
                    </Link>
                    <Link
                      to="/admin/user-list"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Users
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
