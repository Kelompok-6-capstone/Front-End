import React from "react";

const TransactionModal = ({ isOpen, onClose, transaction }) => {
  if (!isOpen || !transaction) return null;

  return (
    <div className="fixed ps-72 inset-0 bg-black bg-opacity-20 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg max-w-3xl w-full mx-auto p-6">
        <div className="flex items-start space-x-6">
          <div className="flex-grow">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Keluhan untuk Transaksi #{transaction.id}
            </h2>
            <div className="mb-6">
              <p className="font-semibold mb-2">Keluhan:</p>
              <p className="bg-gray-100 p-3 rounded-md">{transaction.description || "Tidak ada keluhan."}</p>
            </div>
            <div className="text-center">
              <button
                onClick={onClose}
                className="px-6 py-2 bg-slate-600 text-white rounded-md hover:bg-slate-700 transition-colors"
              >
                Kembali
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionModal;

