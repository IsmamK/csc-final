import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../../servicesData';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const handleDropdownToggle = () => setIsDropdownOpen(!isDropdownOpen);

  // Close dropdown when a link is clicked
  const handleLinkClick = () => setIsDropdownOpen(false);

  return (
    <div className="sticky top-0 shadow-lg z-50 "> {/* Ensure sticky with z-index */}
      <div className="navbar bg-black text-csc">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              className={`menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ${
                isDropdownOpen ? 'block' : 'hidden'
              }`}
            >
              <li>
                <Link to="home" onClick={handleLinkClick}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" onClick={handleLinkClick}>
                  About Us
                </Link>
              </li>
              <li>
                <details>
                  <summary className="cursor-pointer">Our Services</summary>
                  <ul className="p-2">
                    {servicesData.map((service) => (
                      <li key={service.id}>
                        <Link to={`/services/${service.slug}`} onClick={handleLinkClick}>
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
              <li>
                <Link to="/projects" onClick={handleLinkClick}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/gallery" onClick={handleLinkClick}>
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="contact" onClick={handleLinkClick}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <Link to="home" className="btn btn-ghost">
            <img src="csclogo.png" alt="Company Logo" className="h-40 absolute left-10 hidden lg:block" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="home">Home</Link>
            </li>
            <li>
              <Link to="about">About Us</Link>
            </li>
            <li>
              <details>
                <summary className="cursor-pointer">Our Services</summary>
                <ul className="p-2">
                  {servicesData.map((service) => (
                    <li key={service.id}>
                      <Link to={`/services/${service.slug}`}>{service.title}</Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        
            <img src="csclogo.png" alt="Company Logo" className="h-40 absolute right-10 lg:hidden" />
     
    
  
      </div>
    </div>
  );
};

export default Navbar;
