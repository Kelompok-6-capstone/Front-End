import React from 'react';

const ArtikelCard = ({ title, date, description, image }) => {
    return (
        <div className="bg-white shadow-md rounded-2xl overflow-hidden mb-16">
            <img
                className="w-full h-48 object-cover rounded-t-2xl"
                src={image}
                alt={title}
            />
            <div className="p-6">
                <h3 className="text-cyan-950 text-lg font-semibold mb-2">{title}</h3>
                <p className="text-neutral-500 text-sm mb-4">{date}</p>
                <p className="text-cyan-950 text-sm mb-4">{description}</p>
                <button className="text-blue-500 font-bold text-sm hover:underline">
                    Lihat Detail →
                </button>
            </div>
        </div>
    );
};

export default ArtikelCard;
