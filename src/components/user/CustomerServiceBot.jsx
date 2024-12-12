import React, { useState } from "react";

export default function CustomerServiceBot() {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [chatHistory, setChatHistory] = useState([]);
    const handleSendMessage = (message) => {
        if (!message.trim()) return;

        const newMessage = { role: "user", content: message };
        setChatHistory([...chatHistory, newMessage]);
    };

    return (
        <div>
            {/* Floating Button */}
            <div
                className="fixed lg:bottom-6 bottom-4 lg:right-10 right-2 cursor-pointer z-50"
                onClick={() => setIsChatOpen(!isChatOpen)}
            >
                <img
                    src="/images/customer-service.png"
                    alt="Customer Service"
                    className="w-16 h-16 md:w-12 md:h-12"
                />
            </div>
            {/* Chatbot Modal */}
            {isChatOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white w-full max-w-md h-[80%] md:h-auto rounded-lg shadow-lg p-4 relative">
                        {/* Close Button */}
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                            onClick={() => setIsChatOpen(false)}
                        >
                            ×
                        </button>
                        {/* Header */}
                        <h2 className="text-lg font-bold text-cyan-900 text-center mb-4">Chatbot Customer Service</h2>
                        {/* Chat History */}
                        <div className="h-64 md:h-80 overflow-y-auto p-3">
                            {chatHistory.length === 0 ? (
                                <p className="text-gray-500 text-center">Belum ada pesan.</p>
                            ) : (
                                chatHistory.map((message, index) => (
                                    <div
                                        key={index}
                                        className={`mb-2 flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                                    >
                                        <span
                                            className={`px-4 py-2 rounded-lg ${message.role === "user"
                                                ? "bg-cyan-600 text-white"
                                                : "bg-cyan-50 text-cyan-900"}`}
                                        >
                                            {message.content}
                                        </span>
                                    </div>
                                ))
                            )}
                        </div>
                        {/* Input Box */}
                        <div className="flex justify-center">
                            <div className="flex w-11/12 max-w-lg h-12 px-3 py-2 rounded-lg border border-cyan-900 items-center">
                                <input
                                    type="text"
                                    placeholder="Ketik Pesan..."
                                    className="flex-grow text-cyan-950 text-sm font-normal font-['Poppins'] outline-none bg-transparent"
                                />
                                <button className="w-8 h-8 flex items-center justify-center">
                                    <img src="/images/user/beranda/send-horizontal.svg" alt="ikon kirim" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}