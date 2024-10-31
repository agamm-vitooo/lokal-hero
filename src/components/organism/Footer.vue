<!-- Footer.vue -->
<template>
  <footer class="bg-blue-800 text-white py-4 mt-8">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <!-- Logo atau Nama Aplikasi -->
        <div class="text-lg font-bold mb-4 md:mb-0">
          <router-link to="/" class="hover:text-indigo-300">Pahlawan Nasional</router-link>
        </div>

        <!-- Navigasi Footer -->
        <div class="flex space-x-4 mb-4 md:mb-0">
          <router-link to="/" class="hover:text-indigo-300">Beranda</router-link>
          <router-link to="/about" class="hover:text-indigo-300">Tentang</router-link>
          <router-link to="/contact" class="hover:text-indigo-300">Kontak</router-link>
        </div>

        <!-- Informasi Hak Cipta -->
        <div class="text-sm text-center md:text-right">
          © {{ new Date().getFullYear() }} Pahlawan Nasional. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

