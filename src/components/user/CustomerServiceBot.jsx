import React, { useState, useEffect } from "react";
import { fetchFaqOptions, getBotResponse } from "../../api/customerServiceBot";
import LoadingIndicator from "../../components/user/beranda/LoadingIndicator";

export default function CustomerServiceBot() {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            type: "bot",
            text: (
                <>
                    Selamat datang di Customer Service!<br />
                    Ada yang bisa kami bantu? Ketik nomor pertanyaan:<br />
                    1. Metode pembayaran?<br />
                    2. Proses pembayaran?<br />
                    3. Kapan harus melakukan konsultasi?<br />
                    4. Bagaimana cara melakukan konsultasi?<br />
                    5. Bagaimana cara mendaftar akun?<br />
                    6. Apa yang harus dilakukan jika tidak bisa masuk?<br />
                    7. Bagaimana jika lupa kata sandi?
                </>
            ),
            timestamp: new Date().toLocaleTimeString(),
        }
    ]);
    const [inputMessage, setInputMessage] = useState("");
    const [isBotTyping, setIsBotTyping] = useState(false);
    const [faqOptions, setFaqOptions] = useState({});
    useEffect(() => {
        // Ambil daftar FAQ saat komponen pertama kali dimuat
        const loadFaqOptions = async () => {
            try {
                const options = await fetchFaqOptions();
                setFaqOptions(options);
            } catch (error) {
                console.error("Error fetching FAQ options:", error);
            }
        };
        loadFaqOptions();
    }, []);
    const sendMessage = async () => {
        if (!inputMessage.trim()) return;
        const userMessage = {
            type: "user",
            text: inputMessage,
            timestamp: new Date().toLocaleTimeString(),
        };
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        setInputMessage("");
        if (faqOptions[inputMessage]) {
            try {
                setIsBotTyping(true);
                const responseText = await getBotResponse(inputMessage);
                const botMessage = {
                    type: "bot",
                    text: responseText,
                    timestamp: new Date().toLocaleTimeString(),
                };
                setMessages((prevMessages) => [...prevMessages, botMessage]);
            } catch (error) {
                const errorMessage = {
                    type: "bot",
                    text: "Maaf, terjadi kesalahan. Silakan coba lagi.",
                    timestamp: new Date().toLocaleTimeString(),
                };
                setMessages((prevMessages) => [...prevMessages, errorMessage]);
            } finally {
                setIsBotTyping(false);
            }
        } else {
            const unknownMessage = {
                type: "bot",
                text: "Maaf, pertanyaan tidak ditemukan. Silakan pilih nomor yang sesuai.",
                timestamp: new Date().toLocaleTimeString(),
            };
            setMessages((prevMessages) => [...prevMessages, unknownMessage]);
        }
    };
    const resetChat = () => {
        setMessages([
            {
                type: "bot",
                text: (
                    <>
                        Selamat datang di Customer Service!<br />
                        Ada yang bisa kami bantu? Ketik nomor pertanyaan:<br />
                        1. Metode pembayaran?<br />
                        2. Proses pembayaran?<br />
                        3. Kapan harus melakukan konsultasi?<br />
                        4. Bagaimana cara melakukan konsultasi?<br />
                        5. Bagaimana cara mendaftar akun?<br />
                        6. Apa yang harus dilakukan jika tidak bisa masuk?<br />
                        7. Bagaimana jika lupa kata sandi?
                    </>
                ),
                timestamp: new Date().toLocaleTimeString(),
            },
        ]);
    };
    return (
        <div>
            {/* Tombol Chat */}
            <div
                className="fixed bottom-4 right-8 cursor-pointer z-50"
                onClick={() => setIsChatOpen(!isChatOpen)}
            >
                <img
                    src="/images/customer-service.png"
                    alt="Customer Service"
                    className="w-12 h-12 md:w-16 md:h-16"
                />
            </div>
            {isChatOpen && (
                <div
                    className={`fixed inset-y-0 right-0 flex items-center justify-center z-40 ${window.innerWidth < 768 ? "bg-black bg-opacity-50" : "me-5"
                        }`}
                >
                    <div className="w-full max-w-md h-[70%] md:h-[60%] relative bg-white rounded-2xl border border-cyan-900 mx-5">
                        <div className="w-full p-3 flex justify-between items-center border-b border-cyan-900">
                            <div className="text-center text-cyan-950 text-base font-bold">
                                Customer Service Bot
                            </div>
                            <div className="flex gap-2">
                                <button
                                    className="text-sm text-red-500 hover:text-red-700"
                                    onClick={resetChat}
                                >
                                    Reset Chat
                                </button>
                                <button
                                    className="text-gray-500 hover:text-gray-700"
                                    onClick={() => setIsChatOpen(false)}
                                >
                                    ×
                                </button>
                            </div>
                        </div>
                        <div className="p-4 overflow-y-auto flex flex-col gap-4 h-[calc(100%-120px)]">
                            {messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"
                                        } items-end gap-2`}
                                >
                                    {msg.type === "bot" && (
                                        <div className="text-xs text-gray-500">{msg.timestamp}</div>
                                    )}
                                    <div
                                        className={`shadow px-4 py-2 rounded-lg text-sm ${msg.type === "user"
                                            ? "bg-cyan-600 text-cyan-50"
                                            : "bg-cyan-50 text-cyan-900"
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                    {msg.type === "user" && (
                                        <div className="text-xs text-gray-500">{msg.timestamp}</div>
                                    )}
                                </div>
                            ))}
                            {isBotTyping && <LoadingIndicator />}
                        </div>
                        <div className="flex justify-center">
                            <div className="flex w-11/12 max-w-lg h-12 px-3 py-2 rounded-lg border border-cyan-900 items-center">
                                <input
                                    type="text"
                                    placeholder="Ketik nomor pertanyaan..."
                                    className="flex-grow text-cyan-950 text-sm font-normal outline-none bg-transparent"
                                    value={inputMessage}
                                    onChange={(e) => setInputMessage(e.target.value)}
                                    onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                                />
                                <button
                                    className="w-8 h-8 flex items-center justify-center"
                                    onClick={sendMessage}
                                >
                                    <img
                                        src="/images/user/beranda/send-horizontal.svg"
                                        alt="ikon kirim"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
