import { useState, useEffect } from "react";
import { FaCalendar } from "react-icons/fa";
import { FaLongArrowAltRight, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
 
export default function NextEventCard() {
    const [visible, setVisible] = useState(false);
 
    // Petit délai avant l'apparition pour ne pas parasiter le chargement initial
    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 1200);
        return () => clearTimeout(timer);
    }, []);
 
    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0, y: 24, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 16, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed bottom-6 right-6 z-50 w-[320px] sm:w-[360px]"
                >
                    {/* Glow derrière la carte */}
                    <div className="absolute -inset-1 rounded-xl bg-primary/20 blur-lg pointer-events-none" />
 
                    <div className="relative bg-black/80 backdrop-blur-md border border-white/10 rounded-xl px-5 py-4 shadow-2xl overflow-hidden">
                        {/* Accent top bar */}
                        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-primary/60 to-transparent rounded-t-xl" />
 
                        {/* Coins décoratifs */}
                        <span className="absolute border-t-2 border-l-2 h-4 w-4 border-primary/70 top-3 left-3 rounded-tl-sm" />
                        <span className="absolute border-b-2 border-r-2 h-4 w-4 border-primary/70 bottom-3 right-3 rounded-br-sm" />
 
                        {/* Bouton fermer */}
                        <button
                            onClick={() => setVisible(false)}
                            className="absolute top-3 right-3 text-white/40 hover:text-white/90 transition-colors p-1"
                            aria-label="Fermer"
                        >
                            <FaTimes className="text-xs" />
                        </button>
 
                        {/* Badge */}
                        <div className="flex items-center gap-2 mb-3">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                            </span>
                            <span className="text-primary text-[0.72rem] font-semibold font-poppins uppercase tracking-widest">
                                Évènement à venir
                            </span>
                        </div>
 
                        {/* Titre */}
                        <h4 className="text-white/95 font-poppins font-bold text-base mb-3 leading-snug pr-4">
                            NAVY BLUE
                        </h4>
 
                        {/* Date */}
                        <p className="font-poppins text-[0.82rem] text-white/55 flex items-center gap-2 mb-4">
                            <FaCalendar className="text-primary/80 text-[0.75rem]" />
                            12 juin 2026
                        </p>
 
                        {/* CTA */}
                        <a
                            href="https://www.navy-blue.fr/reservation"
                            target="_blank"
                            rel="noreferrer"
                            className="group inline-flex items-center gap-2 text-primary text-[0.82rem] font-poppins font-semibold hover:gap-3 transition-all duration-200"
                        >
                            En savoir plus
                            <FaLongArrowAltRight className="text-sm transition-transform duration-200 group-hover:translate-x-1" />
                        </a>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}