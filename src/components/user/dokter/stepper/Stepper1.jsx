import React from 'react';

export default function Stepper1() {
    const steps = [
        { id: 1, label: 'Isi Form', active: true },
        { id: 2, label: 'Rincian Biaya', active: false },
        { id: 3, label: 'Status Pembayaran', active: false },
    ];

    return (
        <div className="flex flex-col md:flex-row items-start gap-4 px-4 md:px-10 lg:px-48 mb-10">
            {steps.map((step, index) => (
                <React.Fragment key={step.id}>
                    <div className="flex items-center">
                        <div
                            className={`w-8 h-8 flex justify-center items-center rounded-full shadow ${step.active ? 'bg-teal-600 text-white' : 'bg-gray-100 text-gray-800'
                                }`}
                        >
                            <span className="text-xs font-medium">{step.id}</span>
                        </div>
                        <span
                            className={`ml-2 text-sm font-semibold whitespace-nowrap ${step.active ? 'text-black' : 'text-gray-800'
                                }`}
                        >
                            {step.label}
                        </span>
                    </div>
                    {index < steps.length - 1 && (
                        <div className="flex-grow h-px bg-gray-200 hidden md:block mt-4"></div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}
