import { useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoIosPin } from "react-icons/io";
 
function Countdown({ targetDate }) {
    const [parts, setParts] = useState({ d: 0, h: 0, m: 0, s: 0 });
 
    useEffect(() => {
        const tick = () => {
            const diff = new Date(targetDate) - new Date();
            if (diff <= 0) return;
            setParts({
                d: Math.floor(diff / 86400000),
                h: Math.floor((diff % 86400000) / 3600000),
                m: Math.floor((diff % 3600000) / 60000),
                s: Math.floor((diff % 60000) / 1000),
            });
        };
        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, [targetDate]);
 
    const pad = (n) => String(n).padStart(2, "0");
 
    return (
        <div className="flex gap-2">
            {[
                { val: parts.d,    label: "jours" },
                { val: pad(parts.h), label: "h"   },
                { val: pad(parts.m), label: "min" },
                { val: pad(parts.s), label: "sec" },
            ].map(({ val, label }) => (
                <div
                    key={label}
                    className="flex flex-col items-center bg-white/10 rounded-lg px-2.5 py-1.5 min-w-[42px]"
                >
                    <span className="font-fraunces text-lg font-bold text-white leading-none">{val}</span>
                    <span className="text-[9px] text-white/40 uppercase tracking-widest mt-0.5">{label}</span>
                </div>
            ))}
        </div>
    );
}
 
export default function EventCard({
    hero = false,
    title,
    date,
    month,
    year,
    targetDate,
    location,
    link,
    ctaLabel = "En savoir plus",
    description,
}) {
    /* ── HERO VARIANT ── */
    if (hero) {
        return (
            <div className="relative bg-[#1C1612] rounded-2xl p-6 sm:p-8 overflow-hidden flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                {/* Cercle déco */}
                <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-primary opacity-[0.08] pointer-events-none" />
 
 
                {/* Date block */}
                <div className="flex flex-col items-center justify-center bg-primary rounded-xl px-5 py-4 mt-6 sm:mt-0 flex-shrink-0 min-w-[72px]">
                    <span className="font-fraunces text-5xl font-bold text-white leading-none">{date}</span>
                    <span className="text-xs font-bold text-white/85 uppercase tracking-widest mt-1">{month}</span>
                    <span className="text-[10px] text-white/50 mt-0.5">{year}</span>
                </div>
 
                {/* Content */}
                <div className="flex-1">
                    <h3 className="font-fraunces text-xl sm:text-2xl font-bold text-white mb-2 mt-5 sm:mt-0">
                        {title}
                    </h3>
                    <p className="flex items-center gap-1.5 text-[11px] text-white/45 mb-3">
                        <IoIosPin className="text-sm flex-shrink-0" />
                        {location}
                    </p>
                    <p className="text-sm text-white/60 leading-relaxed mb-5">{description}</p>
 
                    <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-4 flex-wrap ">
                        <a
                            href={link}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold font-poppins px-5 py-2 rounded-lg hover:bg-primary/85 transition"
                        >
                            <FaLongArrowAltRight /> {ctaLabel}
                        </a>
                        {targetDate && <Countdown targetDate={targetDate} />}
                    </div>
                </div>
            </div>
        );
    }
 
    /* ── STANDARD VARIANT ── */
    return (
        <div className="flex bg-white rounded-xl border border-[#EDE0D4] overflow-hidden">
            {/* Date col */}
            <div className="flex flex-col items-center justify-center bg-primary/8 border-r border-[#f5d4be] px-5 py-4 min-w-[72px] flex-shrink-0">
                <span className="font-fraunces text-3xl font-bold text-primary leading-none">{date}</span>
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest mt-1">{month}</span>
                <span className="text-[10px] text-black/30 mt-0.5">{year}</span>
            </div>
 
            {/* Body */}
            <div className="flex flex-col justify-center px-5 py-4 flex-1">
                <h3 className="font-fraunces text-[17px] font-bold text-black/85 mb-1.5">{title}</h3>
                <p className="flex items-center gap-1.5 text-[11px] text-black/40 mb-2">
                    <IoIosPin className="text-sm flex-shrink-0" />
                    {location}
                </p>
                <p className="text-[12.5px] text-black/60 leading-relaxed">{description}</p>
                <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary font-poppins mt-3 hover:gap-2.5 transition-all"
                >
                    <FaLongArrowAltRight className="text-[0.75rem]" /> En savoir plus
                </a>
            </div>
        </div>
    );
}