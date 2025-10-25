// Shared Framer Motion variants
export const sectionVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, ease: "easeOut" },
    },
};

export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.05 },
    },
};

export const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

export const cardVariants = {
    hidden: { opacity: 0, y: 30, backgroundColor: "#0ea5e9" },
    visible: {
        opacity: 1,
        y: 0,
        backgroundColor: "#ffffff",
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

export const hoverLift = { whileHover: { y: -2, scale: 1.02, transition: { duration: 0.2 } } };


