const DoctorTable = ({ data }) => (
    <div className="text-center">
      <h2 className="text-[24px] not-italic font-semibold text-center mb-4 mt-6">Daftar Dokter</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-cyan-50">
            <tr>
              <th className="px-6 py-3 text-sm font-semibold text-black border-[1px] border-opacity-15 border-[#000]">Id</th>
              <th className="px-20 py-3 text-sm font-semibold text-black border-[1px] border-opacity-15 border-[#000]">Nama</th>
              <th className="px-6 py-3 text-sm font-semibold text-black border-[1px] border-opacity-15 border-[#000]">Email</th>
              <th className="px-6 py-3 text-sm font-semibold text-black border-[1px] border-opacity-15 border-[#000]">No Telp</th>
              <th className="px-10 py-3 text-sm font-semibold text-black border-[1px] border-opacity-15 border-[#000]">Tanggal Lahir</th>
              <th className="px-6 py-3 text-sm font-semibold text-black border-[1px] border-opacity-15 border-[#000]">Domisili</th>
              <th className="px-6 py-3 text-sm font-semibold text-black border-[1px] border-opacity-15 border-[#000]">Spesialisasi</th>
              <th className="px-20 py-3 text-sm font-semibold text-black border-[1px] border-opacity-15 border-[#000]">Harga</th>
              <th className="px-6 py-3 text-sm font-semibold text-black border-[1px] border-opacity-15 border-[#000]">Rating</th>
              <th className="px-28 py-3 text-sm font-semibold text-black border-[1px] border-opacity-15 border-[#000]">Jadwal Praktik</th>
              <th className="px-10 py-3 text-sm font-semibold text-black border-[1px] border-opacity-15 border-[#000]">Action</th>
            </tr>
          </thead>
          <tbody className="bg-cyan-50 divide-y divide-gray-200">
            {data.map((doctor) => (
              <tr key={doctor.id}>
                <td className="px-6 py-4 border-[1px] border-opacity-15 border-[#000]">{doctor.id}</td>
                <td className="px-6 py-4 border-[1px] border-opacity-15 border-[#000]">{doctor.nama}</td>
                <td className="px-6 py-4 border-[1px] border-opacity-15 border-[#000]">{doctor.email}</td>
                <td className="px-6 py-4 border-[1px] border-opacity-15 border-[#000]">{doctor.noTelp}</td>
                <td className="px-6 py-4 border-[1px] border-opacity-15 border-[#000]">{doctor.tanggalLahir}</td>
                <td className="px-6 py-4 border-[1px] border-opacity-15 border-[#000]">{doctor.domisili}</td>
                <td className="px-6 py-4 border-[1px] border-opacity-15 border-[#000]">{doctor.spesialisasi}</td>
                <td className="px-6 py-4 border-[1px] border-opacity-15 border-[#000]">{doctor.harga}</td>
                <td className="px-6 py-4 border-[1px] border-opacity-15 border-[#000]">{doctor.rating}</td>
                <td className="px-6 py-4 border-[1px] border-opacity-15 border-[#000]">{doctor.jadwalPraktik}</td>
                <td className="px-6 py-4 border-[1px] border-opacity-15 border-[#000]">
                    <div className="flex gap-3">
                        <button>
                            <img src="/images/admin/edit-button.svg" alt="edit" />
                        </button>
                        <button>
                            <img src="/images/admin/trash-button.svg" alt="trash" />
                        </button>
                    </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
  
  export default DoctorTable;
  