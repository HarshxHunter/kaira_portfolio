import React from "react";
import mailIcon from "../../assets/mail.webp";
import successImg from "../../assets/successTick.png";
import errorImg from "../../assets/error-message.png";
import { TiArrowRight } from "react-icons/ti";


const ContactDialog = ({ handleCloseDialog, setSuccess, setError, success, error }) => {
    // const [error, setError] = useState(false);
    // const [success, setSuccess] = useState(false);

    // const [isDialogOpen, setIsDialogOpen] = useState(false);

    // const handleOpen = () => {
    //     setIsDialogOpen(true);
    // };

    // const handleClose = () => {
    //     setIsDialogOpen(false);
    // };

    

    const sendEmail = async (event) => {
        event.preventDefault();

        const apiKey = import.meta.env.VITE_WEB_THREE_SERVICE_KEY;
        console.log(event);
        
        const formData = new FormData(event.target);

        formData.append("access_key", apiKey);

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            setError(false);
            setSuccess(true);

        }
        else {
            console.log("error", res);
            setSuccess(false);
            setError(true);
        }


        event.target.reset();


    };


    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            {(success || error) ?

                <div className="bg-[#101828e6] border-2 border-gray-800 rounded-lg shadow-lg p-8 flex flex-col items-center justify-center gap-8">

                    {success ? <img src={successImg} alt="success" className="" /> : <img src={errorImg} alt="error" className="" />}

                    {success ?
                        <div className="flex flex-col gap-2 justify-center items-center">
                            <p className="text-green-500 text-xl font-semibold">SUCCESS</p>
                            <p className="text-white">Got Your Message, will respond very soon.</p>
                        </div> :
                        <div className="flex flex-col gap-2 justify-center items-center">
                            <p className="text-red-600 text-xl font-semibold">ERROR</p>
                            <p className="text-white">An Error occurred. Please use my Email (<span className="text-blue-500"> kairaharsh793@gmail.com </span>) to connect to me directly.</p>
                        </div>
                    }

                    <button onClick={handleCloseDialog} className="text-black rounded-lg p-2 flex items-center bg-[#08C6AF] px-4 border-2 border-[#08C6AF] hover:bg-inherit hover:text-white">
                        <p className="font-bold">Go Back</p>
                        <TiArrowRight className="text-2xl" />
                    </button>
                </div>

                :

                <div className="bg-[#101828e6] border-2 border-gray-800 rounded-lg shadow-lg p-8 w-11/12 md:w-2/3 lg:w-1/2 flex flex-col md:flex-row items-center gap-8">
                    {/* Left Section - Form */}
                    <div className="w-full md:w-1/2">
                        <h3 className="text-2xl font-semibold mb-4 text-white">Contact Form</h3>
                        <form onSubmit={sendEmail}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-200 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    className="w-full bg-inherit border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-emerald-300"
                                    placeholder="Your good name"
                                    required
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
                                    required
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
                                    required
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
            }
        </div>
    );
};

export default ContactDialog;
