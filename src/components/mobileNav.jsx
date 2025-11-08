import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import BB64_Logo from '../assets/BB64_Logo.jpg';
import WhiteLogo from '../assets/BB64-White-Logo.png';
import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Popup from "./Popup";

export default function MobileNav({ background }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (id) => {
    setIsOpen(false); // ferme le menu mobile

    if (location.pathname !== "/") {
      navigate(`/#${id}`);
    } else {
      const section = document.getElementById(id);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 150);
      }
    }
  };

  return (
    <div className={`flex justify-between items-center w-full py-2 px-6 md:px-20 ${background ? "text-black" : "text-white"}`}>
      {/* Logo */}
      <div className="w-15">
        <img src={background ? BB64_Logo : WhiteLogo} alt="WhiteLogo" className="w-14 h-auto" />
      </div>

      {/* Hamburger Icon */}
      <div className="text-2xl cursor-pointer z-50" onClick={() => setIsOpen(true)}>
        <RxHamburgerMenu />
      </div>

      {/* Overlay flou */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Menu latéral */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <div
            className="text-white text-2xl rounded-md cursor-pointer p-2 bg-white/15"
            onClick={() => setIsOpen(false)}
          >
            <IoClose />
          </div>
        </div>

        <ul className="text-white/75 font-poppins text-[1.0rem] flex flex-col gap-2 px-6">
          <li
            className="cursor-pointer hover:bg-white/15 hover:text-white/90 py-2 px-2 rounded-md"
            onClick={() => {
              setIsOpen(false);
              navigate("/");
            }}
          >
            Accueil
          </li>
          <li
            className="cursor-pointer hover:bg-white/15 hover:text-white/90 py-2 px-2 rounded-md"
            onClick={() => handleScroll("about")}
          >
            A Propos
          </li>
          <li
            className="cursor-pointer hover:bg-white/15 hover:text-white/90 py-2 px-2 rounded-md"
            onClick={() => handleScroll("music")}
          >
            Morceaux
          </li>
          <li
            className="cursor-pointer hover:bg-white/15 hover:text-white/90 py-2 px-2 rounded-md"
            onClick={() => handleScroll("event")}
          >
            Évènements
          </li>
          <li
            className="cursor-pointer hover:bg-white/15 hover:text-white/90 py-2 px-2 rounded-md"
            onClick={() => setIsPopupOpen(true)}
          >
            Média
          </li>
          <li
            className="cursor-pointer hover:bg-white/15 hover:text-white/90 py-2 px-2 rounded-md"
            onClick={() => {
              setIsOpen(false);
              navigate("/contact");
            }}
          >
            Contact
          </li>
        </ul>

        <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
      </div>
    </div>
  );
}
