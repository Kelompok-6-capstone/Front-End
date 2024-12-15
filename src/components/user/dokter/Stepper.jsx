import React from 'react';

export default function Stepper() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 lg:gap-40 mb-5 mt-5">
            {/* Step 1 */}
            <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-teal-600 rounded-full shadow flex items-center justify-center">
                    <span className="text-white text-sm font-medium">1</span>
                </div>
                <div>
                    <p className="text-black text-base font-semibold">Isi Form</p>
                </div>
                <div className="hidden md:block flex-grow h-px bg-gray-200"></div>
            </div>
            <div className="h-px bg-gray-200" />

            {/* Step 2 */}
            <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-gray-100 rounded-full shadow flex items-center justify-center">
                    <span className="text-gray-800 text-sm font-medium">2</span>
                </div>
                <div>
                    <p className="text-gray-800 text-base font-semibold">Rincian Biaya</p>
                </div>
                <div className="hidden md:block flex-grow h-px bg-gray-200"></div>
            </div>

            {/* Step 3 */}
            <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-gray-100 rounded-full shadow flex items-center justify-center">
                    <span className="text-gray-800 text-sm font-medium">3</span>
                </div>
                <div>
                    <p className="text-gray-800 text-base font-semibold">Status Pembayaran</p>
                </div>
            </div>
        </div>
    );
}