// EventSection.jsx
import { useState } from "react";
import EventCard from "./EventCard";
import EventCardFinish from "./EventCardFinish";
import BB64_Dancer1 from "../assets/BB64_Dancer1.jpg";
import BB64_Dancer2 from "../assets/BB64_Dancer2.jpg";
 
export default function EventSection() {
    const [tab, setTab] = useState("upcoming");
 
    return (
        <section id="event" className="py-15 bg-[#FFF6EF]">
            <div className="mx-6 md:mx-20 lg:mx-30 xl:mx-60 2xl:mx-80">
 
                {/* ── Titre ── */}
                <div className="flex flex-col items-center mb-10">
                    <div className="flex flex-row gap-1 items-center mb-4">
                        <span className="bg-primary h-3 w-2 rounded-t-full rounded-b-full" />
                        <span className="bg-primary h-5 w-2 rounded-t-full rounded-b-full" />
                        <span className="bg-primary h-10 w-2 rounded-t-full rounded-b-full" />
                        <span className="bg-primary h-5 w-2 rounded-t-full rounded-b-full" />
                        <span className="bg-primary h-3 w-2 rounded-t-full rounded-b-full" />
                    </div>
                    <h2 className="text-2xl md:text-4xl font-bold font-fraunces mb-2">Évènements</h2>
                    <span className="text-md md:text-lg font-fraunces text-primary font-semibold">
                        Les futurs et les passés
                    </span>
                </div>
 
                {/* ── Tabs ── */}
                <div className="flex justify-center mb-10">
                    <div className="flex gap-1 bg-[#F0E6DC] rounded-full p-1">
                        {["upcoming", "past"].map((t) => (
                            <button
                                key={t}
                                onClick={() => setTab(t)}
                                className={`px-6 py-2 rounded-full text-sm font-semibold font-poppins transition-all duration-200 ${
                                    tab === t
                                        ? "bg-primary text-white"
                                        : "text-black/50 hover:text-black/70"
                                }`}
                            >
                                {t === "upcoming" ? "Prochainement" : "Terminé"}
                            </button>
                        ))}
                    </div>
                </div>
 
                {/* ── Contenu ── */}
                {tab === "upcoming" && (
                    <div className="flex flex-col gap-4">
                        {/* Hero card — prochain évènement */}
                        <EventCard
                            hero
                            title="Évènement NAVY BLUE"
                            date="12"
                            month="Juin"
                            year="2026"
                            targetDate="2026-06-12T19:00:00"
                            location="NAVY BLUE, Rue du Souvenir Français, 64230 Lescar"
                            link="https://www.navy-blue.fr/reservation"
                            ctaLabel="En savoir plus"
                            description="Dès 19h00, profitez d'un repas convivial suivi d'une initiation au Shim Sham. À partir de 21h30, place à la danse avec le Big Band 64 pour une grande soirée à 10 €. Swing, West Coast Swing, boogie et démonstrations !"
                        />
                        <EventCard
                            title="Fête de la musique à Lée"
                            date="21"
                            month="Juin"
                            year="2026"
                            location="Salle multi-activité, Allée de l'église, 64320 Lée"
                            link="https://www.lee64.fr/culture-sports-et-loisirs/les-associations#big-band-64"
                            description="Le Big Band 64 vous convie à Lée pour un dimanche après-midi pour le plus grand plaisir des mélomanes et des danseurs."
                        />
                        <EventCard
                            title="Concert Live !"
                            date="21"
                            month="Nov."
                            year="2026"
                            location="Maison des associations, Allée Glain, Bayonne"
                            link="https://danse-feeling.fr/"
                            description="Le Big Band 64 et l'association Danse Feeling vous donnent rendez-vous à Bayonne. De 21h30 à 2h concert live, interlude DJ Michel."
                        />
                    </div>
                )}
 
                {tab === "past" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <EventCardFinish
                            image={BB64_Dancer1}
                            date="05 Septembre 2025"
                            title="Danse ta ville"
                            location="Musée des Beaux-Arts, Pau"
                            description="Merci au public et particulièrement à tous les danseurs, au Lindy Rocket Club, à la Swingin'Compagnie pour l'énergie Swing partagée avec le Big Band 64."
                        />
                        <EventCardFinish
                            image={BB64_Dancer2}
                            date="22 Juin 2025"
                            title="Fête de la musique"
                            location="Lée, France"
                            description="Un immense merci à la commune de Lée et les danseurs venus partager leur passion. Animations du Lindy Rocket Club, Let's Dance et La Swingin'compagnie."
                        />
                    </div>
                )}
            </div>
        </section>
    );
}