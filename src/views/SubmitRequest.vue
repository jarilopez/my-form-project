<template>
  <div class="min-h-screen bg-gradient-to-br from-[#081640] via-[#0c1f54] to-[#162a69] p-4 md:p-8 flex items-center justify-center relative overflow-hidden">
    <!-- Enhanced background effects -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(53,135,242,0.15),rgba(255,255,255,0))]"></div>
      <div class="absolute top-0 left-0 w-96 h-96 bg-[#3587F2]/10 rounded-full filter blur-3xl animate-pulse"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-[#3587F2]/5 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
    </div>

    <div class="w-full max-w-7xl relative">
      <div class="bg-white/[0.02] backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.2)] border border-white/10 hover:border-white/20 transition-all duration-500">
        <!-- Theme toggle button -->


        <!-- Form content with enhanced styling -->
        <form @submit.prevent="handleSubmit" class="space-y-8">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <!-- Email Field -->
            <div class="lg:col-span-2 group bg-white/[0.03] p-6 rounded-2xl border border-white/10 hover:border-[#3587F2]/30 transition-all duration-300">
              <label class="block text-sm font-medium text-white/90 mb-2">
                Email Address
                <span class="text-[#3587F2]">*</span>
              </label>
              
              <div class="relative">
                <span class="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">📧</span>
                <input 
                  type="email" 
                  v-model="formData.email" 
                  required
                  class="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder-white/40 focus:ring-2 focus:ring-[#3587F2]/50 focus:border-[#3587F2]/50 transition-all duration-300"
                  :class="{ 'border-green-500/50 focus:ring-green-500/50': isValidEmail, 'border-red-500/50 focus:ring-red-500/50': !isValidEmail && formData.email }"
                  placeholder="your@email.com"
                >
              </div>
              
              <!-- Email validation message -->
              <p v-if="formData.email && !isValidEmail" class="mt-2 text-red-500/90 text-sm">
                Please enter a valid email address
              </p>
              <p v-else-if="formData.email && isValidEmail" class="mt-2 text-green-500/90 text-sm">
                Valid email format
              </p>
            </div>



            <!-- Request Type -->
            <div class="group bg-white/[0.03] p-6 rounded-2xl border border-white/10 hover:border-[#3587F2]/30 transition-all duration-300">
              <label class="block text-sm font-medium text-white/90 mb-2">
                Request Type
                <span class="text-[#3587F2]">*</span>
              </label>
              <select 
                v-model="formData.requestType"
                required
                class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:ring-2 focus:ring-[#3587F2]/50 focus:border-[#3587F2]/50 transition-all duration-300"
              >
                <option value="" disabled selected class="bg-[#081640]">Select type</option>
                <option value="bug" class="bg-[#081640]">Bug Report</option>
                <option value="feature" class="bg-[#081640]">Feature Request</option>
                <option value="question" class="bg-[#081640]">Product Question</option>
                <option value="support" class="bg-[#081640]">Technical Support</option>
              </select>
            </div>

            <!-- Subject spans full width -->
            <div class="lg:col-span-3 group bg-white/[0.03] p-6 rounded-2xl border border-white/10 hover:border-[#3587F2]/30 transition-all duration-300">
              <label class="block text-sm font-medium text-white/90 mb-2">
                Subject
                <span class="text-[#3587F2]">*</span>
              </label>
              <input 
                type="text" 
                v-model="formData.subject" 
                required
                class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/40 focus:ring-2 focus:ring-[#3587F2]/50 focus:border-[#3587F2]/50 transition-all duration-300"
                placeholder="Brief summary of your request"
              >
            </div>

            <!-- Description spans full width -->
            <div class="lg:col-span-3 group bg-white/[0.03] p-6 rounded-2xl border border-white/10 hover:border-[#3587F2]/30 transition-all duration-300">
              <label class="block text-sm font-medium text-white/90 mb-2">
                Description
                <span class="text-[#3587F2]">*</span>
              </label>
              <div class="flex items-center gap-2 mb-4">
                <button 
                  type="button" 
                  class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#3587F2]/20 rounded-xl hover:bg-[#3587F2]/30 transition-all duration-300"
                >
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Record Loom Video
                </button>

              </div>
              <textarea 
                v-model="formData.description" 
                required
                rows="6"
                placeholder="Please provide as much detail as possible to help us understand and resolve your request efficiently..."
                class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/40 focus:ring-2 focus:ring-[#3587F2]/50 focus:border-[#3587F2]/50 transition-all duration-300"
              ></textarea>
            </div>

            <!-- Business Impact and Profile Impersonation in one row -->
            <div class="lg:col-span-2 group bg-white/[0.03] p-6 rounded-2xl border border-white/10 hover:border-[#3587F2]/30 transition-all duration-300">
              <label class="block text-sm font-medium text-white/90 mb-2">
                Business Impact
              </label>
              <select 
                v-model="formData.impact"
                class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:ring-2 focus:ring-[#3587F2]/50 focus:border-[#3587F2]/50 transition-all duration-300"
              >
                <option value="low" class="bg-[#081640]">Low</option>
                <option value="medium" class="bg-[#081640]">Medium</option>
                <option value="high" class="bg-[#081640]">High</option>
              </select>
            </div>

            <div class="group bg-white/[0.03] p-6 rounded-2xl border border-white/10 hover:border-[#3587F2]/30 transition-all duration-300">
              <label class="flex items-center justify-between text-sm font-medium text-white/90">
                <span>Allow Profile Impersonation</span>
                <button 
                  type="button"
                  @click="formData.allowImpersonation = !formData.allowImpersonation"
                  class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300"
                  :class="formData.allowImpersonation ? 'bg-[#3587F2]' : 'bg-white/10'"
                >
                  <span
                    class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300"
                    :class="formData.allowImpersonation ? 'translate-x-6' : 'translate-x-1'"
                  />
                </button>
              </label>
              <p class="mt-2 text-white/50 text-sm">Allow support to access your account for troubleshooting</p>
            </div>

            <!-- File Upload spans full width -->
            <div class="lg:col-span-3 group bg-white/[0.03] p-6 rounded-2xl border border-white/10 hover:border-[#3587F2]/30 transition-all duration-300">
              <label class="block text-sm font-medium text-white/90 mb-2">
                Attachments
              </label>
              <div 
                class="border-2 border-dashed border-white/20 rounded-xl p-10 text-center hover:border-[#3587F2]/50 transition-all duration-300 cursor-pointer bg-white/[0.02]"
                @drop.prevent="onDrop"
                @dragover.prevent
                @dragenter.prevent="dragActive = true"
                @dragleave.prevent="dragActive = false"
              >
                <div class="flex flex-col items-center space-y-2">
                  <svg class="w-12 h-12 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
                  </svg>
                  <div>
                    <p class="text-white/70 font-medium">Drop files here or <span class="text-[#3587F2]">browse</span></p>
                    <p class="text-white/50 text-sm mt-1">Support images, videos, and PDFs up to 10MB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Enhanced submit button with loading state -->
          <button 
            type="submit" 
            :disabled="!isFormValid || isSubmitting"
            :class="{
              'opacity-50 cursor-not-allowed': !isFormValid || isSubmitting,
              'animate-pulse': isSubmitting
            }"
            class="w-full bg-gradient-to-r from-[#3587F2] to-[#2563eb] text-white py-4 px-6 rounded-xl font-medium hover:opacity-90 transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-[#3587F2]/25 relative overflow-hidden group"
          >
            <span v-if="!isSubmitting">Submit Request</span>
            <span v-else class="flex items-center justify-center">
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          </button>
        </form>

        <!-- Help button -->
        <button 
          @click="showHelp = true"
          class="fixed bottom-8 right-8 bg-white/10 backdrop-blur-md p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-white/20 group"
        >
          <svg class="w-6 h-6 text-white/80 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>

        <!-- Help modal -->
        <div v-if="showHelp" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div class="bg-white/10 backdrop-blur-xl p-8 rounded-2xl max-w-md mx-4 border border-white/20">
            <h3 class="text-xl font-semibold text-white mb-4">Need Help?</h3>
            <p class="text-white/80 mb-6">Our support team is here to assist you. You can also check our documentation for quick answers.</p>
            <div class="flex justify-end gap-4">
              <button 
                @click="showHelp = false"
                class="px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors duration-200"
              >
                Close
              </button>
              <button 
                class="px-4 py-2 rounded-lg bg-[#3587F2] text-white hover:bg-[#3587F2]/90 transition-colors duration-200"
              >
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const isDark = ref(true)
const textareaRows = ref(6)
const dragActive = ref(false)
const isSubmitting = ref(false)
const showHelp = ref(false)

const formData = ref({
  email: '',
  requestType: '',
  subject: '',
  description: '',
  loomUrl: '',
  impact: 'low',
  allowImpersonation: false,
  files: []
})

const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('light-theme')
}

const isValidEmail = computed(() => {
  if (!formData.value.email) return true
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(formData.value.email)
})

const adjustTextareaHeight = (e) => {
  const textarea = e.target
  textarea.style.height = 'auto'
  textarea.style.height = textarea.scrollHeight + 'px'
}

const isFormValid = computed(() => {
  return formData.value.email && 
         formData.value.requestType && 
         formData.value.subject && 
         formData.value.description
})

const onSubmit = () => {
  if (isFormValid.value) {
    console.log('Form submitted:', formData.value)
  }
}

const onDrop = (e) => {
  const files = Array.from(e.dataTransfer.files)
  formData.value.files = files
  console.log(`Dropped ${files.length} files`)
}

const handleSubmit = async () => {
  if (isFormValid.value) {
    isSubmitting.value = true
    try {
      await new Promise(resolve => setTimeout(resolve, 2000)) // Simulated API call
      console.log('Form submitted:', formData.value)
    } finally {
      isSubmitting.value = false
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

:root {
  font-family: 'Inter', sans-serif;
}

/* Add smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Add custom animations */
@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-gradient {
  animation: gradient 15s ease infinite;
  background-size: 200% 200%;
}
</style>