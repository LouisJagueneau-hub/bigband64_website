import { FaCalendar } from "react-icons/fa";
import { IoIosPin } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa"

export default function NextEventCard() {
    return (
        <div className="text-white px-8 py-6 border-1 border-white/50 rounded-md sm:w-[370px] flex flex-col relative">
            <span className=" absolute border-t-5 border-l-5 h-6 w-6 border-primary/50 top-3 left-3"></span>
            <span className=" absolute border-b-5 border-r-5 h-6 w-6 border-primary/50 bottom-3 right-3"></span>

            <span className="text-primary text-[0.85rem] font-semibold font-poppins mb-2">Évènement à venir</span>
            <h4 className="text-xl font-poppins font-bold mb-4 text-white/90">Swing’n’Roll Live by Danza Mi Pasión</h4>

            <p className="font-poppins text-[0.90rem] text-white/70 flex items-center gap-2 mb-4"><FaCalendar /> 13 Mars 2026 - 21 h 30</p>


            <a href="https://www.facebook.com/jeandenis.lakane" target="_blank" className="text-primary text-[0.90rem] font-poppins font-semibold flex items-center gap-2">
                En savoir plus <FaLongArrowAltRight className="text-[1.0rem]" />
            </a>
        </div>
    )
}



{/* <div className="flex flex-row gap-2 mb-4">
                <IoIosPin className="text-white/70" />
                <div className="flex flex-col">
                    <p className="font-poppins text-[0.80rem] text-white/70"> Théâtre Municipal de Pau</p>
                    <p className="text-white/75 font-poppins text-[0.70rem]">Place Marguerite Laborde, 64000 Pau</p>
                </div>
            </div> */}