<template>
  <div class="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 to-indigo-900">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute w-[500px] h-[500px] -top-20 -right-20 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute w-[400px] h-[400px] top-40 -left-20 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      <div class="absolute w-96 h-96 bottom-0 right-0 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>

    <!-- Main Content -->
    <div class="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div class="max-w-6xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Left Column - Text Content -->
          <div class="space-y-8 text-center lg:text-left">
            <!-- Animated Badge -->
            <div 
              class="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/10 to-white/10 backdrop-blur-sm border border-white/10 text-white/90 text-sm font-medium"
            >
              <span class="animate-pulse mr-2">🇮🇩</span>
              Warisan Sejarah Indonesia
            </div>
            
            <!-- Animated Title -->
            <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-200 leading-tight">
              Pahlawan
              <span class="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                Indonesia
              </span>
            </h1>
            
            <!-- Description with Gradient Border -->
            <p class="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              Temukan kisah inspiratif para pejuang kemerdekaan yang telah mengukir sejarah dan membentuk fondasi bangsa Indonesia seperti yang kita kenal hari ini.
            </p>
            
            <!-- Interactive CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <router-link 
                to="/" 
                class="group relative inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25"
              >
                <span class="absolute inset-0 bg-white/20 group-hover:scale-105 transition-transform duration-300"></span>
                <span class="relative flex items-center">
                  Telusuri Pahlawan
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    class="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-all duration-300" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    stroke-width="2"
                  >
                    <path d="M5 12h14m-7-7 7 7-7 7"/>
                  </svg>
                </span>
              </router-link>
              
              <router-link 
                to="/" 
                class="group relative inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold overflow-hidden transition-all duration-300 hover:bg-white/20 hover:scale-105"
              >
                <span class="relative flex items-center">
                  Pelajari Sejarah
                </span>
              </router-link>
            </div>
          </div>

          <!-- Right Column - Interactive Stats -->
          <div class="lg:pl-12">
            <!-- Stats Container with Glassmorphism -->
            <div class="grid grid-cols-2 gap-6 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div 
                v-for="(stat, index) in stats" 
                :key="index"
                class="group p-6 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
              >
                <div class="flex flex-col items-center space-y-2">
                  <div class="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200">
                    {{ stat.value }}{{ stat.suffix }}
                  </div>
                  <div class="text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300">
                    {{ stat.label }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Decorative Element -->
            <div class="mt-8 p-6 rounded-2xl bg-gradient-to-r from-white/5 to-transparent border border-white/10">
              <div class="flex items-center space-x-4">
                <div class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                <p class="text-white/60 text-sm">
                  Data diperbarui secara real-time
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroSection',
  data() {
    return {
      stats: [
        {
          value: '500',
          suffix: '+',
          label: 'Pahlawan Nasional'
        },
        {
          value: '34',
          suffix: '',
          label: 'Provinsi'
        },
        {
          value: new Date().getFullYear() - 1945,
          suffix: '',
          label: 'Tahun Kemerdekaan'
        },
        {
          value: '17K',
          suffix: '+',
          label: 'Arsip Digital'
        }
      ]
    }
  }
}
</script>

<style scoped>
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
}

.delay-700 {
  animation-delay: 700ms;
}

.delay-1000 {
  animation-delay: 1000ms;
}
</style>