import { create } from "zustand";
import axiosInstance from "../utils/axiosInstance";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

const useProfileStore = create((set) => ({
  profile: { username: "", avatar: "" },
  setProfile: (profile) => set({ profile }),
  fetchProfile: async () => {
    try {
      const token = Cookies.get("token_admin");
      if (!token) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No admin token found",
        });
        return;
      }
      const response = await axiosInstance.get("admin/profil", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.data.success) {
        set({ profile: response.data.data });
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to load profile.",
      });
    }
  },
}));

export default useProfileStore;
