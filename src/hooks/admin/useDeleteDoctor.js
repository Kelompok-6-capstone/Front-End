import { useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

export function useDeleteDoctor() {
  const [deletedDoctorId, setDeletedDoctorId] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const deleteDoctor = async (id) => {
    const confirmResult = await Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Data dokter ini akan dihapus secara permanen!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal",
    });

    if (!confirmResult.isConfirmed) return; // Batalkan jika pengguna memilih "Batal"

    setLoading(true);
    setError(null);

    try {
      const token = Cookies.get("token_admin");
      if (!token) {
        setError("No admin token found");
        await Swal.fire("Error!", "Token admin tidak ditemukan.", "error");
        return false;
      }

      await axiosInstance.delete(`/admin/docters/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setDeletedDoctorId(id); // Simpan ID dokter yang dihapus
      await Swal.fire("Berhasil!", "Data dokter telah dihapus.", "success");
      return true; // Indikator berhasil untuk komponen pemanggil
    } catch (err) {
      console.error("Gagal menghapus dokter:", err);
      setError(
        err.response?.data || "Terjadi kesalahan saat menghapus dokter."
      );

      // SweetAlert notifikasi gagal
      await Swal.fire(
        "Gagal!",
        error || "Terjadi kesalahan saat menghapus dokter.",
        "error"
      );
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { deleteDoctor, deletedDoctorId, error, loading };
}
