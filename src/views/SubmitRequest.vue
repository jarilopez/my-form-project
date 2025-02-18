<template>
  <div class="min-h-screen bg-[#081640] bg-gradient-to-br from-[#081640] to-[#0c1f54] p-4 md:p-8 flex items-center justify-center relative overflow-hidden">
    <!-- Ambient background effects -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(53,135,242,0.15),rgba(255,255,255,0))]"></div>
      <div class="absolute top-0 left-0 w-96 h-96 bg-[#3587F2]/10 rounded-full filter blur-3xl"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-[#3587F2]/5 rounded-full filter blur-3xl"></div>
    </div>

    <div class="w-full max-w-4xl relative">
      <div class="bg-white/[0.02] backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.2)] border border-white/10">
        <h1 class="text-4xl md:text-5xl font-bold text-center mb-8 text-white">
          Submit a Request
        </h1>
        <p class="text-white/60 text-center mb-12 max-w-2xl mx-auto">
          Please provide details about your request. The more information you provide, the better we can assist you.
        </p>
        
        <form @submit.prevent="onSubmit" class="space-y-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Email Field -->
            <div class="group bg-white/[0.03] p-6 rounded-2xl border border-white/10 hover:border-[#3587F2]/30 transition-all duration-300">
              <label class="block text-sm font-medium text-white/90 mb-2">
                Email Address
                <span class="text-[#3587F2]">*</span>
              </label>
              <input 
                type="email" 
                v-model="formData.email" 
                required
                class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/40 focus:ring-2 focus:ring-[#3587F2]/50 focus:border-[#3587F2]/50 transition-all duration-300"
                placeholder="your@email.com"
              >
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

            <!-- Subject -->
            <div class="md:col-span-2 group bg-white/[0.03] p-6 rounded-2xl border border-white/10 hover:border-[#3587F2]/30 transition-all duration-300">
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

            <!-- Description -->
            <div class="md:col-span-2 group bg-white/[0.03] p-6 rounded-2xl border border-white/10 hover:border-[#3587F2]/30 transition-all duration-300">
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
                <input 
                  type="text" 
                  v-model="formData.loomUrl" 
                  placeholder="Paste Loom URL here"
                  class="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white placeholder-white/40 focus:ring-2 focus:ring-[#3587F2]/50 focus:border-[#3587F2]/50 transition-all duration-300"
                >
              </div>
              <textarea 
                v-model="formData.description" 
                required
                rows="6"
                placeholder="Please provide as much detail as possible to help us understand and resolve your request efficiently..."
                class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/40 focus:ring-2 focus:ring-[#3587F2]/50 focus:border-[#3587F2]/50 transition-all duration-300"
              ></textarea>
            </div>

            <!-- Business Impact -->
            <div class="group bg-white/[0.03] p-6 rounded-2xl border border-white/10 hover:border-[#3587F2]/30 transition-all duration-300">
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

            <!-- Profile Impersonation -->
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

            <!-- File Upload -->
            <div class="md:col-span-2 group bg-white/[0.03] p-6 rounded-2xl border border-white/10 hover:border-[#3587F2]/30 transition-all duration-300">
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

          <button 
            type="submit" 
            :disabled="!isFormValid"
            :class="{'opacity-50 cursor-not-allowed': !isFormValid}"
            class="w-full bg-gradient-to-r from-[#3587F2] to-[#2563eb] text-white py-4 px-6 rounded-xl font-medium hover:opacity-90 transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-[#3587F2]/25"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const dragActive = ref(false)
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
</script>