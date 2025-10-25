import React from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../animations";
import { benefits } from "../content";

const icons = {
    info: (
        <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 16h-1v-4h-1" />
            <path d="M12 20h.01" />
            <circle cx="12" cy="12" r="10" />
        </svg>
    ),
    device: (
        <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 3h-8a2 2 0 00-2 2v2h12V5a2 2 0 00-2-2z" />
        </svg>
    ),
    speed: (
        <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 8v4l3 3" />
            <circle cx="12" cy="12" r="10" />
        </svg>
    ),
};

export default function Benefits() {
    return (
        <motion.section id="beneficios" className="py-32 px-8 max-w-5xl mx-auto bg-gray-800 rounded-xl shadow-md overflow-hidden" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut" }}>
            <motion.h3 className="text-3xl font-extrabold text-center mb-12 text-blue-300" variants={itemVariants}>Beneficios</motion.h3>
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 px-2 md:px-0">
                {benefits.map(({ icon, text }, i) => (
                    <motion.div key={i} className="flex flex-col items-center bg-gray-700 rounded-xl shadow-md p-10 flex-1 text-center" variants={itemVariants}>
                        <div className="mb-6">{icons[icon]}</div>
                        <p className="font-semibold text-lg text-white">{text}</p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}


