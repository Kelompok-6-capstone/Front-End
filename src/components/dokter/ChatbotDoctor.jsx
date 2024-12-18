import { useState } from "react";
import LoadingIndicator from "../user/beranda/LoadingIndicator";
import { sendMessageToApiDoctor } from "../../api/doctor/chatbotApiDoctor";

export default function ChatbotDoctor() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Selamat datang di Calmind!\nApakah ada yang bisa kami bantu?",
      timestamp: new Date().toLocaleTimeString(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isBotTyping, setIsBotTyping] = useState(false);

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;
    const doctorMessage = {
      type: "doctor",
      text: inputMessage,
      timestamp: new Date().toLocaleTimeString(),
    };
    setMessages((prevMessages) => [...prevMessages, doctorMessage]);
    setInputMessage("");

    try {
      setIsBotTyping(true);
      const botReply = await sendMessageToApiDoctor(inputMessage);
      const botMessage = {
        type: "bot",
        text: botReply,
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      const errorMessage = {
        type: "bot",
        text: error.message,
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsBotTyping(false);
    }
  };

  const resetChat = () => {
    setMessages([
      {
        type: "bot",
        text: "Selamat datang di Calmind!\nApakah ada yang bisa kami bantu?",
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
          src="/images/user/beranda/chatbot.png"
          alt="Customer Service"
          className="w-12 h-12 md:w-16 md:h-16"
        />
      </div>
      {/* Modal Chatbot */}
      {isChatOpen && (
        <div
          className={`fixed inset-y-0 right-0 flex items-center justify-center z-40 ${
            window.innerWidth < 768 ? "bg-black bg-opacity-50" : "me-5"
          }`}
        >
          <div className="w-full max-w-md h-[70%] md:h-[60%] relative bg-white rounded-2xl border border-cyan-900 mx-5">
            {/* Header */}
            <div className="w-full p-3 flex justify-between items-center border-b border-cyan-900">
              <div className="text-center text-cyan-950 text-base font-bold">
                Chat Bot Doctor
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
            {/* Body */}
            <div className="p-4 overflow-y-auto flex flex-col gap-4 h-[calc(100%-120px)]">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.type === "doctor" ? "justify-end" : "justify-start"
                  } items-end gap-2`}
                >
                  {msg.type === "bot" && (
                    <div className="text-xs text-gray-500">{msg.timestamp}</div>
                  )}
                  <div
                    className={`shadow px-4 py-2 rounded-lg text-sm ${
                      msg.type === "doctor"
                        ? "bg-cyan-600 text-cyan-50"
                        : "bg-cyan-50 text-cyan-900"
                    }`}
                  >
                    {msg.text}
                  </div>
                  {msg.type === "doctor" && (
                    <div className="text-xs text-gray-500">{msg.timestamp}</div>
                  )}
                </div>
              ))}
              {isBotTyping && <LoadingIndicator />}
            </div>
            {/* Footer */}
            <div className="flex justify-center">
              <div className="flex w-11/12 max-w-lg h-12 px-3 py-2 rounded-lg border border-cyan-900 items-center">
                <input
                  type="text"
                  placeholder="Ketik Pesan..."
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
