import React from 'react';

const ForgotPasswordPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>
                <div className="mb-6">
                    <label className="block text-gray-700">Email:</label>
                    <input
                        type="email"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email"
                    />
                </div>
                <button className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-200">
                    Send Reset Link
                </button>
                <p className="text-center mt-4">
                    Remembered your password?{' '}
                    <a href="/login" className="text-blue-500 hover:underline">
                        Login
                    </a>
                </p>
            </form>
        </div>
    );
};

export default ForgotPasswordPage;