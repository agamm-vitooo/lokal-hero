<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Pahlawan Nasional Indonesia</h1>
    
    <form @submit.prevent="searchHeroes" class="mb-4">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Cari pahlawan berdasarkan nama atau kata kunci"
        class="border rounded p-2 mr-2 bg-slate-50"
      />
      <button type="submit" class="bg-blue-500 text-white p-2 rounded">
        Cari
      </button>
    </form>
    
    <div class="grid grid-cols-1 text-slate-600 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="hero in displayedHeroes"
        :key="hero.id"
        class="border rounded p-4 shadow hover:shadow-lg"
      >
        <h2 class="text-lg font-semibold">{{ hero.name }}</h2>
        <p><strong>Tahun Lahir:</strong> {{ hero.birthYear }}</p>
        <p><strong>Tahun Meninggal:</strong> {{ hero.deathYear }}</p>
        <p><strong>Keterangan:</strong> {{ hero.description }}</p>
      </div>
    </div>

    <div v-if="errorMessage" class="mt-4 text-red-500">
      {{ errorMessage }}
    </div>

    <!-- Pagination Component -->
    <Pagination
      :currentPage="currentPage"
      :totalPages="totalPages"
      @update:currentPage="updateCurrentPage"
    />
  </div>
</template>

<script>
import axios from 'axios';
import Pagination from './Pagination.vue'; // Pastikan path ini benar

export default {
  components: {
    Pagination,
  },
  data() {
    return {
      searchQuery: '',
      heroes: [],
      errorMessage: '',
      currentPage: 1,
      itemsPerPage: 12, // Menampilkan 10 pahlawan per halaman
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.heroes.length / this.itemsPerPage);
    },
    displayedHeroes() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return this.heroes.slice(start, start + this.itemsPerPage);
    },
  },
  methods: {
    async searchHeroes() {
      this.errorMessage = '';
      try {
        const response = await axios.get(`/api/heroes?q=${this.searchQuery}`);
        this.heroes = response.data;
        this.currentPage = 1; // Reset ke halaman pertama setelah pencarian
      } catch (error) {
        this.errorMessage = 'Data tidak ditemukan atau terjadi kesalahan koneksi.';
        this.heroes = [];
      }
    },
    updateCurrentPage(page) {
      this.currentPage = page;
    }
  },
  mounted() {
    this.searchHeroes(); // Menampilkan semua pahlawan saat halaman dimuat
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
