import React from "react";
import { motion } from "framer-motion";
import { containerVariants } from "../animations";

export default function Nav() {
    return (
        <nav className="fixed top-4 right-4 z-50 bg-gray-800/90 backdrop-blur-md rounded-xl shadow-lg p-4 md:p-6 space-y-2 hidden md:block border border-gray-700">
            <motion.a href="#hero" className="block text-sm text-blue-300 font-semibold hover:text-blue-100 transition-colors" variants={containerVariants} whileHover="hover">Inicio</motion.a>
            <motion.a href="#proceso" className="block text-sm text-blue-300 font-semibold hover:text-blue-100 transition-colors" variants={containerVariants} whileHover="hover">Proceso</motion.a>
            <motion.a href="#portfolio" className="block text-sm text-blue-300 font-semibold hover:text-blue-100 transition-colors" variants={containerVariants} whileHover="hover">Portfolio</motion.a>
            <motion.a href="#responsive" className="block text-sm text-blue-300 font-semibold hover:text-blue-100 transition-colors" variants={containerVariants} whileHover="hover">Responsive</motion.a>
            <motion.a href="#beneficios" className="block text-sm text-blue-300 font-semibold hover:text-blue-100 transition-colors" variants={containerVariants} whileHover="hover">Beneficios</motion.a>
            <motion.a href="#contact" className="block text-sm text-blue-300 font-semibold hover:text-blue-100 transition-colors" variants={containerVariants} whileHover="hover">Contacto</motion.a>
        </nav>
    );
}


