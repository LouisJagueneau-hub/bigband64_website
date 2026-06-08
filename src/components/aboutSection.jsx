// AboutSection.jsx
// Mosaïque : design v1 (grande image + petite + vignette overlap + badge 40 ans)
// La mosaïque s'étend sur toute la hauteur de la colonne (texte + stats)
 
import { useEffect, useRef } from "react";
// import Numbers from "./Numbers";
import ArtcilesCard from "./articleCard.jsx";
import BB64_group1 from "../assets/BB64_group1.jpg";
import temp_image2 from "../assets/temp_image2.jpg";
import Logo_Sud_Ouest from "../assets/Logo_Sud_Ouest.png";
import RepImage from "../assets/RepImage.jpg";
 
export default function AboutSection() {
    const gridRef = useRef(null);
    const mosaicRef = useRef(null);
 
    useEffect(() => {
        const syncHeight = () => {
            if (gridRef.current && mosaicRef.current) {
                mosaicRef.current.style.height = gridRef.current.offsetHeight + "px";
            }
        };
        syncHeight();
        window.addEventListener("resize", syncHeight);
        return () => window.removeEventListener("resize", syncHeight);
    }, []);
 
    return (
        <section id="about" className="my-15 px-6 md:px-20 lg:px-30 xl:px-40">
 
            {/* ── Titre de section ── */}
            <div className="flex flex-col items-center mb-14">
                <div className="flex flex-row gap-1 items-center mb-4">
                    <span className="bg-primary h-3 w-2 rounded-t-full rounded-b-full" />
                    <span className="bg-primary h-5 w-2 rounded-t-full rounded-b-full" />
                    <span className="bg-primary h-10 w-2 rounded-t-full rounded-b-full" />
                    <span className="bg-primary h-5 w-2 rounded-t-full rounded-b-full" />
                    <span className="bg-primary h-3 w-2 rounded-t-full rounded-b-full" />
                </div>
                <h2 className="text-2xl md:text-4xl text-center font-bold font-fraunces mb-2">
                    Qui Sommes Nous ?
                </h2>
                <span className="text-md md:text-lg text-center font-fraunces text-primary font-semibold">
                    Une Association et un Orchestre
                </span>
            </div>
 
            {/* ── Grille principale : texte | mosaïque ── */}
            <div
                ref={gridRef}
                className="flex flex-col xl:grid xl:grid-cols-[1fr_380px] gap-12 items-stretch mb-14"
            >
                {/* Colonne texte — flex colonne pour pousser les stats en bas */}
                <div className="flex flex-col">
 
                    {/* Badge */}
                    <span className="inline-flex items-center gap-2 self-start bg-primary/10 border border-primary/30 rounded-full px-3 py-1 text-xs font-semibold text-primary uppercase tracking-widest mb-5 font-poppins">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Fondé en 1984
                    </span>
 
                    <h3 className="mb-4 font-semibold font-fraunces text-xl xl:text-2xl">
                        Une <span className="text-primary italic">association</span> créée il y a 40 ans.
                    </h3>
 
                    <p className="font-montserrat text-black/70 xl:text-[1rem] leading-7 xl:leading-8 mb-6">
                        LE BIG BAND 64, orchestre amateur basé à Lée, a été créé en 1984 par Pierre Domengé
                        (ancien maire de la commune).<br />
                        En 2024, sous l'impulsion de son nouveau chef Vincent Pommereau, et fort d'un effectif
                        renforcé, le Big Band 64 est reparti sur des fondamentaux, à savoir la musique swing des
                        big bands des années 1930 à 1950. Les répétitions hebdomadaires à la salle multi-activités
                        de Lée sont suivies assidûment tous les lundis de 18h à 20h, et sont désormais ouvertes
                        au public.
                    </p>
 
                    {/* Séparateur */}
                    <div className="w-14 h-px bg-gradient-to-r from-primary/40 to-transparent mb-6" />
 
                    <h4 className="mb-3 font-semibold font-fraunces text-lg md:text-xl">
                        Les danseurs sont aussi les bienvenus !
                    </h4>
                    <p className="font-montserrat text-black/70 xl:text-[1rem] leading-7 xl:leading-8 mb-8">
                        Notre mission ne s'arrête pas à la scène : nous travaillons avec des danseurs, des
                        associations et des écoles de danse, pour faire de chaque événement un moment festif
                        et convivial.
                    </p>
 
                    {/* Stats — poussées en bas */}
                    <div className="mt-auto">
                        <div className="flex divide-x divide-primary/20 border border-primary/20 rounded-xl overflow-hidden bg-white shadow-sm">
                            {[
                                { value: "+30", label: "Morceaux" },
                                { value: "+5",  label: "Concerts" },
                                { value: "+20", label: "Membres"  },
                            ].map(({ value, label }) => (
                                <div key={label} className="flex-1 py-4 px-3 text-center">
                                    <span className="block font-fraunces text-3xl font-bold text-primary">{value}</span>
                                    <span className="block font-poppins text-[11px] text-black/40 uppercase tracking-widest mt-1 font-semibold">{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
 
                {/* Mosaïque — v1 : grande + petite + overlap + badge 40 ans */}
                <div ref={mosaicRef} className="relative hidden xl:block">
                    {/* Grande image orchestre */}
                    <div className="absolute top-0 left-0 w-[280px] h-[300px] rounded-xl overflow-hidden shadow-lg">
                        <img src={BB64_group1} alt="Orchestre Big Band 64 sur scène" className="w-full h-full object-cover" />
                        <div className="absolute bottom-2.5 left-2.5 bg-white rounded-lg px-2.5 py-1 text-xs font-semibold text-black/80 font-poppins shadow">
                            🎷 Sur scène
                        </div>
                    </div>
 
                    {/* Petite image danseurs — bas droite */}
                    <div className="absolute bottom-0 right-0 w-[240px] h-[240px] rounded-xl overflow-hidden shadow-lg">
                        <img src={temp_image2} alt="Danseurs Big Band 64" className="w-full h-full object-cover" />
                    </div>
 
                    {/* Vignette overlap — bas gauche chevauchant la grande */}
                    <div className="absolute bottom-[60px] left-[30px] w-[160px] h-[120px] rounded-xl overflow-hidden shadow-lg border-[3px] border-white z-10">
                        <img src={BB64_group1} alt="Répétition Big Band 64" className="w-full h-full object-cover object-bottom" />
                    </div>
 
                    {/* Badge 40 ans */}
                    <div className="absolute top-[260px] right-[30px] bg-primary text-white font-fraunces font-bold text-xl rounded-xl px-3 py-2 z-20 shadow-lg leading-tight text-center">
                        40<br />
                        <span className="text-[11px] font-normal opacity-85">ans</span>
                    </div>
                </div>
            </div>
 
            {/* ── Presse ── */}
            <div>
                <div className="flex items-center gap-4 mb-2">
                    <h3 className="font-fraunces font-bold text-xl md:text-2xl whitespace-nowrap">
                        Ils parlent de nous
                    </h3>
                    <div className="flex-1 h-px bg-primary/20" />
                </div>
                <p className="font-montserrat text-black/50 text-sm leading-7 mb-8 max-w-lg">
                    Lors de nos évènements, certains médias couvrent notre actualité. Retrouvez leurs articles ci-dessous.
                </p>
 
                <div className="flex gap-6 flex-col md:grid md:grid-cols-2 xl:grid-cols-3">
                    <ArtcilesCard
                        name="SudOuest"
                        logo={Logo_Sud_Ouest}
                        date="20 Septembre 2025"
                        title="En images : autour d'une visite nocturne de l'expo Robert Doisneau, swing devant le musée des Beaux-Arts de Pau"
                        accentColor="#D42B2B"
                        link="https://www.sudouest.fr/culture/expositions/en-images-autour-d-une-visite-nocturne-de-l-expo-robert-doisneau-swing-devant-le-musee-des-beaux-arts-de-pau-25819715.php"
                    />
                    <ArtcilesCard
                        name="La Rép des Pyrénées"
                        logo={RepImage}
                        date="16 Juin 2025"
                        title="Lée : le Big Band 64 organise un concert pour la Fête de la musique"
                        accentColor="#1B6FD4"
                        link="https://www.larepubliquedespyrenees.fr/lieux/pyrenees-atlantiques/lee/lee-le-big-band-64-organise-un-concert-pour-la-fete-de-la-musique-24809391.php"
                    />
                </div>
            </div>
        </section>
    );
}