import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row md:justify-between mx-auto border-zinc-800 border-t-2 py-8 px-6 md:px-20 gap-8 md:gap-0 text-center md:text-left">
        <div>
          <h3 className="text-2xl font-semibold text-orange-500">FitZone</h3>
          <p className="text-sm text-zinc-500 mb-3">
            Train harder. Get stronger.
          </p>
          <p className="text-zinc-400">123 Fitness Road, </p>
          <p className="text-zinc-400">+91 56787 34566</p>
          <p className="text-zinc-400">Mon–Sat: 6AM–9PM</p>
          <div className="flex justify-center md:justify-start gap-3 text-[24px] text-zinc-400 pt-4">
            <FontAwesomeIcon className="social-icon" icon={faInstagram} />
            <FontAwesomeIcon className="social-icon" icon={faYoutube} />
            <FontAwesomeIcon className="social-icon" icon={faFacebook} />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-orange-500">Quick Links</h3>
          {/* TODO: Replace with link or a tag */}
          <div className="footer-links">
            <Link to="/pricing">Pricing</Link>
          </div>
          <div className="footer-links">
            <Link to="/trainers">Trainers</Link>
          </div>
          <HashLink to="/#testimonials" className="footer-links">
            Testimonials
          </HashLink>
          <div className="footer-links">
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-zinc-800 text-center py-2">
        {/* FOOTER BOTTOM BAR */}
        <p className="text-sm text-zinc-400">
          © 2025 FitZone. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
