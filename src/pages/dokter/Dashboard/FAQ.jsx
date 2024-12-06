import Navbar from "../../../components/dokter/Navbar";
import Sidebar from "../../../components/dokter/Sidebar";

const FAQ = () => {
  const faqData = [
    "Bagaimana cara mendaftar akun?",
    "Bagaimana jika lupa kata sandi?",
    "Kenapa Saya tidak bisa login?",
    "Kenapa aplikasi sering terhenti?",
  ];

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar spacing */}
        <div className="hidden lg:block lg:w-64"></div>

        <div className="flex-grow p-8">
          <h2 className="text-xl font-semibold mb-6">FAQ</h2>
          <div className="space-y-4">
            {faqData.map((question, index) => (
              <details
                key={index}
                className="group border border-gray-300 bg-white shadow-sm p-4 rounded-lg cursor-pointer max-w-lg"
              >
                <summary className="flex justify-between items-center">
                  <span className="text-gray-800 font-medium">{question}</span>
                  <span className="group-open:rotate-180 transform transition duration-300">
                    <img src="/images/chevron-down.svg" alt="" />
                  </span>
                </summary>
                <p className="mt-2 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sollicitudin urna in felis scelerisque.
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
