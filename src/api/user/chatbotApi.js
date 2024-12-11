// File: /src/api/chatbotApi.js

import axios from "axios";
import Cookies from "js-cookie";

const sendMessageToApi = async (inputMessage) => {
    try {
        // Ambil token dari cookies
        const token = Cookies.get("token_user");

        // Panggil API chatbot
        const response = await axios.post(
            "https://api.calmind.site/user/chatbot",
            { message: inputMessage },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        // Validasi dan bersihkan respon dari bot
        const botReply = response.data?.data?.response?.trim()
            ? response.data.data.response
            : "Maaf, saya tidak mengerti pertanyaan Anda.";

        return botReply;
    } catch (error) {
        console.error("Kesalahan saat memanggil API: ", error);
        console.error("Detail respons error: ", error.response?.data);
        throw new Error(
            "Maaf, terjadi kesalahan. Silakan coba lagi nanti."
        );
    }
};

export { sendMessageToApi };