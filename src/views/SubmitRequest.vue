<script setup>
import { ref, computed } from 'vue'

const formData = ref({
  email: '',
  requestType: '',
  subject: '',
  description: '',
  impact: 'low',
  allowImpersonation: false
})

const showHelp = ref(false)
const isSubmitting = ref(false)
const dragActive = ref(false)

const isValidEmail = computed(() => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)
})

const isFormValid = computed(() => {
  return isValidEmail.value && 
         formData.value.requestType && 
         formData.value.subject && 
         formData.value.description
})

const handleSubmit = async () => {
  if (!isFormValid.value) return
  isSubmitting.value = true
  // Add your submit logic here
  await new Promise(resolve => setTimeout(resolve, 2000))
  isSubmitting.value = false
}

const onDrop = (e) => {
  const files = [...e.dataTransfer.files]
  // Add your file handling logic here
  dragActive.value = false
}
</script>

<template>
  <!-- Update the main container background -->
  <div class="min-h-screen bg-[#F8FAFC] p-4 md:p-8 flex items-center justify-center relative overflow-hidden">
    <!-- Enhanced background effects with lighter colors -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(53,135,242,0.03),rgba(255,255,255,0))]"></div>
      <div class="absolute top-0 left-0 w-96 h-96 bg-[#E0F2FE]/5 rounded-full filter blur-3xl animate-pulse"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-[#E0F2FE]/3 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
    </div>

    <div class="w-full max-w-7xl relative">
      <div class="bg-white backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-lg border border-[#081640]/5 hover:border-[#081640]/10 transition-all duration-500">
        <form @submit.prevent="handleSubmit" class="space-y-8">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <!-- Email Field -->
            <div class="lg:col-span-2 group bg-[#E0F2FE]/30 p-6 rounded-2xl border border-[#081640]/10 hover:border-[#081640]/30 transition-all duration-300">
              <label class="block text-sm font-medium text-[#081640] mb-2">
                Email Address
                <span class="text-[#3587F2]">*</span>
              </label>
              <div class="relative">
                <span class="absolute left-4 top-1/2 -translate-y-1/2 text-[#081640]/40">📧</span>
                <input 
                  type="email" 
                  v-model="formData.email" 
                  required
                  class="w-full bg-white/50 border border-[#081640]/10 rounded-xl pl-12 pr-4 py-3.5 text-[#081640] placeholder-[#081640]/40 focus:ring-2 focus:ring-[#3587F2]/50 focus:border-[#3587F2]/50 transition-all duration-300"
                  placeholder="your@email.com"
                >
              </div>
            </div>
            
            <!-- Request Type -->
            <div class="group bg-[#E0F2FE]/30 p-6 rounded-2xl border border-[#081640]/10 hover:border-[#081640]/30 transition-all duration-300">
              <label class="block text-sm font-medium text-[#081640] mb-2">
                Request Type
                <span class="text-[#3587F2]">*</span>
              </label>
              <select 
                v-model="formData.requestType"
                required
                class="w-full bg-white/50 border border-[#081640]/10 rounded-xl px-4 py-3.5 text-[#081640] focus:ring-2 focus:ring-[#3587F2]/50 focus:border-[#3587F2]/50 transition-all duration-300"
              >
                <option value="" disabled selected>Select type</option>
                <option value="bug">Bug Report</option>
                <option value="feature">Feature Request</option>
                <option value="question">Product Question</option>
                <option value="support">Technical Support</option>
              </select>
            </div>
            
            <!-- Subject -->
            <div class="lg:col-span-3 group bg-[#E0F2FE]/30 p-6 rounded-2xl border border-[#081640]/10 hover:border-[#081640]/30 transition-all duration-300">
              <label class="block text-sm font-medium text-[#081640] mb-2">
                Subject
                <span class="text-[#3587F2]">*</span>
              </label>
              <input 
                type="text" 
                v-model="formData.subject" 
                required
                class="w-full bg-white/50 border border-[#081640]/10 rounded-xl px-4 py-3.5 text-[#081640] placeholder-[#081640]/40 focus:ring-2 focus:ring-[#3587F2]/50 focus:border-[#3587F2]/50 transition-all duration-300"
                placeholder="Brief summary of your request"
              >
            </div>

            <!-- Description -->
            <div class="lg:col-span-3 group bg-[#E0F2FE]/30 p-6 rounded-2xl border border-[#081640]/10 hover:border-[#081640]/30 transition-all duration-300">
              <label class="block text-sm font-medium text-[#081640] mb-2">
                Description
                <span class="text-[#3587F2]">*</span>
              </label>
              <textarea 
                v-model="formData.description" 
                required
                rows="6"
                placeholder="Please provide as much detail as possible..."
                class="w-full bg-white/50 border border-[#081640]/10 rounded-xl px-4 py-3.5 text-[#081640] placeholder-[#081640]/40 focus:ring-2 focus:ring-[#3587F2]/50 focus:border-[#3587F2]/50 transition-all duration-300"
              ></textarea>
            </div>

            <!-- Business Impact -->
            <div class="lg:col-span-2 group bg-[#E0F2FE]/30 p-6 rounded-2xl border border-[#081640]/10 hover:border-[#081640]/30 transition-all duration-300">
              <label class="block text-sm font-medium text-[#081640] mb-2">
                Business Impact
              </label>
              <select 
                v-model="formData.impact"
                class="w-full bg-white/50 border border-[#081640]/10 rounded-xl px-4 py-3.5 text-[#081640] focus:ring-2 focus:ring-[#3587F2]/50 focus:border-[#3587F2]/50 transition-all duration-300"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>

            <!-- Profile Impersonation -->
            <div class="group bg-[#E0F2FE]/30 p-6 rounded-2xl border border-[#081640]/10 hover:border-[#081640]/30 transition-all duration-300">
              <label class="flex items-center justify-between text-sm font-medium text-[#081640]">
                <span>Allow Profile Impersonation</span>
                <button 
                  type="button"
                  @click="formData.allowImpersonation = !formData.allowImpersonation"
                  class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300"
                  :class="formData.allowImpersonation ? 'bg-[#3587F2]' : 'bg-[#081640]/20'"
                >
                  <span
                    class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300"
                    :class="formData.allowImpersonation ? 'translate-x-6' : 'translate-x-1'"
                  />
                </button>
              </label>
            </div>

            <!-- File Upload -->
            <div class="lg:col-span-3 group bg-[#E0F2FE]/30 p-6 rounded-2xl border border-[#081640]/10 hover:border-[#081640]/30 transition-all duration-300">
              <label class="block text-sm font-medium text-[#081640] mb-2">
                Attachments
              </label>
              <div class="border-2 border-dashed border-[#081640]/20 rounded-xl p-10 text-center hover:border-[#3587F2]/50 transition-all duration-300 cursor-pointer bg-white/50">
                <p class="text-[#081640]/70 font-medium">Drop files here or <span class="text-[#3587F2]">browse</span></p>
                <p class="text-[#081640]/50 text-sm mt-1">Support images, videos, and PDFs up to 10MB</p>
              </div>
            </div>
          </div>

          <!-- Submit button -->
          <button 
            type="submit" 
            :disabled="!isFormValid || isSubmitting"
            class="w-full bg-gradient-to-r from-[#081640] to-[#3587F2] text-white py-4 px-6 rounded-xl font-medium hover:opacity-90 transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-[#3587F2]/25"
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

        <!-- Success message -->
        <div
          v-if="isFormSubmitted"
          class="fixed inset-0 bg-[#081640]/10 backdrop-blur-sm flex items-center justify-center z-50"
        >
          <div class="bg-white/90 backdrop-blur-xl p-8 rounded-2xl max-w-md mx-4 border border-[#081640]/20">
            <div class="flex items-center justify-center flex-col">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                class="h-20 w-20 text-[#3587F2]" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
              <h3 class="text-xl font-semibold text-[#081640] mt-4">Request Submitted!</h3>
              <p class="text-[#081640]/80 text-center mt-2">Thank you for your request. We'll get back to you soon.</p>
              <button 
                @click="resetForm"
                class="mt-6 px-6 py-2 bg-[#3587F2] text-white rounded-xl hover:bg-[#3587F2]/90 transition-colors duration-200"
              >
                Submit Another Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>