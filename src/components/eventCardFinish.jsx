// EventCardFinish.jsx
// Props : image, date, title, location, description
 
import { FaCalendar } from "react-icons/fa";
import { IoIosPin } from "react-icons/io";
import { IoCheckmarkCircle } from "react-icons/io5";
 
export default function EventCardFinish({ image, date, title, location, description }) {
    return (
        <div className="bg-white rounded-xl border border-[#EDE0D4] overflow-hidden flex flex-col">
            {/* Photo bannière */}
            {image ? (
                <img
                    src={image}
                    alt={title}
                    className="w-full h-44 object-cover grayscale-[30%]"
                />
            ) : (
                <div className="w-full h-44 bg-[#C4A882] flex items-center justify-center">
                    <span className="text-white/50 text-xs font-semibold uppercase tracking-widest">Photo</span>
                </div>
            )}
 
            {/* Body */}
            <div className="p-4 flex flex-col flex-1">
                <p className="flex items-center gap-1.5 text-[11px] text-black/40 mb-1">
                    <FaCalendar className="text-[10px]" /> {date}
                </p>
                <h3 className="font-fraunces text-base font-bold text-black/85 mb-1">{title}</h3>
                <p className="flex items-center gap-1.5 text-[11px] text-black/40 mb-3">
                    <IoIosPin className="text-sm flex-shrink-0" /> {location}
                </p>
                <p className="text-xs text-black/55 leading-relaxed flex-1">{description}</p>
 
                {/* Pill terminé */}
                <span className="inline-flex items-center gap-1.5 self-start mt-4 bg-[#F0E6DC] text-black/40 text-[10px] font-bold font-poppins px-2.5 py-1 rounded-full uppercase tracking-widest">
                    <IoCheckmarkCircle className="text-xs" /> Terminé
                </span>
            </div>
        </div>
    );
}
