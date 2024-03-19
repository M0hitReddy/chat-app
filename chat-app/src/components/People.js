// import '../styles/Chat.css';
// import {cn } from "../utils/util";
// import 'bootstrap-icons/font/bootstrap-icons.css';
import React from "react";
// import { motion } from "framer-motion";
import { AnimatedTooltip } from "./ui/animated-tooltip.tsx";
// import { LampContainer } from "./ui/lamp.tsx";

import people from "../utils/util.js";
export default function Chat() {
    return (
        <>
            {/* <div className="flex flex-row  items-center justify-center mb-10 w-full">
                <LampContainer>
                    <motion.h1
                        initial={{ opacity: 0.5, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.3,
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                        className="mt-18 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                    >
                        <div className="flex flex-row items-center justify-center mb-10 w-full">
                            <AnimatedTooltip items={people} />
                        </div>
                    </motion.h1>
                </LampContainer>
                
            </div> */}
            <div className="flex flex-row  items-center justify-center mb-4 mt-14 w-full">
                <AnimatedTooltip items={people} />
            </div>
        </>
    );
}