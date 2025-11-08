import { FaLongArrowAltRight } from "react-icons/fa"

export default function ArtcilesCard({name, date, title, link, logo, color}) {
    return(
        <div style={{ borderLeftColor: color }} className={`py-6 px-10 border-y-1 border-y-black/20 border-r-1 border-r-black/20 border-l-14 rounded-xl`}>
            <div className="flex flex-col">
                <div className="flex flex-row items-center mb-2 gap-4">
                    <div className="md:w-15 md:h-15 xl:w-10 xl:h-10 w-10 h-10">
                        <img className="rounded-sm w-full h-full" src={logo} alt={logo} />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg md:text-xl font-semibold font-fraunces">{name}</span>
                        <span className="font-fraunces text-[0.70rem] md:text-[0.90rem]">{date}</span>
                    </div>
                </div>
                <div className="bg-black h-[2px] w-full mb-4"></div>
                <div className="mb-8">
                    <h4 className="font-fraunces text-md md:text-xl xl:text-2xl">{title}</h4>
                </div>  
                <a href={link} target="_blank" className="text-black/70 font-light font-fraunces flex flex-row items-center gap-2 text-lg underline">Voir l'article</a>
            </div>
        </div>
    )
}