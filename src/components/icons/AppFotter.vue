<template>
  <footer class="bg-[#081640] relative overflow-hidden">
    <!-- Wave decoration -->
    <div class="absolute inset-0 opacity-10">
      <img src="@/assets/wave.svg" alt="" class="w-full h-full object-cover" />
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div class="col-span-1 md:col-span-2">
          <h3 class="text-white font-semibold text-lg mb-4">Support Desk</h3>
          <p class="text-white/60 max-w-md">
            We're here to help you with any questions or concerns. Our support team is available 24/7.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-white font-medium mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li>
              <a href="#" class="text-white/60 hover:text-white transition-colors duration-200">Documentation</a>
            </li>
            <li>
              <a href="#" class="text-white/60 hover:text-white transition-colors duration-200">FAQs</a>
            </li>
            <li>
              <a href="#" class="text-white/60 hover:text-white transition-colors duration-200">Community</a>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-white font-medium mb-4">Contact</h4>
          <ul class="space-y-2">
            <li class="flex items-center text-white/60">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              support@example.com
            </li>
            <li class="flex items-center text-white/60">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +1 (555) 123-4567
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p class="text-white/40 text-sm">© 2024 Support Desk. All rights reserved.</p>
        <div class="flex space-x-4 mt-4 md:mt-0">
          <a href="#" class="text-white/40 hover:text-white transition-colors duration-200">Privacy Policy</a>
          <a href="#" class="text-white/40 hover:text-white transition-colors duration-200">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>