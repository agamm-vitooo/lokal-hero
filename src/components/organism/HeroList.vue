<!-- Template -->
<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
    <!-- Header with animated gradient text -->
    <div class="max-w-7xl mx-auto mb-12">
      <h1 class="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
        Pahlawan Nasional Indonesia
      </h1>
      <p class="text-slate-600 text-lg animate-fade-in">
        Temukan informasi tentang para pejuang kemerdekaan Indonesia
      </p>
    </div>

    <!-- Search bar with animation -->
    <div class="max-w-7xl mx-auto mb-8 transform transition-all duration-300 hover:scale-101">
      <SearchBar 
        :initial-query="searchQuery" 
        @search="handleSearch"
        class="shadow-lg hover:shadow-xl transition-shadow duration-300"
      />
    </div>

    <!-- Main content -->
    <div class="max-w-7xl mx-auto">
      <!-- Loading state -->
      <div v-if="loading" class="flex justify-center items-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>

      <!-- Error message -->
      <div v-else-if="errorMessage" 
           class="bg-red-50 border-l-4 border-red-400 p-4 mb-8 animate-shake">
        <p class="text-red-700">{{ errorMessage }}</p>
      </div>

      <!-- Heroes grid -->
      <TransitionGroup 
        name="hero-list" 
        tag="div" 
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <div v-for="hero in displayedHeroes" 
             :key="hero.id" 
             class="hero-card group bg-white rounded-xl shadow-sm hover:shadow-xl p-6 transition-all duration-300 transform hover:-translate-y-1"
        >
          <!-- Hero content with hover effects -->
          <div class="overflow-hidden">
            <h2 class="text-xl font-semibold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
              {{ hero.name }}
            </h2>
            
            <div class="mt-2 space-y-2 text-sm text-slate-600">
              <div class="flex items-center space-x-2 opacity-75 group-hover:opacity-100 transition-opacity">
                <span class="inline-block w-4 h-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </span>
                <p>{{ hero.birthYear }} - {{ hero.deathYear }}</p>
              </div>
              
              <div class="flex items-center space-x-2 opacity-75 group-hover:opacity-100 transition-opacity">
                <span class="inline-block w-4 h-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <p>{{ hero.birthPlace }}</p>
              </div>
              
              <p class="mt-3 line-clamp-3 text-slate-700 group-hover:line-clamp-none transition-all duration-300">
                {{ hero.description }}
              </p>
            </div>
          </div>
        </div>
      </TransitionGroup>

      <!-- Pagination -->
      <Pagination
        :current-page="currentPage"
        :total-pages="totalPages"
        @update:current-page="updateCurrentPage"
        class="mt-8 flex justify-center"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Pagination from './Pagination.vue';
import SearchBar from '../atom/SearchBar.vue';

export default {
  components: {
    Pagination,
    SearchBar,
  },
  data() {
    return {
      searchQuery: '',
      heroes: [],
      filteredHeroes: [],
      errorMessage: '',
      currentPage: 1,
      itemsPerPage: 9,
      loading: false,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.filteredHeroes.length / this.itemsPerPage);
    },
    displayedHeroes() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return this.filteredHeroes.slice(start, start + this.itemsPerPage);
    },
  },
  methods: {
    async searchHeroes() {
      this.loading = true;
      this.errorMessage = '';
      try {
        const response = await axios.get(`http://localhost:3000/api/heroes`);
        this.heroes = response.data;
        this.filterHeroes();
        this.currentPage = 1;
      } catch (error) {
        this.errorMessage = 'Maaf, data tidak ditemukan atau terjadi kesalahan koneksi.';
        this.heroes = [];
        this.filteredHeroes = [];
      } finally {
        setTimeout(() => {
          this.loading = false;
        }, 500); // Add slight delay for smooth transition
      }
    },
    handleSearch(query) {
      this.searchQuery = query;
      this.filterHeroes();
    },
    filterHeroes() {
      const query = this.searchQuery.toLowerCase();
      this.filteredHeroes = this.heroes.filter(hero => {
        return (
          hero.name.toLowerCase().includes(query) ||
          hero.birthPlace.toLowerCase().includes(query) ||
          String(hero.birthYear).includes(query) ||
          String(hero.deathYear).includes(query)
        );
      });
    },
    updateCurrentPage(page) {
      this.currentPage = page;
    }
  },
  mounted() {
    this.searchHeroes();
  }
};
</script>

<style scoped>
/* Animations */
.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 8s ease infinite;
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-out;
}

.animate-shake {
  animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
}

/* Hero list transitions */
.hero-list-enter-active,
.hero-list-leave-active {
  transition: all 0.5s ease;
}

.hero-list-enter-from,
.hero-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

/* Line clamp */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Keyframes */
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }
  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }
  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}

/* Hover effects */
.hover\:scale-101:hover {
  transform: scale(1.01);
}
</style>