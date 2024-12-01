import { useState } from "react";

const PasswordInput = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="mb-4">
            <label className="text-cyan-900 text-sm font-semibold mb-2">
                Kata Sandi
            </label>
            <div className="max-w-sm space-y-3">
                <div className="relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ps-10"
                        placeholder="Masukkan Kata Sandi"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <img src="/images/auth/passwd.svg" alt="logo password" />
                    </div>
                    <button
                        type="button"
                        className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? (
                            <img src="/images/auth/hide.svg" alt="" />
                        ) : (
                            <img src="/images/auth/unhide.svg" alt="" />
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PasswordInput;
