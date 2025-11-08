import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Header from "../components/header"
import NextEventCard from "../components/nextEventCard";
import Numbers from "../components/numbers";
import ArtcilesCard from "../components/articleCard";
import EventCard from "../components/eventCard";
import EventCardFinish from "../components/eventCardFinish";
import MusicPlayer from "../components/musicPlayer";
import Footer from "../components/footer";
import Network from "../components/network";
import ScrollToTop from "../components/scrollToTop";

import Taint_What_You_Do_Shim_Sham from "../assets/01_Tain't_What_You_Do-Shim Sham.mp3";
import Basic_Basie_Lée from "../assets/02_Basic_Basie_Lée.mp3"
import In_a_Mellow_Tone_Lée from "../assets/03_In_a_Mellow_Tone_Lée.mp3"
import Perdido_Lée from "../assets/04_Perdido_Lée.mp3"
import All_of_MeLée from "../assets/05_All_of_MeLée.mp3"
import Dont_Get_Around_Much_Anymore from "../assets/06_Don't_Get_Around_Much_Anymore.mp3"
import Fly_me_to_the_moon from "../assets/07_Fly_me_to_the_moon.mp3"
import Blues_Machine_Lée from "../assets/08_Blues_Machine_Lée.mp3"
import Georgia_on_my_mind from "../assets/09_Georgia_on_my_mind.mp3"
import In_the_Mood from "../assets/10_In_the_Mood.mp3"
import Fever_Lée from "../assets/11_Fever_Lée.mp3"
import Why_dont_you_do_right from "../assets/12_Why_don't_you_do_right.mp3"
import Saint_Louis_Blues from "../assets/13_Saint_Louis_Blues.mp3"
import On_the_Sunny_side from "../assets/14_On_the_Sunny_side.mp3"
import Moten_swing from "../assets/15_Moten_swing.mp3"
import Relax_MAX from "../assets/16_Relax_MAX.mp3"
import I_can_t_give_you_anything_but_love from "../assets/17_I_can_t_give_you_anything_but_love.mp3"
import Aint_Misbehavin from "../assets/18_Ain't_Misbehavin.mp3"
import Moten_Swing from "../assets/19_MotenSwing.mp3"
import Route_66 from "../assets/20_Route_66.mp3"
import The_Lady_is_a_Tramp from "../assets/21_The_Lady_is_a_Tramp.mp3"

import { FaLongArrowAltRight } from "react-icons/fa"
import { IoMdMusicalNote } from "react-icons/io";

import BB64_Dancer1 from '../assets/BB64_Dancer1.jpg'
import BB64_Dancer2 from '../assets/BB64_Dancer2.jpg'
import BB64_Instrument from '../assets/BB64_Instrument.jpg'
import BB64_group1 from '../assets/BB64_group1.jpg'
// import BB64_Hero_Image from '../assets/BB64_Hero-Image.webp'
import BB64_Hero_Image from '../assets/BB64_BG_temp.jpg'
import temp_image2 from '../assets/temp_image2.jpg'
import Logo_Sud_Ouest from '../assets/Logo_Sud_Ouest.png'
import RepImage from '../assets/RepImage.jpg'


