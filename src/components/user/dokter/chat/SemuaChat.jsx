import React from 'react'
import {Link} from 'react-router-dom'   

export default function SemuaChat() {
    return (
        <div>
            <div className="w-[1247px] h-[816px] relative mt-20 sm:px-6 md:mt-24 lg:mt-28 lg:mx-20 flex flex-col lg:flex-row gap-4">
                <div className="w-[358px] h-[816px] left-0 top-0 absolute opacity-80 bg-white rounded-bl-lg rounded-br-lg border border-neutral-300 flex flex-col">
                    <div className="p-2.5 flex justify-center items-center gap-3">
                        <div className="w-6 h-6 relative" />
                        <div className="text-center text-black text-xl font-semibold">Chat</div>
                    </div>
                    <div className="pl-[23px] pr-5 py-2.5 border-b border-neutral-300 flex items-center">
                        <img
                            className="w-10 h-10 rounded-full"
                            src="https://res.cloudinary.com/dnvxutvky/image/upload/v1734490946/aemxywyt4lovxwditlzm.png"
                            alt="User"
                        />
                        <div className="ml-3 flex flex-1 flex-col">
                            <span className="text-black text-xs font-semibold">Dr. Sarah Wijaya, S.Psi</span>
                            <Link tp="/user/chat-dokter">
                                <span className="text-neutral-400 text-xs font-normal">
                                    Klik Untuk Memulai Chat
                                </span>
                            </Link>
                        </div>
                        <div className="text-black text-[10px] font-normal">12.00</div>
                    </div>
                </div>
                <div className="w-[889px] h-[816px] pl-[198px] pr-[133px] pt-[74px] pb-[270px] left-[358px] top-0 absolute bg-neutral-50 flex flex-col items-center gap-10">
                    <div className="w-[558px] h-[372px] flex flex-col">
                        <img src="/images/user/semua-chat.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
