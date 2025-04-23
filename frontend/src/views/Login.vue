<template>
  <div class="register-form">
    <h2>DECLARANT</h2>

    <Input v-model="form.nume" type="text" placeholder="Nume" />
    <Input v-model="form.prenume" type="text" placeholder="Prenume" />
    <Input v-model="form.cod" type="text" placeholder="Codul Declarant" />
    <Input v-model="form.companie" type="text" placeholder="Companie" />
    <Input v-model="form.telefon" type="tel" placeholder="Număr telefon" />
    <Input v-model="form.parola" type="password" placeholder="Parola" />
    <Input v-model="form.confirmareParola" type="password" placeholder="Repetă Parola" />

    <label class="checkbox-label">
      <input type="checkbox" v-model="form.termeni" />
      Sunt de acord cu termenii și condițiile.
    </label>


    <Button  @click="handleSubmit">ÎNSCRIE-TE</Button>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import Input from '../components/AuthInput.vue'
import Button from '../components/Button.vue'

const form = reactive({
  nume: '',
  prenume: '',
  cod: '',
  companie: '',
  telefon: '',
  parola: '',
  confirmareParola: '',
  termeni: false
})


function handleSubmit() {
 

  

 
}
</script>

<style scoped>
.register-form {
  background: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
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

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  margin: 1rem 0;
}

button {
  width: 100%;
  padding: 0.75rem;
  background-color: #2a2a72;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #1a1a5a;
}

.error {
  color: crimson;
  margin: 0.5rem 0;
  text-align: center;
  font-size: 0.9rem;
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
