import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Inisialisasi Google Generative AI
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

export default function CustomerServiceBot() {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [chatHistory, setChatHistory] = useState([]);

    // Handle input pengiriman chat
    const handleSendMessage = async (message) => {
        const newMessage = { role: "user", content: message };
        const updatedChatHistory = [...chatHistory, newMessage];
        setChatHistory(updatedChatHistory);

        try {
            const response = await model.generate({
                messages: updatedChatHistory,
            });
            const aiResponse = { role: "assistant", content: response?.text };
            setChatHistory([...updatedChatHistory, aiResponse]);
        } catch (error) {
            console.error("Error generating response:", error);
        }
    };

    return (
        <div>
            {/* Tombol Floating */}
            <div
                className="fixed bottom-4 right-4 cursor-pointer"
                onClick={() => setIsChatOpen(true)}
            >
                <img
                    src="/images/customer-service.png"
                    alt="Customer Service"
                    className="w-16 h-16"
                />
            </div>

            {/* Modal Chatbot */}
            {isChatOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-4 relative">
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                            onClick={() => setIsChatOpen(false)}
                        >
                            ×
                        </button>
                        <h2 className="text-lg font-semibold text-center mb-4">
                            Customer Service Chatbot
                        </h2>
                        <div className="h-64 overflow-y-auto border p-2 rounded-md">
                            {chatHistory.map((message, index) => (
                                <div
                                    key={index}
                                    className={`mb-2 ${message.role === "user" ? "text-right" : "text-left"
                                        }`}
                                >
                                    <span
                                        className={`inline-block px-3 py-1 rounded-lg ${message.role === "user"
                                            ? "bg-blue-500 text-white"
                                            : "bg-gray-200 text-black"
                                            }`}
                                    >
                                        {message.content}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 flex">
                            <input
                                type="text"
                                placeholder="Tulis pesan..."
                                className="flex-grow border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" && e.target.value) {
                                        handleSendMessage(e.target.value);
                                        e.target.value = ""; // Reset input
                                    }
                                }}
                            />
                            <button
                                className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                                onClick={(e) => {
                                    const input = e.target.previousSibling;
                                    if (input.value) {
                                        handleSendMessage(input.value);
                                        input.value = ""; // Reset input
                                    }
                                }}
                            >
                                Kirim
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
