# 🌟 **Calmind**  
**Calmind** adalah aplikasi yang dirancang untuk memberikan akses mudah dan terjangkau ke layanan kesehatan mental. Aplikasi ini menjadi jembatan bagi individu untuk terhubung dengan profesional melalui konsultasi online. Selain itu, Calmind menyediakan fitur edukasi, panduan relaksasi, dan chatbot AI interaktif untuk memberikan dukungan instan.

## 📜 Link Deployment

Berikut adalah hasil dari website kami dapat dilihat di link berikut
[Link Deployment](https://calmind6.netlify.app/)

---

## 🎯 **Fitur Utama**

### 👤 **Pengguna**
- **Daftar Dokter**: Jelajahi spesialis kesehatan mental yang tersedia.
- **Form Pengaduan**: Ajukan keluhan dan gejala untuk konsultasi.
- **Rekomendasi Dokter**: Dapatkan saran dan diagnosis langsung dari dokter.
- **Artikel Kesehatan Mental**: Akses informasi edukatif seputar kesehatan mental.
- **Pembayaran Otomatis (Midtrans)**: Proses pembayaran yang aman dan mudah.
- **Chat dengan Dokter**: Komunikasikan kebutuhan Anda secara langsung.
- **Profil Pengguna**: Kelola informasi pribadi Anda.
- **Beranda**: Akses fitur utama dari satu halaman intuitif.
- **Login/Daftar**: Registrasi atau masuk dengan mudah.
- **Chatbot AI**: Bantuan instan melalui chatbot berbasis AI.

### 🩺 **Dokter**
- **Daftar Dokter**: Kelola profil dan layanan Anda sebagai dokter.
- **Form Pengaduan**: Tinjau keluhan pasien secara langsung.
- **Rekomendasi Dokter**: Berikan rekomendasi atau diagnosis kepada pasien.
- **Pembayaran Manual**: Verifikasi dan kelola transaksi pembayaran.
- **Chat dengan Pasien**: Komunikasi real-time dengan pasien.
- **Profil Dokter**: Kelola informasi pribadi dan profesional Anda.
- **Notifikasi**: Terima pemberitahuan terkait aktivitas pasien.
- **Beranda**: Pusat kendali fitur dokter.
- **Login/Daftar**: Akses akun dokter dengan mudah.
- **Chatbot AI**: Asisten virtual untuk meningkatkan layanan.

### 🔧 **Admin**
- **Daftar Pengguna**: Lihat dan kelola daftar pengguna aplikasi.
- **Kelola Pengguna (CRUD)**: Tambah, ubah, atau hapus data pengguna.
- **Kelola Transaksi**: Pantau dan kelola pembayaran pengguna.
- **Kelola Artikel (CRUD)**: Publikasi dan manajemen artikel kesehatan mental.
- **Aktivitas Pengguna**: Lacak aktivitas pengguna secara real-time.
- **Profil Admin**: Kelola informasi akun administrator.

---

## 📂 **Struktur Folder Proyek**

```plaintext
Calmind-FrontEnd/
│
├── public/                 # File statis publik
│   └── index.html          # File utama HTML
│
├── src/                    # Sumber aplikasi
│   ├── api/                # Panggilan API dengan Axios
│   ├── assets/             # Gambar dan aset statis
│   ├── components/         # Komponen UI yang reusable
│   ├── data/               # Data statis atau mock
│   ├── hooks/              # Custom React hooks
│   ├── pages/              # Halaman utama aplikasi
│   ├── routes/             # Konfigurasi navigasi
│   ├── stores/             # State management global (Zustand)
│   ├── utils/              # Helper functions
│   ├── App.jsx             # Root component
│   ├── index.css           # Styling global menggunakan Tailwind CSS
│   └── main.jsx            # Entry point aplikasi
│
├── .env                    # Variabel lingkungan
├── .gitignore              # File/folder yang diabaikan Git
├── tailwind.config.js      # Konfigurasi Tailwind CSS
├── vite.config.js          # Konfigurasi Vite
└── README.md               # Dokumentasi proyek

```



## 🛠️ Teknologi yang Digunakan

- **Bahasa Pemrograman**: Javascript
- **Library**: React, Vite, Tailwind CSS, Preline, Sweet Alert, JS-Cookie, etc.
- **State Management**: Zustand
- **AI Chatbot**: Gemini API
- **Hosting**: Netlify
- **Version Control**: Git, GitHub

---

## Instalasi dan Konfigurasi

1. Clone repository:
   ```bash
   git clone https://github.com/username/Kelompok-6-capstone/Front-End.git
   ```

2. Navigasi ke proyek direktori:
   ```bash
   cd Front-End
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Jalankan aplikasi:
   ```bash
   npm run dev
   ```

5. Mengonfigurasi variabel lingkungan:
   - `REACT_APP_API_URL`: Backend API URL


---

## License
This project is licensed under the [MIT License](LICENSE).

---

## Contact
For more information or inquiries, contact us at **calmind.support@gmail.com**.

