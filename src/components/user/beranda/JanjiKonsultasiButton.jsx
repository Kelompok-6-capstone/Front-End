import React from "react";
export default function JanjiKonsultasiButton({ dokter }) {
    if (!dokter) return null;

    return (
        <a
            href={`/user/dokter/${dokter.id}`}
            className="w-28 h-[36.66px] px-[9.17px] py-[4.58px] bg-teal-900 rounded justify-center items-center gap-[14.89px] inline-flex hover:bg-teal-700 hover:scale-105 transition-transform duration-200 ease-in-out"
        >
            <div className="text-center text-neutral-100 text-xs font-semibold">Buat Janji</div>
        </a>
    );
}
