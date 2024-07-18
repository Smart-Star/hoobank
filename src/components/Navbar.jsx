import { useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleMenu = () => {
    setToggleMenu((prev) => !prev);
  };

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <a href="/">
        <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      </a>

      <ul className="sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((link) => (
          <li
            key={link.label}
            className="font-poppins font-normal cursor-pointer text-[16px] text-white mr-10 last:mr-0 hover:text-secondary transition-all duration-300"
          >
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden">
        <button type="button" className="flex-1 flex justify-end items-center" onClick={handleMenu}>
          <img
            src={toggleMenu ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
          />
        </button>

        {toggleMenu && (
          <div className="p-6 mx-4 my-2 bg-black-gradient absolute top-20 right-0 min-w-[140px] rounded-xl sidebar">
            <ul className="flex flex-col justify-center items-center flex-1">
              {navLinks.map((link) => (
                <li
                  key={link.label}
                  className="font-poppins font-normal cursor-pointer text-[16px] text-white mb-4 last:mb-0 hover:text-secondary transition-all duration-300"
                  onClick={handleMenu}
                >
                  <a className="" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
