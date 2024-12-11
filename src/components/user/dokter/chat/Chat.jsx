import React from 'react'

export default function Chat() {
    return (
        <>
            <div className="w-full max-w-md h-[585px] bg-white flex flex-col rounded-bl-2xl rounded-br-2xl border border-neutral-300">
                {/* Header */}
                <div className="h-16 flex items-center justify-center border-b border-neutral-300 bg-white">
                    <h1 className="text-cyan-950 text-sm font-semibold">Chat Dokter</h1>
                </div>
                {/* Chat Content */}
                <div className="flex-grow p-4 bg-neutral-100 overflow-y-auto">
                    <div className="space-y-6">
                        {/* User Message */}
                        <div className="flex justify-end items-end">
                            <div>
                                <div className="text-xs text-gray-500 text-right mb-1">Today, 12:00</div>
                                <div className="bg-cyan-600 text-cyan-50 text-sm px-4 py-2 rounded-lg shadow">
                                    Halo Dokter!
                                </div>
                            </div>
                        </div>

                        {/* Bot Message */}
                        <div className="flex justify-start items-end">
                            <div>
                                <div className="bg-cyan-50 text-cyan-900 text-sm px-4 py-2 rounded-lg shadow">
                                    Selamat Siang, Ada yang bisa dibantu?
                                </div>
                                <div className="text-xs text-gray-500 mt-1">Today, 12:00</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="h-16 px-4 py-2 flex items-center border-t border-neutral-300">
                    <input
                        type="text"
                        placeholder="Ketik Pesan..."
                        className="flex-grow bg-transparent outline-none text-sm text-cyan-950"
                    />
                    <button className="ml-3">
                        <img
                            src="/images/user/beranda/send-horizontal.svg"
                            alt="Send"
                            className="w-6 h-6"
                        />
                    </button>
                </div>
            </div>
        </>
    )
}
