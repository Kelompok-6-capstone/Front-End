import React, { useState } from "react";

export default function ChatbotUser() {
    const [isChatOpen, setIsChatOpen] = useState(false);
    return (
        <div>
            {/* Floating Button */}
            <div
                className="fixed bottom-4 right-8 cursor-pointer z-50"
                onClick={() => setIsChatOpen(!isChatOpen)}
            >
                <img
                    src="/images/user/beranda/chatbot.png"
                    alt="Customer Service"
                    className="w-12 h-12 md:w-16 md:h-16"
                />
            </div>

            {/* Modal Chatbot */}
            {isChatOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40">
                    <div className="w-full max-w-md h-[70%] md:h-[60%] relative bg-white rounded-2xl border border-cyan-900 mx-5">
                        <div className="w-full p-3 bg-cyan-50 flex justify-center items-center border-b border-cyan-900">
                            <div className="text-center text-cyan-950 text-base font-bold">
                                Chat Bot AI
                            </div>
                            <button
                                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                                onClick={() => setIsChatOpen(false)}
                            >
                                ×
                            </button>
                        </div>
                        <div className="p-4 overflow-y-auto flex flex-col gap-4 h-[calc(100%-120px)]">
                            <div className="flex justify-end items-end gap-2">
                                <div className="text-xs text-gray-500">Today, 12:00</div>
                                <div className="shadow px-4 py-2 bg-cyan-600 text-cyan-50 rounded-lg text-sm">
                                    Halo
                                </div>
                            </div>
                            <div className="flex justify-start items-end gap-2">
                                <div className="shadow px-4 py-2 bg-cyan-50 text-cyan-900 rounded-lg text-sm">
                                    Selamat datang di Calmind!<br />Apakah ada yang bisa kami bantu?
                                </div>
                                <div className="text-xs text-gray-500">Today, 12:00</div>
                            </div>
                        </div>
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
