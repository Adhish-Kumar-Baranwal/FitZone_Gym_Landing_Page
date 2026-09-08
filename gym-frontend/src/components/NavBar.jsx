import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Menu, X } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const NavBar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      name: "Home",
      slug: "/#home",
    },
    {
      name: "Pricing",
      slug: "/pricing",
    },
    {
      name: "Trainers",
      slug: "/trainers",
    },
    {
      name: "Contact",
      slug: "/contact",
    },
  ];

  return (
    <header className="navBar sticky top-0 z-50">
      <nav className="flex-center">
        <div className="flex-center">
          <Link to="/" className="text-orange-500 text-2xl font-bold">
            FitZone
          </Link>
        </div>
        <ul className="hidden ml-auto md:flex-center">
          {navItems.map((item, index) => (
            <li key={item.name}>
              <HashLink
                to={item.slug}
                className={`px-2 cursor-pointer transition-colors duration-300 ease-in-out ${index === navItems.length - 1 ? "text-orange-500 hover:text-orange-600" : "text-zinc-400 hover:text-white"}`}
              >
                {item.name}
              </HashLink>
            </li>
          ))}
        </ul>

        {/* Side NavBar */}

        <button
          onClick={() => setIsOpen(true)}
          className="ml-auto md:hidden text-zinc-400"
        >
          <Menu size={24} />
        </button>

        {/* Backdrop */}
        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 z-40 md:hidden"
          />
        )}

        {/* Slide in drawer */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-zinc-900 z-50 flex flex-col p-6 transition-transform duration-300 ease-in-out md:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex-center mb-8">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="text-orange-500 text-2xl font-bold"
            >
              FitZone
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className=" text-zinc-400 ml-auto hover:text-white"
            >
              <X size={28} />
            </button>
          </div>

          <ul className="flex flex-col gap-6">
            {navItems.map((item, index) => (
              <li key={item.name}>
                <HashLink
                  to={item.slug}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg ${index === navItems.length - 1 ? "text-orange-500" : "text-zinc-400"}`}
                >
                  {item.name}
                </HashLink>
              </li>
            ))}
          </ul>

          <div className="flex gap-4 text-[22px] text-zinc-400 mt-auto pt-6 border-t border-zinc-800">
            <FontAwesomeIcon className="social-icon" icon={faInstagram} />
            <FontAwesomeIcon className="social-icon" icon={faYoutube} />
            <FontAwesomeIcon className="social-icon" icon={faFacebook} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
