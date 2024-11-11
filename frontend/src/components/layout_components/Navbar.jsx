import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { servicesData } from '../../servicesData';



const Navbar = () => {
  const [servicesData,setServicesData] = useState([])
  const apiUrl = import.meta.env.VITE_API_URL;

useEffect(()=>{
  fetch(`${apiUrl}/services/`)
  .then(res=>res.json())
  .then(data=>{
    setServicesData(data)
  })
},[])

// Define navbar settings and links with custom color values
const navbarData = {
  logo: 'Logo Text or Image Path',
  bgColor: '#ffffff',         // Custom background color
  textColor: '#000000',        // Custom text color
  buttonBgColor: '#007bff',    // Custom button background color
  buttonTextColor: '#ffffff',  // Custom button text color
  navbarLinks: [
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
  ],
};

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const handleDropdownToggle = () => setIsDropdownOpen(!isDropdownOpen);

  // Close dropdown when a link is clicked
  const handleLinkClick = () => setIsDropdownOpen(false);

  return (
    <div style={{ backgroundColor: navbarData.bgColor }} className="sticky top-0 shadow-lg z-50">
      <div className="navbar" style={{ backgroundColor: navbarData.bgColor }}>
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
                style={{ color: navbarData.textColor }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              className={`menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow ${isDropdownOpen ? 'block' : 'hidden'}`}
              style={{ backgroundColor: navbarData.bgColor, color: navbarData.textColor }}
            >
              {navbarData.navbarLinks.map((link, index) => (
                <li key={index}>
                  {link.subItems ? (
                    <details>
                      <summary className="cursor-pointer">{link.label}</summary>
                      <ul className="p-2">
                        {link.subItems.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link to={subItem.path} onClick={handleLinkClick} style={{ color: navbarData.textColor }}>
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <Link to={link.path} onClick={handleLinkClick} style={{ color: navbarData.textColor }}>
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-md" style={{ color: navbarData.textColor }}>
            {navbarData.logo}
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1" style={{ color: navbarData.textColor }}>
            {navbarData.navbarLinks.map((link, index) => (
              <li key={index}>
                {link.subItems ? (
                  <details>
                    <summary className="cursor-pointer">{link.label}</summary>
                    <ul className="p-2">
                      {link.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link to={subItem.path} style={{ color: navbarData.textColor }}>
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link to={link.path} style={{ color: navbarData.textColor }}>
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end">
          <Link
            className="btn"
            style={{
              backgroundColor: navbarData.buttonBgColor,
              color: navbarData.buttonTextColor,
            }}
          >
            Button
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
