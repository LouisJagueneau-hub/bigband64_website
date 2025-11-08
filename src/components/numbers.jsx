import NumberCard from "./numberCard"
export default function Numbers() {
    return(
        <div className="flex flex-col gap-3 sm:flex-row lg:gap-10 xl:gap-15">
            <NumberCard number='+30' desc='Morceaux' />
            <NumberCard number='+5' desc='Concerts' />
            <NumberCard number='+20' desc='Membres' />
        </div>
    )
}