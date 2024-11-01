<template>
  <nav 
    :class="[
      'fixed w-full top-0 z-50 transition-all duration-300',
      scrolled ? 
        'bg-white/90 backdrop-blur-sm shadow-lg' : 
        'bg-gradient-to-r from-indigo-600 to-indigo-800'
    ]"
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
            <div 
              :class="[
                'w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300',
                scrolled ? 'bg-indigo-100' : 'bg-white/10'
              ]"
            >
              <svg 
                :class="[
                  'w-5 h-5 transition-colors duration-300',
                  scrolled ? 'text-indigo-600' : 'text-white'
                ]"
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
            <span 
              :class="[
                'font-bold text-lg transition-colors duration-300',
                scrolled ? 'text-indigo-600' : 'text-white'
              ]"
            >
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
            :class="[
              'px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 relative group',
              scrolled ? 
                'text-gray-600 hover:text-indigo-600' : 
                'text-indigo-100 hover:text-white'
            ]"
          >
            {{ item.name }}
            <!-- Active Indicator -->
            <div 
              :class="[
                'absolute inset-x-0 -bottom-[1px] h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200',
                scrolled ? 'bg-indigo-600' : 'bg-white',
                $route.path === item.path ? 'scale-x-100' : ''
              ]"
            ></div>
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <div class="flex items-center md:hidden">
          <button
            @click="toggleMenu"
            :class="[
              'inline-flex items-center justify-center p-2 rounded-md transition-colors duration-200',
              scrolled ? 
                'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50' : 
                'text-indigo-100 hover:text-white hover:bg-indigo-700'
            ]"
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
        :class="[
          'md:hidden',
          scrolled ? 'bg-white/90 backdrop-blur-sm' : 'bg-indigo-800'
        ]"
      >
        <div class="px-2 pt-2 pb-3 space-y-1">
          <router-link
            v-for="item in navigationItems"
            :key="item.name"
            :to="item.path"
            :class="[
              'block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200',
              scrolled ?
                'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50' :
                'text-indigo-100 hover:text-white hover:bg-indigo-700',
              $route.path === item.path ? 
                (scrolled ? 'bg-indigo-50 text-indigo-600' : 'bg-indigo-700 text-white') : 
                ''
            ]"
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
      scrolled: false,
      navigationItems: [
        { name: 'Beranda', path: '/' },
        { name: 'Tentang', path: '/about' }
      ]
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    handleScroll() {
      this.scrolled = window.scrollY > 20;
    }
  },
  watch: {
    '$route'() {
      this.isMenuOpen = false;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    document.addEventListener('click', (e) => {
      const nav = document.querySelector('nav');
      if (nav && !nav.contains(e.target)) {
        this.isMenuOpen = false;
      }
    });
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    document.removeEventListener('click');
  }
};
</script>

<style scoped>
/* Custom Scrollbar */
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

/* Optional: Add smooth scroll to the page */
html {
  scroll-behavior: smooth;
}
</style>