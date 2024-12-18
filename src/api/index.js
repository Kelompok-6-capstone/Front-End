export { registerUser } from "./auth/registerUser";
export { loginUser } from "./auth/loginUser";
export { verifyOtp } from "./auth/verifyOtp";
export { resendOtp } from "./auth/resendOtp";
export {
  getProfileDoctor,
  updateProfileDoctor,
} from "../api/doctor/profileDoctor";
export {
  loginDoctor,
  logoutDoctor,
  registerDoctor,
  verifyDoctorOtp,
  resendDoctorOtp,
} from "../api/doctor/authDoctor";
