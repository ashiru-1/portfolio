import { useState } from "react";
import { motion } from "motion/react";
import { mySocials } from "../constants";
function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a className="nav-link" href="#home">
          Home
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#about">
          About
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#work">
          Work
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#contact">
          Contact
        </a>
      </li>
      <li>
         <div className="flex gap-3">
                {mySocials.map((social, index) => (
                  <a href={social.href} key={index} target="_blank" rel="noopener noreferrer">
                    <img src={social.icon} className="w-6 h-6" alt={social.name} />
                  </a>
                ))}
              </div>
      </li>
    </ul>
  );
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-black pt-5">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0 px-8">
          <a
            href="/"
            className="text-3xl font-bold transition-colors text-white-400 hover:text-[#613ACF] flex items-center gap-2 py-3"
          >
            <img src="/assets/socials/cypher.png" alt="logo" className="w-12 h-12 object-contain"/>
            <span>Cypher</span>
          </a>
          {/* Mobile: Hamburger menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          {/* Desktop: Show nav */}
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
