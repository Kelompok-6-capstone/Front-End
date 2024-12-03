import React from 'react';
import { Link } from 'react-router-dom';

const ArtikelCard = ({ id, title, date, description, image }) => {
    const truncatedDescription = description.length > 75
        ? description.slice(0, 75) + '...'
        : description;

    return (
        <div className="bg-white shadow-md rounded-2xl overflow-hidden">
            <img
                className="w-full h-48 object-cover rounded-t-2xl"
                src={image}
                alt={title}
            />
            <div className="p-6">
                <h3 className="text-cyan-950 text-lg font-semibold mb-2">{title}</h3>
                <p className="text-neutral-500 text-sm mb-4">{date}</p>
                <p className="text-cyan-950 text-sm mb-4">{truncatedDescription}</p>
                <Link to={`/artikel/${id}`}>
                    <button className="text-blue-500 font-bold text-sm hover:underline">
                        Lihat Detail →
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ArtikelCard;
