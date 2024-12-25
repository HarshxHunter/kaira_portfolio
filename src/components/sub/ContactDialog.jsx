import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import mailIcon from "../../assets/mail.webp";

const ContactDialog = ({ handleCloseDialog }) => {
    const formRef = useRef();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_i78v419",
                "template_hel4yh9",
                formRef.current,
                "JnVtIvufhdaWT6ymd"
            )
            .then(
                (result) => {
                    setSuccess(true);
                },
                (error) => {
                    setError(true);
                }
            );
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-[#101828e6] border-2 border-gray-800 rounded-lg shadow-lg p-8 w-11/12 md:w-2/3 lg:w-1/2 flex flex-col md:flex-row items-center gap-8">
                {/* Left Section - Form */}
                <div className="w-full md:w-1/2">
                    <h3 className="text-2xl font-semibold mb-4 text-white">Contact Form</h3>
                    <form onSubmit={sendEmail} ref={formRef}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-200 mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                className="w-full bg-inherit border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-emerald-300"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                className="w-full bg-inherit border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-emerald-300"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Message
                            </label>
                            <textarea
                                rows="4"
                                name="message"
                                className="w-full bg-inherit border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-emerald-300"
                                placeholder="Enter your message"
                            ></textarea>
                        </div>
                        <div className="flex justify-start gap-4">
                            <button
                                type="submit"
                                className="px-4 py-2 bg-emerald-700 hover:bg-green-700 text-white rounded-md"
                            >
                                Submit
                            </button>
                            <button
                                type="button"
                                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-900 rounded-md"
                                onClick={handleCloseDialog}
                            >
                                Cancel
                            </button>
                        </div>

                        {error && (
                            <p className="text-red-500 mt-2">
                                Error. Please send me an email at kairaharsh793@gmail.com.
                            </p>
                        )}
                        {success && (
                            <p className="text-green-500 mt-2">
                                Success. Will respond within 24 hours.
                            </p>
                        )}
                    </form>
                </div>

                {/* Right Section - Image */}
                <div className="w-full md:w-1/2 flex justify-center items-center">
                    <img
                        src={mailIcon}
                        alt="Contact"
                        className=" shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default ContactDialog;
