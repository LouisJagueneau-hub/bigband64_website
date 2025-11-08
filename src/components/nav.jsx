import { Link } from "react-router-dom"
import BB64_White_Logo from '../assets/BB64-White-Logo.png'
import BB64_Logo from '../assets/BB64_Logo.jpg'
import { useState } from "react";
import Popup from "./Popup";
import { useNavigate, useLocation } from "react-router-dom";

export default function Nav({ background }) {

    const navigate = useNavigate();
    const location = useLocation();
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleScroll = (id) => {
        // Si on n’est pas sur la home → on navigue vers la home avec le hash (#id)
        if (location.pathname !== "/") {
            navigate(`/#${id}`);
        } else {
            // Si on est déjà sur la home → on scroll directement
            const section = document.getElementById(id);
            if (section) section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className={`px-6 md:px-20 lg:px-30 mt-5 w-full ${background ? "text-black/75" : "text-white/75 "}`}>
            <ul className="font-poppins lg:text[0.8rem] text-[1.0rem] xl:text-[1.1rem] flex justify-center items-center lg:gap-8 gap-10 xl:gap-12">
                <li className={`cursor-pointer ${background ? "hover:bg-black/15 hover:text-black/90" : "hover:bg-white/15 hover:text-white/90"}  py-2 px-2 rounded-md `}><Link to={'/'}>Accueil</Link> </li>
                <li
                    className={`cursor-pointer ${background ? "hover:bg-black/15 hover:text-black/90" : "hover:bg-white/15 hover:text-white/90"} py-2 px-2 rounded-md`}
                    onClick={() => handleScroll("about")}
                >
                    A Propos
                </li>
                <li
                    className={`cursor-pointer ${background ? "hover:bg-black/15 hover:text-black/90" : "hover:bg-white/15 hover:text-white/90"} py-2 px-2 rounded-md`}
                    onClick={() => handleScroll("music")}
                >
                    Morceaux
                </li>
                <li><img className="w-auto h-16 xl:h-25 cursor-pointer" src={background ? BB64_Logo : BB64_White_Logo} alt="BB64_White_Logo" /></li>
                <li
                    className={`cursor-pointer ${background ? "hover:bg-black/15 hover:text-black/90" : "hover:bg-white/15 hover:text-white/90"} py-2 px-2 rounded-md`}
                    onClick={() => handleScroll("event")}
                >
                    Évènements
                </li>
                <li className={`cursor-pointer ${background ? "hover:bg-black/15 hover:text-black/90" : "hover:bg-white/15 hover:text-white/90"} py-2 px-2 rounded-md`}
                    onClick={() => setIsPopupOpen(true)}>
                    Média
                </li>
                <li className={`cursor-pointer ${background ? "hover:bg-black/15 hover:text-black/90" : "hover:bg-white/15 hover:text-white/90"} py-2 px-2 rounded-md`}><Link to={'/contact'}>Contact</Link></li>
            </ul>
            <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
        </div>
    )
}