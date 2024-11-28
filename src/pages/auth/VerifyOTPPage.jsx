import React from 'react';

const VerifyOTPPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6">Verify OTP</h2>
                <div className="mb-6">
                    <label className="block text-gray-700">OTP Code:</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter the OTP code"
                    />
                </div>
                <button className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 transition duration-200">
                    Verify
                </button>
            </form>
        </div>
    );
};

export default VerifyOTPPage;