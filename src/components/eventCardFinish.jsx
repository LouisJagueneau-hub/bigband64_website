import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa"
import { MdOutlinePinDrop } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";

export default function EventCardFinish({ image, location, title, description, date}) {
    return (
        <div className="relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            {/* Container principal */}
            <div className="flex flex-col sm:flex-row">

                {/* Section Date - Orange */}
                <div className="w-full sm:w-38 relative">
                    <div className='bg-black/40 absolute w-full h-full'></div>
                    <img className='w-full h-full object-cover' src={image} alt="image" />
                </div>

                {/* Section Contenu */}
                <div className="flex-1 p-6">
                    <div className="flex items-start mb-4">
                        <h3 className="text-2xl font-bold text-gray-900">
                            {title}
                        </h3>
                    </div>

                    {/* Date */}
                    <div className="flex items-start gap-2 mb-4 text-gray-700">
                        <FaRegCalendarAlt className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <span className="text-sm font-medium">{date}</span>
                    </div>

                    {/* Localisation */}
                    <div className="flex items-start gap-2 mb-4 text-gray-500">
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

