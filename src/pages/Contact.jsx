import { useState } from "react";
import { motion } from "framer-motion";
import { FaLocationDot, FaArrowRightLong } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { RiArrowRightSLine } from "react-icons/ri";
import Header from "../components/header";
import Footer from "../components/footer";

function Contact() {
    const [loading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");

    const contacts = [
        { icon: <IoIosMail />, name: "Téléphone", value: "06 76 67 23 59" },
        { icon: <FaLocationDot />, name: "Adresse", value: "Association AMVO Big Band 64 Mairie de Lée, 13 Avenue des Moulins 64320 Lée." },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatusMessage("");

        const formData = new FormData(e.target);

        try {
            const res = await fetch("https://formspree.io/f/xkgpdjok", {
                method: "POST",
                body: formData,
                headers: { Accept: "application/json" },
            });

            if (res.ok) {
                setStatusMessage("✅ Message envoyé avec succès !");
                e.target.reset();
            } else {
                setStatusMessage("❌ Une erreur est survenue. Réessayez plus tard.");
            }
        } catch (error) {
            setStatusMessage("❌ Une erreur réseau est survenue.");
        } finally {
            setLoading(false);
        }
    };

    // Animations
    const titleAnimation = {
        hidden: { opacity: 0, y: 30 },
        visible: (custom) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: custom },
        }),
    };

    const slideInLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: (custom) => ({
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, delay: custom },
        }),
    };

    const slideInRight = {
        hidden: { opacity: 0, x: 50 },
        visible: (custom) => ({
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, delay: custom },
        }),
    };

    return (
        <div className="min-h-screen flex flex-col">

                <Header background={true} />

            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-primary/5 to-primary/2 rounded-full blur-3xl"></div>
                </div>

                <div className="relative container mx-auto px-6 pt-[100px] xl:pt-[170px] text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={titleAnimation}
                        custom={0}
                    >
                        <span className="uppercase font-rem text-primary tracking-widest text-sm mb-2 block">
                            Nous Contacter
                        </span>
                        <h1 className="font-rem font-bold text-[45px] md:text-[55px] text-text dark:text-text-dark mb-4">
                            Envoyez un message
                        </h1>
                        <div className="w-20 h-0.5 bg-primary rounded-full mx-auto"></div>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <main className="container mx-auto px-6 py-[80px] flex-1">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 max-w-7xl mx-auto">
                    {/* Contact Information */}
                    <motion.section
                        className="lg:w-1/2"
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div className="mb-12" variants={slideInLeft} custom={0.1}>
                            <div className="flex items-center gap-3 mb-4">
                                <RiArrowRightSLine className="text-primary text-2xl" />
                                <h2 className="font-rem text-[1.8rem] font-medium text-text dark:text-text-dark">
                                    Restons en contact
                                </h2>
                            </div>
                            <p className="font-poppins text-text-muted dark:text-text-muted-dark leading-relaxed">
                                Prêt à rejoindre l'association ? Vous voulez nous entendre
                                près de chez vous ? Nous sommes toujours ouverts aux nouvelles
                                opportunités.
                            </p>
                        </motion.div>

                        <div className="space-y-8">
                            {contacts.map((contact, index) => (
                                <motion.div
                                    key={contact.name}
                                    className="group flex items-center gap-6 p-4 bg-bg-light dark:bg-bg-dark rounded-lg border border-black/10 dark:border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-md"
                                    variants={slideInLeft}
                                    custom={0.2 + index * 0.1}
                                >
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-primary/20 rounded-lg blur-lg group-hover:blur-xl transition-all duration-300"></div>
                                        <div className="relative bg-primary/10 text-primary p-4 rounded-lg group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                            <span className="text-xl">{contact.icon}</span>
                                        </div>
                                    </div>

                                    <div className="font-poppins">
                                        <span className="text-text-muted dark:text-text-muted-dark text-sm uppercase tracking-wider block mb-1">
                                            {contact.name}
                                        </span>
                                        <p className="text-text dark:text-text-dark text-lg font-medium group-hover:text-primary transition-colors duration-300">
                                            {contact.value}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Contact Form */}
                    <motion.section
                        className="lg:w-1/2"
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div
                            className="bg-bg-light dark:bg-bg-dark p-8 lg:p-10 rounded-lg border border-black/10 dark:border-white/10 shadow-lg"
                            variants={slideInRight}
                            custom={0.1}
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <RiArrowRightSLine className="text-primary text-2xl" />
                                <h2 className="font-rem text-[1.8rem] font-medium text-text dark:text-text-dark">
                                    Envoyer un message
                                </h2>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Nom"
                                    required
                                    className="w-full px-4 py-4 bg-bg dark:bg-bg-dark text-text dark:text-text-dark placeholder-text-muted dark:placeholder-text-muted-dark font-poppins border border-black/15 dark:border-white/15 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                                />

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                    className="w-full px-4 py-4 bg-bg dark:bg-bg-dark text-text dark:text-text-dark placeholder-text-muted dark:placeholder-text-muted-dark font-poppins border border-black/15 dark:border-white/15 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                                />

                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Objet"
                                    className="w-full px-4 py-4 bg-bg dark:bg-bg-dark text-text dark:text-text-dark placeholder-text-muted dark:placeholder-text-muted-dark font-poppins border border-black/15 dark:border-white/15 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                                />

                                <textarea
                                    name="message"
                                    placeholder="Écrivez votre message ici..."
                                    required
                                    rows={5}
                                    className="w-full px-4 py-4 bg-bg dark:bg-bg-dark text-text dark:text-text-dark placeholder-text-muted dark:placeholder-text-muted-dark font-poppins border border-black/15 dark:border-white/15 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                                ></textarea>

                                {statusMessage && (
                                    <p
                                        className={`text-center text-sm font-poppins ${statusMessage.startsWith("✅")
                                                ? "text-green-600"
                                                : "text-red-600"
                                            }`}
                                    >
                                        {statusMessage}
                                    </p>
                                )}

                                <motion.button
                                    type="submit"
                                    disabled={loading}
                                    className="group w-full bg-primary hover:bg-primary-hover text-white font-poppins font-semibold py-4 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                                    whileHover={{ scale: loading ? 1 : 1.02 }}
                                    whileTap={{ scale: loading ? 1 : 0.98 }}
                                >
                                    <span>
                                        {loading ? "Envoi en cours..." : "Envoyer"}
                                    </span>
                                    {!loading && (
                                        <FaArrowRightLong className="group-hover:translate-x-1 transition-transform duration-200" />
                                    )}
                                </motion.button>
                            </form>
                        </motion.div>
                    </motion.section>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Contact;
