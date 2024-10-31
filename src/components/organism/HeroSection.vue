<template>
  <section class="bg-slate-100 text-slate-600 py-20">
    <div class="container mx-auto px-4 text-center">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">
        Selamat Datang di Aplikasi Pahlawan Nasional
      </h1>
      <p class="text-lg md:text-xl mb-8">
        Temukan dan telusuri data pahlawan nasional Indonesia dengan mudah.
        Gunakan fitur pencarian untuk menemukan informasi yang Anda butuhkan.
      </p>
      <router-link to="/heroes" class="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded">
        Lihat Pahlawan
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
};
</script>

<style scoped>
/* Tambahan gaya jika diperlukan */
</style>
