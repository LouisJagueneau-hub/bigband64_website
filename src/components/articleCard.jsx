import { FaLongArrowAltRight } from "react-icons/fa";

export default function ArtcilesCard({ name, logo, date, title, accentColor = "#E8601C", link }) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="group flex bg-white rounded-xl overflow-hidden border border-black/8 shadow-sm hover:shadow-md transition-shadow duration-200 no-underline"
        >
            {/* Accent latéral coloré */}
            <div className="w-1 flex-shrink-0" style={{ background: accentColor }} />

            <div className="flex flex-col p-5 flex-1">
                {/* Header : logo + nom + date */}
                <div className="flex items-center gap-3 pb-3 border-b border-black/8 mb-4">
                    <img src={logo} alt={name} className="h-7 w-7 object-contain rounded" />
                    <div>
                        <p className="font-poppins font-bold text-[13px] text-black/85 leading-none mb-0.5">{name}</p>
                        <p className="font-poppins text-[11px] text-black/40 leading-none">{date}</p>
                    </div>
                </div>

                {/* Titre de l'article */}
                <p className="font-fraunces font-bold text-[15px] text-black/85 leading-snug mb-4 flex-1">
                    {title}
                </p>

                {/* CTA */}
                <span
                    className="inline-flex items-center gap-1.5 text-[12px] font-semibold font-poppins transition-gap duration-150 group-hover:gap-2.5"
                    style={{ color: accentColor }}
                >
                    Voir l'article <FaLongArrowAltRight className="text-[0.75rem]" />
                </span>
            </div>
        </a>
    );
}