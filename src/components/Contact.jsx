import React, { useState } from "react";
import { LuArrowUpRight } from "react-icons/lu";
import grain from "../assets/grain.jpg";
import ContactDialog from "./sub/ContactDialog";
import { SiGmail } from "react-icons/si";
import { IoMdCall } from "react-icons/io";

const Contact = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleOpenDialog = () => {
        setIsDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };

    return (
        <div className="relative py-16 pt-14 lg:pt-20 lg:py-24 px-5 md:px-36 z-20" id="contact">
            <div className="container">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden">
                    <div
                        className="absolute inset-0 opacity-50 -z-20"
                        style={{ backgroundImage: `url(${grain})` }}
                    ></div>
                    <div className="flex flex-col md:flex-row gap-8 md:gap-28 items-center justify-between">
                        <div>
                            <h2 className="font-serif text-2xl md:text-3xl font-bold">
                                Let's create something amazing together
                            </h2>
                            <p className="text-sm md:text-base mt-2">
                                Ready to bring your next project to life? Let's connect and discuss how I can help you achieve your goals.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-0 sm:gap-4 items-center sm:items-start">
                                <div className="flex gap-1 items-center">
                                    <SiGmail className="text-lg mt-1.5" />
                                    <p className="text-sm md:text-base mt-2">kairaharsh793@gmail.com</p>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <IoMdCall className="text-lg mt-1.5 font-bold" />
                                    <p className="text-sm md:text-base mt-2">+91 7042977049</p>
                                </div>
                            </div>
                        </div>
                        <div className="z-40">
                            <button
                                className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900"
                                onClick={handleOpenDialog}
                            >
                                <span className="font-semibold">Contact Me</span>
                                <LuArrowUpRight className="text-lg font-bold" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {isDialogOpen && <ContactDialog handleCloseDialog={handleCloseDialog} />}
        </div>

    );
};

export default Contact;
