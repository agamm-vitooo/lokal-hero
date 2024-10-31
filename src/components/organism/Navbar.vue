<template>
  <nav class="bg-blue-800 p-4 flex justify-between items-center sticky top-0 rounded-b-2xl">
    <!-- Logo di Kiri -->
    <div class="text-white text-lg font-bold">
      <router-link to="/">Pahlawan Nasional</router-link>
    </div>

    <!-- Tombol Hamburger untuk Menu Mobile -->
    <button
      class="md:hidden text-white focus:outline-none"
      @click="toggleMenu"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </button>

    <!-- Kontainer Menu -->
    <div :class="{'hidden': !isMenuOpen, 'flex': isMenuOpen}" class="md:flex flex-col md:flex-row w-full md:w-auto absolute md:static bg-blue-800 md:bg-transparent left-0 md:left-auto top-16">
      <div class="relative flex-grow mb-4 md:mb-0">
        <input
          type="text"
          v-model="searchQuery"
          @input="onSearch"
          placeholder="Cari pahlawan..."
          class="bg-blue-700 text-white rounded-lg py-2 px-4 pl-10 focus:outline-none focus:ring focus:ring-indigo-500 w-full"
        />
        <svg
          class="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M11 4a7 7 0 100 14 7 7 0 000-14zm0 0l6 6m-6-6l-6 6"
          />
        </svg>
      </div>
      <ul class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
        <li>
          <router-link to="/" class="block text-white hover:text-indigo-300 px-2 py-1 rounded">Beranda</router-link>
        </li>
        <li>
          <router-link to="/about" class="block text-white hover:text-indigo-300 px-2 py-1 rounded">Tentang</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      isMenuOpen: false, // Untuk mengelola status menu
    };
  },
  methods: {
    onSearch() {
      // Logika pencarian bisa ditambahkan di sini
      console.log('Mencari:', this.searchQuery);
    },
    toggleMenu() {
      // Mengubah status menu
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
/* Tambahan gaya jika diperlukan */
</style>
