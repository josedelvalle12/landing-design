import React from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants, cardVariants } from "../animations";
import { steps } from "../content";

const icons = {
    calendar: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 10h.01M12 10h.01M16 10h.01M9 16h6M12 3v4M5 21h14a2 2 0 002-2v-7a9 9 0 10-18 0v7a2 2 0 002 2z" />
        </svg>
    ),
    pencil: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.121 2.121 0 113 3L7 19l-4 1 1-4 12.5-12.5z" />
        </svg>
    ),
    monitor: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 3h-8a2 2 0 00-2 2v2h12V5a2 2 0 00-2-2z" />
        </svg>
    ),
    check: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 12l2 2 4-4" />
            <circle cx="12" cy="12" r="10" />
        </svg>
    ),
    clock: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 8v4l3 3" />
            <circle cx="12" cy="12" r="10" />
        </svg>
    ),
};

export default function Process() {
    return (
        <motion.section
            id="proceso"
            className="py-32 px-0 md:px-0 mt-24 max-w-8xl mx-auto rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-blue-950 shadow-2xl relative overflow-hidden border border-blue-800/80"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
        >
            <div className="px-[3vw]">
                <motion.h3
                    className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 text-transparent bg-clip-text drop-shadow-lg"
                    variants={itemVariants}
                >
                    Mi Proceso
                </motion.h3>
                {/* Decorative blurred gradient shapes */}
                <div className="pointer-events-none absolute -top-16 left-0 w-80 h-80 rounded-full bg-blue-900 opacity-40 blur-3xl animate-pulse" aria-hidden />
                <div className="pointer-events-none absolute -bottom-16 right-0 w-72 h-72 rounded-full bg-cyan-600 opacity-30 blur-2xl animate-pulse" aria-hidden />
                <div
                    className="
                        flex flex-col md:flex-row
                        justify-center
                        items-stretch
                        md:space-x-0
                        gap-y-10 md:gap-y-0
                        z-10 relative
                    "
                >
                    {steps.map(({ title, desc, icon }, i) => (
                        <motion.div
                            key={i}
                            variants={cardVariants}
                            className={`
                                flex flex-col items-center
                                bg-gradient-to-br from-gray-800 via-gray-900 to-blue-950
                                rounded-2xl
                                shadow-lg
                                p-10
                                w-full min-w-[270px] max-w-[320px] h-[390px]
                                mx-auto md:mx-6
                                text-center
                                border-2 border-blue-800/30
                                hover:border-cyan-400
                                hover:bg-gradient-to-tr
                                hover:from-blue-900
                                hover:via-blue-800
                                hover:to-cyan-900
                                transition-all duration-300
                                group
                                justify-between
                            `}
                            style={{
                                flex: "0 0 320px",          // On md+ screens, don't shrink.
                                marginLeft: i === 0 ? 0 : undefined,
                                marginRight: i === steps.length - 1 ? 0 : undefined,
                            }}
                            whileHover={{ scale: 1.04, y: -6, boxShadow: "0 12px 36px 0 rgba(24, 200, 248, 0.12)" }}
                        >
                            <div className="mb-6">
                                <span className="inline-flex items-center justify-center p-4 rounded-full shadow-lg bg-gradient-to-tr from-blue-600 via-cyan-500 to-blue-400 group-hover:scale-105 group-hover:shadow-blue-400/40 transition-all duration-300">
                                    {icons[icon]}
                                </span>
                            </div>
                            <h4 className="text-2xl font-bold mb-4 text-white drop-shadow-blue-400/40">
                                {title}
                            </h4>
                            <p className="text-blue-100/90 dark:text-gray-200 font-semibold text-base leading-relaxed">
                                {desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}


