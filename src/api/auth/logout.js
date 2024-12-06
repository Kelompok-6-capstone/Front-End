import Swal from "sweetalert2";
import axiosInstance from "../../utils/axiosInstance";

/**
 * Fungsi untuk logout pengguna.
 */
export const logoutUser = async () => {
    try {
        // Panggil API logout untuk menghapus cookie di server
        await axiosInstance.get("/user/logout");

        // Tampilkan pesan sukses
        Swal.fire({
            icon: "success",
            title: "Logout Berhasil",
            text: "Anda telah logout. Silakan login kembali jika ingin mengakses akun.",
        }).then(() => {
            // Redirect ke halaman login setelah SweetAlert ditutup
            window.location.href = "/login/user";
        });
    } catch (error) {
        console.error("Error during logout:", error);

        // Tampilkan pesan kesalahan jika logout gagal
        Swal.fire({
            icon: "error",
            title: "Logout Gagal",
            text: error.response?.data?.message || "Terjadi kesalahan saat logout. Silakan coba lagi.",
        });
    }
};

/**
 * Fungsi untuk menampilkan konfirmasi logout dengan SweetAlert.
 */
export const confirmLogout = () => {
    Swal.fire({
        title: "Apakah Anda yakin ingin logout?",
        text: "Anda harus login kembali untuk mengakses akun.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Ya, logout",
        cancelButtonText: "Batal",
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
    }).then(async (result) => {
        if (result.isConfirmed) {
            await logoutUser(); // Panggil fungsi logout jika pengguna mengonfirmasi
        }
    });
};
