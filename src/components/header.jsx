import Nav from "./nav"
import MobileNav from "./mobileNav"

export default function Header({background}) {
    return(
        <div className="absolute top-0 left-0 w-full z-20">
            <div className="flex lg:hidden">
                <MobileNav background={background}/>
            </div>
            <div className="hidden lg:flex">
                <Nav background={background}/>
            </div>
        </div>
    )
}