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
 * Search doctors based on query (searching by username).
 * @param {string} query - The search term to find doctors.
 * @returns {Promise<Object>} Response data from the API.
 */
export const searchDoctors = async (query) => {
    try {
        // Encode query to handle spaces and special characters
        const encodedQuery = encodeURIComponent(query);

        const response = await axiosInstanceUser.get(`/user/doctors/search?query=${encodedQuery}`);
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

/**
 * Fetch doctor details by ID.
 * @param {number} id - Doctor's ID.
 * @returns {Promise<Object>} Doctor's details.
 */
export const fetchDoctorById = async (id) => {
    try {
        if (!id || typeof id !== 'number') {
            throw new Error('Parameter ID tidak valid. Pastikan ID adalah angka.');
        }

        const response = await axiosInstanceUser.get(`/user/doctors/${id}`);
        return response.data;
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data.message || 'Gagal mengambil detail dokter.');
        } else if (error.request) {
            throw new Error('Tidak dapat terhubung ke server. Periksa koneksi internet Anda.');
        } else {
            throw new Error(error.message || 'Terjadi kesalahan yang tidak diketahui.');
        }
    }
};
