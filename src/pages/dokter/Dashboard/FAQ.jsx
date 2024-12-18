import Navbar from "../../../components/dokter/Navbar";
import Sidebar from "../../../components/dokter/Sidebar";

const FAQ = () => {
  const faqData = [
    {
      question: "Bagaimana cara mendaftar akun?",
      answers: [
        "Klik 'Daftar' dan masukan informasi seperti nama, email, dan kata sandi",
        "Verifikasi akun anda melalui email",
      ],
    },
    {
      question: "Bagaimana jika lupa kata sandi?",
      answers: [
        "Klik 'Lupa Kata Sandi' pada halaman login",
        "Masukan email anda dan ikuti langkah-langkah yang diberikan untuk mereset kata sandi",
      ],
    },
    {
      question: "Kenapa saya tidak bisa login?",
      answers: [
        "Pastikan anda menggunakan email dan kata sandi yang benar",
        "Periksa koneksi internet anda",
        "Jika masih gagal, reset kata sandi atau hubungi tim dukungan",
      ],
    },
    {
      question: "Kenapa aplikasi sering terhenti?",
      answers: [
        "Pastikan aplikasi anda diperbarui ke versi terbaru",
        "Bersihkan cache aplikasi di perangkat anda",
        "Reset perangkat anda atau hubungi tim dukungan jika masalah berlanjut",
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar spacing */}
        <div className="hidden lg:block lg:w-64"></div>

        <div className="flex-grow px-12 py-8">
          <h2 className="text-xl font-semibold mb-6">FAQ</h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <details
                key={index}
                className="group border border-gray-300 bg-white shadow-sm p-6 rounded-lg cursor-pointer max-w-lg"
              >
                <summary className="flex justify-between items-center">
                  <span className="text-gray-800 font-medium">
                    {faq.question}
                  </span>
                  <span className="group-open:rotate-180 transform transition duration-300">
                    <img src="/images/chevron-down.svg" alt="" />
                  </span>
                </summary>
                <div className="mt-2 space-y-2 text-sm text-gray-600">
                  <ul className="list-disc pl-5">
                    {faq.answers.map((answer, answerIndex) => (
                      <li key={answerIndex}>{answer}</li>
                    ))}
                  </ul>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
