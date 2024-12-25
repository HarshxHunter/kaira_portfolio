import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink, Events, scroller } from "react-scroll";
import { links } from "../constants";
import clsx from "clsx";

export default function Header() {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        // Listen for scroll events to update active section
        Events.scrollEvent.register("begin", (to) => {
            setActiveSection(to);
        });

        return () => {
            Events.scrollEvent.remove("begin");
        };
    }, []);

    return (
        <header className="z-[900] relative">
            <motion.div
                className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[30rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
            ></motion.div>

            <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
                <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
                    {links.map((link) => (
                        <motion.li
                            className="h-3/4 flex items-center justify-center relative cursor-pointer"
                            key={link.hash}
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            <ScrollLink
                                className={clsx(
                                    "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                                    {
                                        "text-gray-950 dark:text-gray-200":
                                            activeSection === link.name,
                                    }
                                )}
                                to={link.hash.slice(1)} // Remove '#' from hash
                                smooth={true} // Smooth scrolling
                                offset={-100} // Offset for scrolling 20rem above section
                                duration={500} // Smooth scroll duration
                                spy={true} // Watches the element to mark active
                                onSetActive={() => setActiveSection(link.name)} // Sets the active section
                            >
                                {link.name}

                                {link.name === activeSection && (
                                    <motion.span
                                        className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                                        layoutId="activeSection"
                                        transition={{
                                            type: "spring",
                                            stiffness: 380,
                                            damping: 30,
                                        }}
                                    ></motion.span>
                                )}
                            </ScrollLink>
                        </motion.li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
