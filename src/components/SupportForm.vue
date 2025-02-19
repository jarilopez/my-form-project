<template>
  <div class="form-container">
    <form class="support-form">
      <h2 class="text-2xl font-semibold mb-8 text-gray-800">Support Request</h2>
      
      <div class="form-group">
        <label class="form-label">Full Name</label>
        <input type="text" class="form-input" placeholder="Enter your name">
      </div>

      <div class="form-group">
        <label class="form-label">Email Address</label>
        <input type="email" class="form-input" placeholder="Enter your email">
      </div>

      <div class="form-group">
        <label class="form-label">Subject</label>
        <input type="text" class="form-input" placeholder="Brief description of your issue">
      </div>

      <div class="form-group">
        <label class="form-label">Message</label>
        <textarea 
          class="form-input min-h-[150px]" 
          placeholder="Please describe your issue in detail"
        ></textarea>
      </div>

      <button type="submit" class="btn-primary">
        Submit Request
      </button>
    </form>
  </div>
</template>

<script setup>
// Component logic here
</script>