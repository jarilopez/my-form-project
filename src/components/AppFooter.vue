<template>
  <footer class="bg-white relative overflow-hidden">
    <!-- Wave decorations -->
    <div class="absolute inset-0">
      <img src="@/assets/soft-blue-wave.svg" alt="" class="w-full h-full object-cover opacity-70" />
    </div>
    <div class="absolute inset-0">
      <img src="@/assets/soft-blue-wave.svg" alt="" class="w-full h-full object-cover opacity-60 translate-y-12 scale-x-[-1]" />
    </div>
    <div class="absolute inset-0">
      <img src="@/assets/soft-blue-wave.svg" alt="" class="w-full h-full object-cover opacity-40 translate-y-12 scale-x-[-1]" />
    </div>

    <!-- Rest of your footer content remains the same -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <!-- Contact -->
        <div>
          <h4 class="text-[#081640] font-medium mb-2 text-sm">Contact</h4>
          <ul class="space-y-1">
            <li class="flex items-center text-[#081640]/80 text-sm">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              support@example.com
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="border-t border-[#081640]/10 mt-6 pt-4 flex flex-col md:flex-row justify-between items-center">
        <p class="text-[#081640]/70 text-xs">© 2025 Harmonix. All rights reserved.</p>
        <div class="flex space-x-4 mt-2 md:mt-0">
          <a href="#" class="text-[#081640]/70 hover:text-[#081640] transition-colors duration-200 text-xs">Privacy Policy</a>
          <a href="#" class="text-[#081640]/70 hover:text-[#081640] transition-colors duration-200 text-xs">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>