export default function Home() {

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: i * 0.2 },
        }),
    };

    return (
        <>
            <motion.section
                id="home"
                className="min-h-screen bg-cover relative bg-[position:85%_40%]"
                style={{ backgroundImage: `url(${BB64_Hero_Image})` }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="absolute inset-0 bg-black/50 pointer-events-none" />
                <Header className="relative z-20" />

                <div className="relative z-10 px-6 md:px-20 lg:px-30 xl:px-40 flex flex-col justify-center xl:justify-start xl:items-start items-center pt-[110px] lg:pt-[140px] xl:pt-[160px]">

                    <motion.div custom={0} className="mb-6 w-20 h-[5px] bg-primary rounded-md" />

                    <motion.div variants={fadeInUp} custom={1} className="mb-10 text-center xl:text-start">
                        <h1 className="text-primary text-4xl sm:text-6xl md:text-8xl font-fraunces font-bold mb-3">
                            Big Band 64
                        </h1>
                        <h2 className="text-white/90 text-3xl xl:text-5xl font-fraunces font-bold">
                            L’âme du Swing dans les Pyrénées
                        </h2>
                    </motion.div>

                    <motion.p
                        variants={fadeInUp}
                        custom={2}
                        className="font-poppins md:text-[0.90rem] xl:text-[1rem] text-white/85 text-center xl:text-justify leading-6 xl:w-160 mb-6"
                    >
                        Nous sommes un groupe de musiciens passionnés, réunis autour du swing. Ouverts aux danseurs, nous animons vos soirées avec nos morceaux Jazz : Lindy Hop, Balboa, Blues, West Coast Swing, Tcha-Tcha… et bientôt des rythmes latinos !
                    </motion.p>

                    <motion.div variants={fadeInUp} custom={3} className="flex flex-col sm:flex-row items-center font-poppins gap-4 mb-15">
                        <button
                            onClick={() => document.getElementById("event").scrollIntoView({ behavior: "smooth" })}
                            className="bg-primary border border-primary rounded-md px-4 py-2 text-white flex items-center gap-2 hover:bg-primary/80 transition"
                        >
                            <FaLongArrowAltRight className="text-xl" /> Nos Évènements
                        </button>
                        <button
                            onClick={() => document.getElementById("music").scrollIntoView({ behavior: "smooth" })}
                            className="bg-black/50 border border-primary rounded-md px-4 py-2 text-primary flex items-center gap-2 hover:bg-black/70 transition"
                        >
                            <IoMdMusicalNote className="text-xl" /> Nos Morceaux
                        </button>
                    </motion.div>

                    <motion.div variants={fadeInUp} custom={4} className="mb-8 xl:absolute right-0 bottom-5">
                        <NextEventCard />
                    </motion.div>

                    <motion.div variants={fadeInUp} custom={5} className="hidden xl:absolute xl:flex right-0 bottom-70">
                        <Network />
                    </motion.div>
                </div>
            </motion.section>

            <section id="about" className="my-15 px-6 md:px-20 lg:px-30 xl:px-40">
                <div className="flex flex-col items-center mb-10"> { /* Title */}
                    <div className="flex flex-row gap-1 items-center mb-4">
                        <span className="bg-primary h-3 w-2 rounded-t-full rounded-b-full"></span>
                        <span className="bg-primary h-5 w-2 rounded-t-full rounded-b-full"></span>
                        <span className="bg-primary h-10 w-2 rounded-t-full rounded-b-full"></span>
                        <span className="bg-primary h-5 w-2 rounded-t-full rounded-b-full"></span>
                        <span className="bg-primary h-3 w-2 rounded-t-full rounded-b-full"></span>
                    </div>
                    <h2 className="text-2xl md:text-4xl text-center font-bold font-fraunces mb-2">Qui Sommes Nous ?</h2>
                    <span className="text-md md:text-lg text-center font-fraunces text-primary font-semibold">Une Association et un Orchestre</span>
                </div>
                <div className="flex flex-col gap-6 xl:flex-row xl:items-stretch mb-10">
                    <div className="xl:w-2/3 mr-10"> {/* Texte */}
                        <h3 className="mb-3 font-semibold font-fraunces text-xl xl:text-2xl md:text-2xl">Une <span className="text-primary italic">association</span> créée il y a 10 ans.</h3>
                        <p className="font-montserrat text-black/75 xl:text-[1.0rem] text-justify leading-7 xl:leading-8 mb-6">
                            LE BIG BAND 64, orchestre amateur basé à Lée, a été créé en 1984 par Pierre Domengé (ancien maire de la commune).<br />
                            En 2024, sous l'impulsion de son nouveau chef Vincent Pommereau, et fort d'un effectif renforcé, le Big Band 64 est reparti sur des fondamentaux, à savoir la musique swing des big bands des années 1930 à 1950.
                            Les répétitions hebdomadaires à la salle multi-activités de Lée sont suivies assidûment tous les lundis de 18h à 20 heures, et sont désormais ouvertes au public. <br />



                        </p>
                        <h4 className="mb-3 font-semibold font-fraunces text-lg md:text-xl">Les danseurs sont aussi la bienvenue !</h4>
                        <p className="font-montserrat text-black/75 text-justify xl:text-[1.0rem] leading-7 xl:leading-8 mb-8">
                            Notre mission ne s’arrête pas à la scène : nous travaillons avec des danseurs, des
                            associations et des écoles de danse, pour faire de chaque événement un moment festif et convivial.
                        </p>

                        <div>
                            <Numbers />
                        </div>
                    </div>
                    <div className="p-6 bg-[#ffe4d3] rounded-md shadow-md xl:w-1/3 relative flex flex-col gap-4"> {/* Photo */}
                        <img className="h-1/2 object-cover rounded-md shadow-md" src={BB64_group1} alt="BB64_group1" />
                        <img className="h-1/2 rounded-md xl:object-cover shadow-md" src={temp_image2} alt="BB64_Dancer2" />
                        {/* <img className="w-full h-50 object-cover rounded-md shadow-md" src={BB64_Instrument} alt="BB64_Instrument" /> */}

                        {/* <div className="grid grid-cols-1 gap-4 h-full border-2">
                            <img className="rounded-md xl:h-50 xl:object-cover shadow-md" src={BB64_Dancer1} alt="BB64_Dancer1" />
                        </div> */}
                    </div>
                </div>
                <div>
                    <h3 className="mb-3 font-semibold font-fraunces text-xl md:text-2xl mt-10">Ils parlent de nous...</h3>
                    <p className="font-montserrat text-black/75 text-justify leading-7 xl:leading-8 xl:text-[1.1rem] mb-10">
                        Lors de nos évènements, nous avons la chance d’avoir la présence de certains médias à nos côtés. Si vous le souhaitez vous pouvez consulter les articles liés à notre association.
                    </p>
                    <div className="flex gap-6 flex-col md:grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"> {/* Card des articles de presse */}
                        <ArtcilesCard name="SudOuest" logo={Logo_Sud_Ouest} date='20 Septembre 2025' title='En images : autour d’une visite nocturne de l’expo Robert Doisneau, swing devant le musée des Beaux-Arts de Pau' color="#fbe1e1" link="https://www.sudouest.fr/culture/expositions/en-images-autour-d-une-visite-nocturne-de-l-expo-robert-doisneau-swing-devant-le-musee-des-beaux-arts-de-pau-25819715.php?fbclid=IwZXh0bgNhZW0CMTEAAR5gsgwFcSHXV6TPjRoGUueg3XBQ0DW39suz6UoKHWt680bam7lETMX3IL5W6g_aem_o0j7oAOknrhM-fAfgWJ1dw&sfnsn=scwspwa" />
                        <ArtcilesCard name="La Rép des Pyrénées" logo={RepImage} date='16 Juin 2025' title='Lée : le Big Band 64 organise un concert pour la Fête de la musique' color="#B4E4FC" link="https://www.larepubliquedespyrenees.fr/lieux/pyrenees-atlantiques/lee/lee-le-big-band-64-organise-un-concert-pour-la-fete-de-la-musique-24809391.php" />

                    </div>
                </div>


            </section>

            <section id="event" className="py-15 bg-[#fff2e9]">
                <div className=" mx-6 md:mx-20 lg:mx-30">
                    <div className="flex flex-col items-center mb-10"> { /* Title */}
                        <div className="flex flex-row gap-1 items-center mb-4">
                            <span className="bg-primary h-3 w-2 rounded-t-full rounded-b-full"></span>
                            <span className="bg-primary h-5 w-2 rounded-t-full rounded-b-full"></span>
                            <span className="bg-primary h-10 w-2 rounded-t-full rounded-b-full"></span>
                            <span className="bg-primary h-5 w-2 rounded-t-full rounded-b-full"></span>
                            <span className="bg-primary h-3 w-2 rounded-t-full rounded-b-full"></span>
                        </div>
                        <h2 className="text-2xl md:text-4xl font-bold font-fraunces mb-2">Évènements</h2>
                        <span className="text-md md:text-lg font-fraunces text-primary font-semibold">Les futurs et les passés</span>
                    </div>

                    <div>
                        <div className="mb-10 xl:mx-40">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="h-3 w-3 bg-primary rounded-full"></span>
                                <h4 className="text-xl md:text-2xl xl:text-3xl font-fraunces font-semibold">Prochainement</h4>
                            </div>
                            <div className="flex flex-col gap-5">
                                <EventCard title='Soirée Swing au Navy Blue avec ALLonSwinguer' year="2025" date='21' month=" Novembre" location="8 rue du souvenir Français, 64230 LESCAR, France" link={"https://www.navy-blue.fr/soiree-swing"} description={<>Bienvenue dans un lieu féérique, doté d’un parquet adapté à tous les danseurs. Vibrez aux rythmes d’une playlist swing sélectionnée et laissez-vous porter par l’ambiance. Laissez-vous tenter par une initiation gratuite pour découvrir les plaisirs de la danse. Cerise sur le gâteau : un orchestre live pour faire vibrer la soirée. Un petit creux : pensez à reserver votre plateau! </>} />
                                <EventCard title='Téléthon Nousty' date='07' month=" Décembre" year="2025" location="64420 NOUSTY, France" description={<>Le Big Band 64 vous donne rendez-vous à Nousty ce samedi à partir de midi pour un concert au profit du Téléthon.
                                    Venez partager un moment convivial et solidaire en musique, autour du swing, du jazz et de la bonne humeur.
                                    Un beau moment de générosité et de rythme à ne pas manquer ! </>} />

                            </div>
                        </div>

                        <div className="mb-10 xl:mx-40">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="h-3 w-3 bg-primary rounded-full"></span>
                                <h4 className="text-xl md:text-2xl font-fraunces font-semibold">Terminé</h4>
                            </div>
                            <div className="flex flex-col gap-6">
                                <EventCardFinish image={BB64_Dancer1} date="05 Septembre 2025" title='Danse ta ville' location="11 Rue Mathieu Lalanne, 64000 Pau, France" description={<> 
                                    Merci au public et particulièrement à tous les danseurs, au Lindy Rocket Club, à la Swingin'Compagnie pour l'énergie Swing partagée avec le Big Band 64 au Musée des beaux-arts de Pau
                                </>} />
                                <EventCardFinish image={BB64_Dancer2} date="22 juin 2025" title='Fête de la musique' location="Lée, France" description={<>Un immense merci à la commune de Lée et les danseurs d'être venus partager leur passion lors de la fête de la musique. Remerciement pour les animations offertes du Lindy Rocket Club,Let's Dance et La Swingin'compagnie aux claquettes.</>} />

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="music" className="my-15 mx-6 md:px-20 lg:px-30">
                <div className="flex flex-col items-center mb-10"> { /* Title */}
                    <div className="flex flex-row gap-1 items-center mb-4">
                        <span className="bg-primary h-3 w-2 rounded-t-full rounded-b-full"></span>
                        <span className="bg-primary h-5 w-2 rounded-t-full rounded-b-full"></span>
                        <span className="bg-primary h-10 w-2 rounded-t-full rounded-b-full"></span>
                        <span className="bg-primary h-5 w-2 rounded-t-full rounded-b-full"></span>
                        <span className="bg-primary h-3 w-2 rounded-t-full rounded-b-full"></span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-bold font-fraunces mb-2">Notre répertoire</h2>
                    <span className="text-md md:text-lg font-fraunces text-primary font-semibold">Nos musiques et morceaux</span>
                    <p className="font-montserrat text-black/75 text-center  text-[0.9rem] leading-7 xl:leading-8 xl:text-[1.0rem] mt-5">
                        Nos musiques et nos morceaux s'adressent à toutes catégories de danse swing (Shim Sham inclus !)
                    </p>
                </div>

                <div className="flex flex-col gap-8 md:grid md:grid-cols-2">
                    {/* <MusicPlayer title="Tain't What You Do - Shim Sham" artist='BigBand64' duration='2:59' audioSrc={Taint_What_You_Do_Shim_Sham} /> */}
                    {/* <MusicPlayer title="Basic Basie Lée" artist='BigBand64' duration='4:26' audioSrc={Basic_Basie_Lée} />
                    <MusicPlayer title="In a Mellow Tone Lée" artist='BigBand64' duration='2:16' audioSrc={In_a_Mellow_Tone_Lée} /> */}
                    <MusicPlayer title="Perdido Lée" artist='BigBand64' duration='3:10' audioSrc={Perdido_Lée} />
                    {/* <MusicPlayer title="All of MeLée" artist='BigBand64' duration='2:48' audioSrc={All_of_MeLée} />
                    <MusicPlayer title="Don't Get Around Much Anymore" artist='BigBand64' duration='2:21' audioSrc={Dont_Get_Around_Much_Anymore} />
                    <MusicPlayer title="Fly me to the moon" artist='BigBand64' duration='2:24' audioSrc={Fly_me_to_the_moon} />
                    <MusicPlayer title="Blues Machine Lée" artist='BigBand64' duration='3:30' audioSrc={Blues_Machine_Lée} /> */}
                    <MusicPlayer title="Georgia on my mind" artist='BigBand64' duration='3:56' audioSrc={Georgia_on_my_mind} />
                    <MusicPlayer title="In the Mood" artist='BigBand64' duration='3:54' audioSrc={In_the_Mood} />
                    {/* <MusicPlayer title="Fever Lée" artist='BigBand64' duration='3:17' audioSrc={Fever_Lée} />
                    <MusicPlayer title="Why don't you do right" artist='BigBand64' duration='3:16' audioSrc={Why_dont_you_do_right} />
                    <MusicPlayer title="Saint Louis Blues" artist='BigBand64' duration='3:14' audioSrc={Saint_Louis_Blues} />
                    <MusicPlayer title="On the Sunny side." artist='BigBand64' duration='2:30' audioSrc={On_the_Sunny_side} />
                    <MusicPlayer title="Moten swing" artist='BigBand64' duration='1:56' audioSrc={Moten_swing} />
                    <MusicPlayer title="Relax MAX" artist='BigBand64' duration='2:31' audioSrc={Relax_MAX} />
                    <MusicPlayer title="I can't give you anything but love" artist='BigBand64' duration='3:18' audioSrc={I_can_t_give_you_anything_but_love} />
                    <MusicPlayer title="Ain't Misbehavin" artist='BigBand64' duration='2:44' audioSrc={Aint_Misbehavin} /> */}
                    <MusicPlayer title="Moten Swing" artist='BigBand64' duration='3:12' audioSrc={Moten_Swing} />
                    {/* <MusicPlayer title="Route 66" artist='BigBand64' duration='3:07' audioSrc={Route_66} />
                    <MusicPlayer title="The Lady is a Tramp" artist='BigBand64' duration='2:33' audioSrc={The_Lady_is_a_Tramp} /> */}


                </div>

            </section>

            <section className="bg-[#fff2e9] py-15">
                <div className="mx-6 md:px-20 lg:px-30 xl:px-40">
                    <div className="flex flex-col items-center">
                        <h2 className="text-lg xl:text-3xl sm:text-2xl font-bold font-fraunces mb-3 text-center">Le Big band 64 recrute !</h2>
                        <p className="text-[0.80rem] md:text-[0.90rem] xl:text-[1.1rem] text-black/75 leading-7 text-center mb-8">Trompette, trombonne, bon lecteur, ayant déjà joué du jazz, savoir improviser serait un plus mais non nécessaire.
                            Suivez nous ou contactez nous via Facebook
                        </p>
                        <Link to='/contact' className="bg-primary px-4 py-2 text-white font-poppins font-semibold rounded-md cursor-pointer text-sm md:text-md xl:text-lg">Nous Contacter</Link>
                    </div>
                </div>

            </section>

            <Footer />
        </>
    )
};
