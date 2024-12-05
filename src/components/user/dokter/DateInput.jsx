import React from "react";

const DateInput = () => {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor="date" className="text-gray-700 font-medium">
                Pilih Tanggal
            </label>
            <input
                type="date"
                id="date"
                name="date"
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
        </div>
    );
};

export default DateInput;
