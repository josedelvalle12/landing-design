import React from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../animations";
import { projects } from "../content";

export default function Portfolio() {
    return (
        <motion.section id="portfolio" className="py-32 px-8 max-w-6xl mx-auto" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <motion.h3 className="text-3xl font-extrabold text-center mb-12 text-blue-300 col-span-full" variants={itemVariants}>Portfolio</motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-2 md:px-0">
                {projects.map((project) => (
                    <motion.div key={project.id} className="bg-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col" variants={itemVariants} whileHover={{ y: -4, scale: 1.01, transition: { duration: 0.25 } }}>
                        <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.25 }} className="overflow-hidden rounded-xl h-2/3">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                        </motion.div>
                        <div className="p-6 flex flex-col flex-grow">
                            <p className="font-semibold text-lg mb-4 flex-grow text-white">{project.title}</p>
                            <motion.a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-auto inline-block text-center bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-3 rounded-xl shadow-md hover:from-blue-600 hover:to-cyan-500 transition-colors duration-300" aria-label={`Ver demo proyecto ${project.title}`} variants={containerVariants} whileHover="hover" whileTap="tap">
                                Ver demo
                            </motion.a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}


