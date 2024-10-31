<template>
  <nav 
    class="bg-gradient-to-r from-indigo-600 to-indigo-800 sticky top-0 z-50 border-b border-indigo-700/20"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Logo dan Brand -->
        <div class="flex items-center">
          <router-link 
            to="/" 
            class="flex items-center space-x-3"
          >
            <!-- Logo Icon -->
            <div class="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
              <svg 
                class="w-5 h-5 text-white" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                stroke-width="2"
              >
                <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11m16-11v11"/>
              </svg>
            </div>
            <!-- Brand Name -->
            <span class="text-white font-bold text-lg">
              Pahlawan Nasional
            </span>
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex md:items-center md:space-x-4">
          <router-link 
            v-for="item in navigationItems"
            :key="item.name"
            :to="item.path"
            class="text-indigo-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 relative group"
            :class="$route.path === item.path ? 'text-white' : ''"
          >
            {{ item.name }}
            <!-- Active Indicator -->
            <div 
              class="absolute inset-x-0 -bottom-[1px] h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"
              :class="$route.path === item.path ? 'scale-x-100' : ''"
            ></div>
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <div class="flex items-center md:hidden">
          <button
            @click="toggleMenu"
            class="inline-flex items-center justify-center p-2 rounded-md text-indigo-100 hover:text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200"
          >
            <span class="sr-only">Open main menu</span>
            <!-- Hamburger Icon -->
            <svg
              :class="{'hidden': isMenuOpen, 'block': !isMenuOpen}"
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!-- Close Icon -->
            <svg
              :class="{'block': isMenuOpen, 'hidden': !isMenuOpen}"
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-4 opacity-0"
    >
      <div 
        v-show="isMenuOpen" 
        class="md:hidden bg-indigo-800"
      >
        <div class="px-2 pt-2 pb-3 space-y-1">
          <router-link
            v-for="item in navigationItems"
            :key="item.name"
            :to="item.path"
            class="block px-3 py-2 rounded-md text-base font-medium text-indigo-100 hover:text-white hover:bg-indigo-700 transition-colors duration-200"
            :class="$route.path === item.path ? 'bg-indigo-700 text-white' : ''"
            @click="isMenuOpen = false"
          >
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isMenuOpen: false,
      navigationItems: [
        { name: 'Beranda', path: '/' },
        { name: 'Tentang', path: '/about' },
        { name: 'Pahlawan', path: '/heroes' }
      ]
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  },
  watch: {
    '$route'() {
      // Tutup menu mobile saat rute berubah
      this.isMenuOpen = false;
    }
  },
  mounted() {
    // Handle click outside untuk menutup menu
    document.addEventListener('click', (e) => {
      const nav = document.querySelector('nav');
      if (nav && !nav.contains(e.target)) {
        this.isMenuOpen = false;
      }
    });
  },
  beforeUnmount() {
    // Cleanup event listener
    document.removeEventListener('click');
  }
};
</script>

<style scoped>
/* Custom Scrollbar untuk Browser yang mendukung */
@media (min-width: 768px) {
  nav::-webkit-scrollbar {
    width: 4px;
  }

  nav::-webkit-scrollbar-track {
    background: transparent;
  }

  nav::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 2px;
  }
}
</style>