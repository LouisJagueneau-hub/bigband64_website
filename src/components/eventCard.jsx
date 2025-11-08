import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa"
import { MdOutlinePinDrop } from "react-icons/md";

export default function EventCard({ date, month, location, title, description, link, year }) {
    return (
        <div className="relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            {/* Container principal */}
            <div className="flex flex-col sm:flex-row">
                
                {/* Section Date - Orange */}
                <div className="relative bg-gradient-to-br from-orange-500 to-orange-600 text-white flex flex-col items-center justify-center px-8 py-6">
                    <div className="relative z-10 text-center">
                        <div className="text-7xl font-fraunces font-semibold mb-1">
                            {date}
                        </div>
                        <div className="text-lg font-medium font-fraunces">
                            {month}
                        </div>
                        <div className="text-sm font-light font-fraunces">
                            {year}
                        </div>
                    </div>
                </div>

                {/* Section Contenu */}
                <div className="flex-1 p-6">
                    <div className="flex flex-col md:flex-row items-start md:justify-between mb-4">
                        <h3 className="text-2xl font-bold text-gray-900">
                            {title}
                        </h3>
                        <a 
                            href={link}
                            target='_blank' 
                            className={`${link == undefined ? "hidden" : "flex"} underline items-center gap-1 text-orange-500 hover:text-orange-600 font-medium text-sm whitespace-nowrap md:ml-4 mt-1 transition-colors  `}
                        >
                            En savoir plus
                            
                        </a>
                    </div>

                    {/* Localisation */}
                    <div className="flex items-start gap-2 mb-4 text-gray-700">
                        <MdOutlinePinDrop className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span className="text-sm font-medium">{location}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed text-justify">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}

