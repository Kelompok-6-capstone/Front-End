import React, { useState } from "react";
import LoginForm from "../../components/auth/LoginForm";
import useAuth from "../../hooks/user/useAuth";

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const { handleLogin, errorMessage } = useAuth();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(formData);
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50">
            <div className="hidden md:block w-1/2">
                <img
                    src="/images/auth/screen-dekstop.png"
                    alt="Login illustration"
                    className="w-full h-auto object-cover"
                />
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center">
                <LoginForm
                    formData={formData}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    errorMessage={errorMessage}
                />
            </div>
        </div>
    );
};

export default LoginPage;
