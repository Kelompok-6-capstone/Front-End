import axiosInstanceUser from '../utils/axiosInstanceUser';

// Fungsi untuk mendapatkan daftar FAQ
export const fetchFaqOptions = async () => {
    try {
        const response = await axiosInstanceUser.get('/customer-service');
        if (response.data.success) {
            return response.data.data;
        } else {
            throw new Error('Gagal mendapatkan daftar FAQ.');
        }
    } catch (error) {
        console.error('Error fetching FAQ options:', error);
        throw error;
    }
};

// Fungsi untuk mengirim pesan ke API dan mendapatkan respons bot
export const getBotResponse = async (message) => {
    try {
        const response = await axiosInstanceUser.post('/customer-service', { message });
        if (response.data.success) {
            return response.data.data.response;
        } else {
            throw new Error('Gagal mendapatkan respons dari server.');
        }
    } catch (error) {
        console.error('Error sending message to API:', error);
        throw error;
    }
};
