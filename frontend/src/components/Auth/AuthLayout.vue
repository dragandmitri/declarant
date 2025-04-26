<template>
  <div class="auth-wrapper">
    <div class="auth-image">
      <AuthImage />
    </div>
    <div class="form-wrapper">
      <div class="register-form">
        <div class="form-title">DECLARANT</div>
        <div class="form-description">
          <slot name="form-description">description</slot>
        </div>
        <slot name="form-fields">Input</slot>
      </div>
      <div class="politica">
        Termeni de folosire. Politica de cofidentialitate
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AuthImage from "@/components/Auth/AuthImage.vue";
</script>

<style scoped>
.auth-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100vw;
  height: 100vh;
}

.politica {
  position: absolute;
  bottom: 10px;
  color: black;
  font-size: 11px;
  opacity: 0.7;
}

.form-title {
  font-size: 32px;
  letter-spacing: 5px;
  color: #403b54;
  font-weight: 700;
}

.form-description {
  color: #b7a7b5;
  font-size: 15px;
  letter-spacing: 0.4px;
  padding-top: 5px;
  padding-bottom: 20px;
}

.form-wrapper {
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.register-form {
  background: #ffffff;
  padding: 2rem;
  max-width: 400px;
  margin: auto;
  animation: fadeInUp 0.8s ease;
}

.register-form h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: 600;
  color: #333;
}

@keyframes fadeInUp {
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
