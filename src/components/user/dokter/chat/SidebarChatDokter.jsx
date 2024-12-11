import React from 'react'

export default function SidebarChatDokter() {
    return (
        <div>
            <div className="max-w-sm h-auto p-4 bg-white rounded-lg border border-neutral-300 shadow-md opacity-80">
                <div className="text-center text-black text-xl font-semibold mb-4">
                    Chat
                </div>
                <div>
                    {/* Konten Chat */}
                    <div className="flex items-center justify-between border-b border-neutral-300 py-3">
                        <img
                            className="w-10 h-10 rounded-full"
                            src="/images/user/avatar.png"
                            alt="Avatar"
                        />
                        {/* Informasi Pengguna */}
                        <div className="flex-1 ml-4">
                            <div className="text-black text-sm font-semibold">
                                Dr. Sarah Wijaya, S.Psi
                            </div>
                            <div className="text-neutral-400 text-xs font-medium">
                                Hallo
                            </div>
                        </div>
                        {/* Waktu & Notifikasi */}
                        <div className="flex flex-col items-end">
                            <span className="text-black text-xs font-normal">
                                12.00
                            </span>
                            <div className="flex justify-center items-center mt-1 px-2 py-1 bg-teal-600 rounded-full">
                                <span className="text-teal-50 text-xs font-medium">
                                    2
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {/* Konten Chat */}
                    <div className="flex items-center justify-between border-b border-neutral-300 py-3">
                        <img
                            className="w-10 h-10 rounded-full"
                            src="/images/user/avatar.png"
                            alt="Avatar"
                        />
                        {/* Informasi Pengguna */}
                        <div className="flex-1 ml-4">
                            <div className="text-black text-sm font-semibold">
                                Dr. Sarah Wijaya, S.Psi
                            </div>
                            <div className="text-neutral-400 text-xs font-medium">
                                Hallo
                            </div>
                        </div>
                        {/* Waktu & Notifikasi */}
                        <div className="flex flex-col items-end">
                            <span className="text-black text-xs font-normal">
                                12.00
                            </span>
                            <div className="flex justify-center items-center mt-1 px-2 py-1 bg-teal-600 rounded-full">
                                <span className="text-teal-50 text-xs font-medium">
                                    2
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
