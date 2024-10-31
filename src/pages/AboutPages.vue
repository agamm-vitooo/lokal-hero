<template>
  <div class="container mx-auto p-6">
    <h1 class="text-3xl font-bold mb-4">Tentang Aplikasi Pahlawan Nasional</h1>
    
    <p class="mb-4">
      Aplikasi ini dirancang untuk memberikan informasi lengkap mengenai pahlawan nasional Indonesia. Dengan menggunakan <strong>Vue.js</strong> sebagai framework utama, aplikasi ini menawarkan pengalaman pengguna yang responsif dan interaktif.
    </p>

    <h2 class="text-2xl font-semibold mb-2">Tujuan Aplikasi</h2>
    <p class="mb-4">
      Tujuan utama dari aplikasi ini adalah untuk memudahkan pengguna dalam menemukan dan mengeksplorasi data pahlawan nasional Indonesia. Pengguna dapat melakukan pencarian berdasarkan berbagai kriteria, termasuk nama, periode hidup, dan tahun lahir atau meninggal.
    </p>

    <h2 class="text-2xl font-semibold mb-2">Fitur Utama</h2>
    <ul class="list-disc ml-5 mb-4">
      <li>Tampilan daftar pahlawan nasional yang responsif dan mudah dibaca.</li>
      <li>Fitur pencarian yang canggih berdasarkan berbagai kriteria.</li>
      <li>Desain minimalis menggunakan <strong>Tailwind CSS</strong> untuk tampilan yang menarik.</li>
      <li>Koneksi ke API menggunakan <strong>Axios</strong> untuk mengambil data secara real-time.</li>
      <li>Pesan error yang jelas jika data tidak ditemukan atau terjadi kesalahan koneksi.</li>
    </ul>

    <h2 class="text-2xl font-semibold mb-2">Koneksi API</h2>
    <p class="mb-4">
      Aplikasi ini menggunakan beberapa endpoint API untuk mendapatkan data pahlawan nasional. Setiap pencarian akan dilakukan melalui endpoint yang sesuai, memastikan pengguna mendapatkan hasil yang akurat dan relevan.
    </p>

    <h2 class="text-2xl font-semibold mb-2">Kesimpulan</h2>
    <p>
      Dengan aplikasi ini, diharapkan pengguna dapat lebih mengenal dan menghargai kontribusi pahlawan nasional Indonesia. Kami berkomitmen untuk terus memperbarui dan meningkatkan aplikasi ini untuk memberikan informasi yang akurat dan bermanfaat.
    </p>
  </div>
</template>

<script>
export default {
  name: 'AboutPages',
};
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>
