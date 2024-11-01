import React from 'react'

const Footer = ({divider,bgColor,textColor}) => {
  return (

    <footer className="footer  font-bold p-20 shadow-xl" style={{ backgroundColor: bgColor, color: textColor }}>
  <nav className='mx-auto'>
    <h6 className="font-extrabold text-xl">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav className='mx-auto'>
    <h6 className=" font-extrabold text-xl ">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav className='mx-auto'> 
    <h6 className=" font-extrabold text-xl">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
  )
}

export default Footer
