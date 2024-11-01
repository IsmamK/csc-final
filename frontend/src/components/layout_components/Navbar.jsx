import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../../servicesData';

// Define navbar links dynamically
const navbarLinks = [
  { label: 'Home', path: 'home' },
  { label: 'About Us', path: 'about' },
  {
    label: 'Our Services',
    path: '',
    subItems: servicesData.map((service) => ({
      label: service.title,
      path: `/services/${service.slug}`,
    })),
  },
  { label: 'Projects', path: '/projects' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact Us', path: 'contact' },
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const handleDropdownToggle = () => setIsDropdownOpen(!isDropdownOpen);

  // Close dropdown when a link is clicked
  const handleLinkClick = () => setIsDropdownOpen(false);

  return (
    <div className="sticky top-0 bg-white shadow-lg z-50">
      <div className="navbar bg-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
              onClick={handleDropdownToggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              className={`menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ${
                isDropdownOpen ? 'block' : 'hidden'
              }`}
            >
              {navbarLinks.map((link, index) => (
                <li key={index}>
                  {link.subItems ? (
                    <details>
                      <summary className="cursor-pointer">{link.label}</summary>
                      <ul className="p-2">
                        {link.subItems.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link to={subItem.path} onClick={handleLinkClick}>
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <Link to={link.path} onClick={handleLinkClick}>
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <Link className="btn btn-ghost text-md">Logo</Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navbarLinks.map((link, index) => (
              <li key={index}>
                {link.subItems ? (
                  <details>
                    <summary className="cursor-pointer">{link.label}</summary>
                    <ul className="p-2">
                      {link.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link to={subItem.path}>{subItem.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link to={link.path}>{link.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end">
          <Link className="btn">Button</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
