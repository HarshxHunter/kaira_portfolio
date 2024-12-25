import React from 'react';
import logo from "../assets/kevinRushLogo.png";

const Navbar = () => {
  return (
    <nav className="mb-10 flex items-center justify-between py-2 px-10 backdrop-blur-md bg-white/30 dark:bg-neutral-800/30 border border-white/10 dark:border-neutral-900/20">
      <div className="flex flex-shrink-0 items-center">
        <img className="mr-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="px-4 py-4 flex items-center justify-center gap-6 font-inter">

        <a href='#home' className='navItems'>Home</a>
        <a href='#about' className='navItems'>About</a>
        <a href='#projects' className='navItems'>Projects</a>
        <a href='#experience' className='navItems'>Experience</a>
        <a href='#contact' className='navItems'>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
