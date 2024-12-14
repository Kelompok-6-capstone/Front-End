import axiosInstanceUser from '../../utils/axiosInstanceUser';

/**
 * Fetch all doctors.
 * @returns {Promise<Object>} Response data from the API.
 */
export const fetchDoctors = async () => {
    try {
        const response = await axiosInstanceUser.get('/user/doctors');
        return response.data;
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data.message || 'Gagal mengambil data dokter.');
        } else if (error.request) {
            throw new Error('Tidak dapat terhubung ke server. Periksa koneksi internet Anda.');
        } else {
            throw new Error(error.message || 'Terjadi kesalahan.');
        }
    }
};

/**
 * Search doctors based on query.
 * @param {string} query - The search term to find doctors.
 * @returns {Promise<Object>} Response data from the API.
 */
export const searchDoctors = async (query) => {
    try {
        const response = await axiosInstanceUser.get('/user/doctors/search', {
            params: { query },
        });
        return response.data;
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data.message || 'Gagal mencari data dokter.');
        } else if (error.request) {
            throw new Error('Tidak dapat terhubung ke server. Periksa koneksi internet Anda.');
        } else {
            throw new Error(error.message || 'Terjadi kesalahan.');
        }
    }
};
