import axiosInstanceDoctor from "../../utils/axiosInstanceDoctor";

const sendMessageToApiDoctor = async (inputMessage) => {
    try {
        const response = await axiosInstanceDoctor.post("/doctor/chatbot", {
            message: inputMessage,
        });

        // Validasi dan bersihkan respon dari bot
        const botReply = response.data?.data?.response?.trim()
            ? response.data.data.response
            : "Maaf, saya tidak mengerti pertanyaan Anda.";

        return botReply;
    } catch (error) {
        console.error("Kesalahan saat memanggil API: ", error);
        console.error("Detail respons error: ", error.response?.data);
        throw new Error("Maaf, terjadi kesalahan. Silakan coba lagi nanti.");
    }
};

export { sendMessageToApiDoctor };
