import { useEffect, useState } from "react";
import Navbar from "../../../components/dokter/Navbar";
import Sidebar from "../../../components/dokter/Sidebar";
import { getConsultations } from "../../../api/doctor/doctor";

const Transaksi = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");

  // Fungsi untuk memanggil API dan memformat data
  const fetchConsultations = async () => {
    try {
      const response = await getConsultations();
      console.log("API Response:", response);
  
      if (response?.data) {
        const formattedData = response.data.reduce((acc, consultation) => {
          if (!consultation.created_at) {
            console.warn("Missing created_at in consultation:", consultation);
            return acc;
          }
  
          const dateObj = new Date(consultation.created_at);
          const formattedDate = `${dateObj.getDate().toString().padStart(2, "0")}-${(dateObj.getMonth() + 1)
            .toString()
            .padStart(2, "0")}-${dateObj.getFullYear()}`;
          const monthYear = `${dateObj.toLocaleString("id-ID", { month: "long" })} ${dateObj.getFullYear()}`;
  
          const record = {
            date: formattedDate,
            month: dateObj.getMonth() + 1,
            year: dateObj.getFullYear(),
            name: consultation.user?.username || "Tidak ada nama",
            amount: "Rp. 100.000,00",
            status: consultation.payment_status === "paid" ? "Selesai" : "DiProses",
          };
  
          const existingMonth = acc.find((item) => item.month === monthYear);
  
          if (existingMonth) {
            existingMonth.records.push(record);
          } else {
            acc.push({
              month: monthYear,
              records: [record],
            });
          }
  
          return acc;
        }, []);
  
        setData(formattedData);
        setFilteredData(formattedData);
      } else {
        console.error("Invalid response format:", response);
      }
    } catch (error) {
      console.error("Error fetching consultations:", error);
    }
  };  

  // Fungsi untuk memfilter data berdasarkan bulan dan tahun
  const handleFilter = () => {
    const filtered = data.map((section) => ({
      ...section,
      records: section.records.filter(
        (record) =>
          (!selectedYear || record.year === parseInt(selectedYear)) &&
          (!selectedMonth || record.month === parseInt(selectedMonth))
      ),
    })).filter((section) => section.records.length > 0);

    setFilteredData(filtered);
  };

  useEffect(() => {
    fetchConsultations();
  }, []);

  useEffect(() => {
    handleFilter();
  }, [selectedYear, selectedMonth]);

  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="p-6 bg-white min-h-screen flex-1 ml-64">
          <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-lg font-semibold mb-4">Pilih berdasarkan</h2>
            <div className="flex space-x-4 mb-6">
              <select
                className="preline-select px-3 py-2 border rounded-md"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                <option value="">Tahun</option>
                {[...new Set(data.flatMap((d) => d.records.map((r) => r.year)))].map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <select
                className="preline-select px-3 py-2 border rounded-md"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
              >
                <option value="">Bulan</option>
                {[...Array(12).keys()].map((month) => (
                  <option key={month + 1} value={month + 1}>
                    {new Date(0, month).toLocaleString("id-ID", { month: "long" })}
                  </option>
                ))}
              </select>
            </div>
            {filteredData.map((section, idx) => (
              <div key={idx} className="mb-6">
                <h3 className="text-lg font-bold mb-3">{section.month}</h3>
                <table className="w-full border-separate border-spacing-0 text-sm rounded-lg border border-gray-500">
                  <thead>
                    <tr style={{ backgroundColor: "#D3E8EA" }}>
                      <th className="px-4 py-2 rounded-tl-lg border border-gray-500">
                        Tanggal
                      </th>
                      <th className="px-4 py-2 border border-gray-500">Nama</th>
                      <th className="px-4 py-2 border border-gray-500">Total Bayar</th>
                      <th className="px-4 py-2 rounded-tr-lg border border-gray-500">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.records.map((record, idx) => (
                      <tr
                        key={idx}
                        className="text-center"
                        style={{ backgroundColor: "#D3E8EA" }}
                      >
                        <td className={`px-4 py-2 border border-gray-500 ${idx === section.records.length - 1 ? "rounded-bl-lg" : ""}`}>
                          {record.date}
                        </td>
                        <td className="px-4 py-2 border border-gray-500">
                          {record.name}
                        </td>
                        <td className="px-4 py-2 border border-gray-500">
                          {record.amount}
                        </td>
                        <td className={`px-4 py-2 border border-gray-500 ${idx === section.records.length - 1 ? "rounded-br-lg" : ""} ${record.status === "Selesai" ? "text-green-600" : "text-yellow-600"}`}>
                          {record.status}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Transaksi;
