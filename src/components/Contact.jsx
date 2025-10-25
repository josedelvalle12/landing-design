import React from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../animations";
import { whatsappLink } from "../content";

export default function Contact() {
    const MotionSection = motion.section;
    return (
        <MotionSection id="contact" className="py-36 px-8" style={{ background: "linear-gradient(90deg, #3B82F6 0%, #06B6D4 100%)" }} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 text-white">
                <motion.div className="flex-1 text-center md:text-left" variants={itemVariants}>
                    <motion.h3 className="text-4xl font-extrabold mb-6 leading-tight">¿Listo para tu landing? <br />Hablemos hoy.</motion.h3>
                    <motion.a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-xl shadow-md hover:bg-gray-100 transition-colors duration-300" aria-label="Contactar por WhatsApp" variants={containerVariants} whileHover="hover" whileTap="tap">Contactar por WhatsApp</motion.a>
                </motion.div>
                <motion.form action="https://formsubmit.co/josedelvalle012@gmail.com" method="POST" className="flex-1 bg-gray-800 rounded-xl shadow-md p-8 text-white" noValidate variants={itemVariants}>
                    <input type="hidden" name="_next" value="https://tulanding.vercel.app/gracias" />
                    <input type="hidden" name="_subject" value="Nuevo mensaje desde tu Landing" />
                    <input type="hidden" name="_captcha" value="false" />

                    <motion.div className="mb-6" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1, duration: 0.5 }}>
                        <label htmlFor="name" className="block font-bold mb-2">Nombre</label>
                        <input id="name" name="name" type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Tu nombre" />
                    </motion.div>
                    <motion.div className="mb-6" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.5 }}>
                        <label htmlFor="email" className="block font-bold mb-2">Email</label>
                        <input id="email" name="email" type="email" required className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="tu@email.com" />
                    </motion.div>
                    <motion.div className="mb-6" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.5 }}>
                        <label htmlFor="message" className="block font-bold mb-2">Mensaje</label>
                        <textarea id="message" name="message" rows="4" required className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none" placeholder="Cuéntame qué necesitas..." />
                    </motion.div>
                    <motion.button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-extrabold py-4 rounded-xl shadow-md hover:from-blue-600 hover:to-cyan-500 transition-colors duration-300" variants={containerVariants} whileHover="hover" whileTap="tap" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }}>
                        Enviar mensaje
                    </motion.button>
                </motion.form>
            </div>
        </MotionSection>
    );
}


