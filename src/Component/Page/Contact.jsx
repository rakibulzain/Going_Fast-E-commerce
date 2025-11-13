import React from 'react'

export default function Contact() {
    return (
        <div className="min-h-screen bg-[#e8ebe2] flex items-center justify-center">
            <div className="bg-white text-black rounded-xl shadow-lg p-8 w-full max-w-2xl">
                <h1 className="text-2xl font-semibold text-center mb-6">
                    Let's talk about everything!
                </h1>

                <form className="space-y-4">
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col">
                            <label htmlFor="firstname" className="font-medium mb-1">
                                First Name:
                            </label>
                            <input
                                type="text"
                                id="firstname"
                                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="lastname" className="font-medium mb-1">
                                Last Name:
                            </label>
                            <input
                                type="text"
                                id="lastname"
                                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                        <label htmlFor="email" className="font-medium mb-1">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col">
                        <label htmlFor="message" className="font-medium mb-1">
                            What do you think about?
                        </label>
                        <textarea
                            id="message"
                            rows="4"
                            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-medium py-2 rounded-md hover:bg-black transition duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>

    )
}
