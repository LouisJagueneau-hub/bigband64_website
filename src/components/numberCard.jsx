export default function NumberCard({number, desc}) {
    return(
        <div className="px-8 py-4 rounded-md bg-[#f9fafb] flex flex-col items-center">
            <span className="text-primary font-poppins font-light text-3xl sm:text-4xl md:text-5xl">{number}</span>
            <span className="font-poppins text-sm md:text-md text-black/90">{desc}</span>
        </div>
    )
}