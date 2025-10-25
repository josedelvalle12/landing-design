import React from "react";
import { motion } from "framer-motion";
import { sectionVariants, itemVariants, containerVariants } from "../animations";
import { whatsappLink } from "../content";

export default function Hero() {
    return (
        <motion.section id="hero" className="h-screen flex flex-col items-center justify-center relative px-8 pt-16" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
            <div className="flex flex-col items-center justify-center w-full max-w-6xl text-center space-y-12 flex-1">
                <section className="w-full max-w-4xl">
                    <motion.h1 className="text-5xl md:text-6xl mb-4 relative inline-block" variants={itemVariants}>
                        Hola, soy Jose{" "}
                        <span className="block h-1 mt-2 rounded-full" style={{ background: "linear-gradient(90deg, #3B82F6 0%, #06B6D4 100%)", width: "6rem" }} />
                    </motion.h1>
                    <motion.p className="text-xl md:text-2xl max-w-xl mx-auto mb-10 leading-relaxed font-bold text-white" variants={itemVariants}>
                        Diseño y desarrollo landing pages modernas<br /> y optimizadas para atraer clientes.
                    </motion.p>
                    <motion.a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-10 py-5 rounded-xl shadow-md hover:from-blue-600 hover:to-cyan-500 transition-colors duration-300" aria-label="Quiero mi landing - Contactar por WhatsApp" variants={containerVariants} whileHover="hover" whileTap="tap">
                        Quiero mi landing
                    </motion.a>
                </section>

                <section className="w-full max-w-5xl py-18 flex flex-col md:flex-row items-center justify-center gap-12">
                    <div className="flex-1 text-center md:text-left self-center">
                        <motion.p className="text-lg md:text-xl max-w-xxl mx-auto md:mx-0 mb-6 font-semibold leading-relaxed text-white" variants={itemVariants}>
                            Soy un diseñador y desarrollador especializado en crear landings que combinan estética y funcionalidad para maximizar conversiones.
                        </motion.p>
                        <motion.h2 className="text-2xl md:text-3xl text-blue-300 max-w-md mx-auto md:mx-0" variants={itemVariants}>
                            Creo landings claras y rápidas, pensadas para que tu cliente no se pierda y haga click.
                        </motion.h2>
                    </div>
                    <motion.div className="flex-1 max-w-xs mx-auto md:mx-0 self-center" variants={itemVariants}>
                        <div className="rounded-full overflow-hidden shadow-lg border-4 border-blue-400 w-48 h-48 mx-auto md:mx-0">
                            <img src="/src/assets/foto-perfil.png" alt="Avatar placeholder" className="object-cover w-full h-full" loading="lazy" />
                        </div>
                    </motion.div>
                </section>
            </div>

            <motion.div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center" animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
                <svg className="w-8 h-8 text-blue-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                <p className="text-sm text-gray-500 mt-2">Desplázate hacia abajo</p>
            </motion.div>
        </motion.section>
    );
}


