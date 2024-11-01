<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-16 px-4">
    <div class="max-w-4xl mx-auto">
      <!-- Header Section -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-4">
          Tentang Aplikasi
        </div>
        <h1 class="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Aplikasi Pahlawan
          <span class="text-indigo-600">Nasional</span>
        </h1>
        <p class="text-lg text-slate-600 max-w-2xl mx-auto">
          Melestarikan sejarah dan menghormati jasa para pahlawan melalui teknologi modern
        </p>
      </div>

      <!-- Main Content -->
      <div class="space-y-16">
        <!-- Vision Section -->
        <div class="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
          <div class="flex flex-col md:flex-row gap-8">
            <div class="md:w-1/3">
              <div class="w-16 h-16 bg-indigo-50 rounded-xl flex items-center justify-center mb-4">
                <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <h2 class="text-2xl font-bold text-slate-900 mb-2">Tujuan Kami</h2>
            </div>
            <div class="md:w-2/3">
              <p class="text-slate-600 leading-relaxed">
                Aplikasi ini dirancang untuk memudahkan akses terhadap informasi pahlawan nasional Indonesia. 
                Dengan menggunakan teknologi modern seperti <span class="text-indigo-600 font-semibold">Vue.js</span>, 
                kami menciptakan platform yang responsif dan interaktif untuk mengenal lebih dekat para pejuang kemerdekaan.
              </p>
            </div>
          </div>
        </div>

        <!-- Features Grid -->
        <div class="grid md:grid-cols-2 gap-6">
          <div class="group bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300">
            <div class="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-indigo-100 transition-colors duration-300">
              <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-slate-900 mb-2">Pencarian Canggih</h3>
            <p class="text-slate-600">Filter berdasarkan nama, periode, dan kriteria lainnya untuk menemukan informasi yang Anda butuhkan.</p>
          </div>

          <div class="group bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300">
            <div class="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-indigo-100 transition-colors duration-300">
              <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-slate-900 mb-2">Tampilan Responsif</h3>
            <p class="text-slate-600">Desain minimalis dengan Tailwind CSS yang menyesuaikan dengan sempurna di berbagai perangkat.</p>
          </div>

          <div class="group bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300">
            <div class="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-indigo-100 transition-colors duration-300">
              <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-slate-900 mb-2">Real-time Data</h3>
            <p class="text-slate-600">Integrasi API menggunakan Axios untuk mendapatkan informasi terkini secara real-time.</p>
          </div>

          <div class="group bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300">
            <div class="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-indigo-100 transition-colors duration-300">
              <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-slate-900 mb-2">Kustomisasi</h3>
            <p class="text-slate-600">Pengaturan tampilan dan filter yang dapat disesuaikan dengan kebutuhan pengguna.</p>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="text-center bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl p-8 text-white">
          <h2 class="text-2xl font-bold mb-4">Mulai Jelajahi Sekarang</h2>
          <p class="mb-6 text-indigo-100">Temukan kisah inspiratif para pahlawan nasional Indonesia</p>
          <router-link 
            to="/heroes"
            class="inline-flex items-center px-6 py-3 rounded-lg bg-white text-indigo-600 font-semibold hover:bg-indigo-50 transition-colors duration-200"
          >
            Telusuri Pahlawan
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPages'
};
</script>