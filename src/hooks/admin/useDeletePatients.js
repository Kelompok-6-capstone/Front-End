import { useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

export function useDeletePatient() {
  const [deletedPatientId, setDeletedPatientId] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const deletePatient = async (id) => {
    const confirmResult = await Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Data pasien ini akan dihapus secara permanen!",
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

      await axiosInstance.delete(`/admin/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setDeletedPatientId(id); // Simpan ID pasien yang dihapus
      await Swal.fire("Berhasil!", "Data pasien telah dihapus.", "success");
      return true; // Indikator berhasil untuk komponen pemanggil
    } catch (err) {
      console.error("Gagal menghapus pasien:", err);
      setError(
        err.response?.data || "Terjadi kesalahan saat menghapus pasien."
      );

      // SweetAlert notifikasi gagal
      await Swal.fire(
        "Gagal!",
        error || "Terjadi kesalahan saat menghapus pasien.",
        "error"
      );
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { deletePatient, deletedPatientId, error, loading };
}
