import React from "react";
import { containerVariants, itemVariants } from "../animations";
import iphoneDemo from "/videos/iPhone-13-PRO-josedelvalle12.github.io-40mk8w1_bru_8o.webm";

export default function ResponsiveShowcase() {
    return (
        <motion.section
            id="responsive"
            className="py-32 px-8 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <motion.h3
                className="text-3xl font-extrabold text-center mb-6 text-blue-300"
                variants={itemVariants}
            >
                100% Responsive
            </motion.h3>
            <motion.p
                className="text-center mb-12 font-semibold text-white max-w-3xl mx-auto"
                variants={itemVariants}
            >
                Tus landings se ven y funcionan perfecto en cualquier dispositivo. Aquí puedes ver una demo en vista móvil.
            </motion.p>

            <div className="flex items-center justify-center">
                <motion.div
                    className="relative w-[290px] sm:w-[320px] md:w-[360px] aspect-[9/19.5] rounded-[2.5rem] overflow-hidden"
                    variants={itemVariants}
                    whileHover={{ y: -4, scale: 1.01, transition: { duration: 0.25 } }}
                >
                    <video
                        src={iphoneDemo}
                        className="h-full w-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls
                    />
                </motion.div>
            </div>
            
        </motion.section>
    );
}


