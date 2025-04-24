<template>
  <AuthLayout>
    <template #form-description>
      Introduceți următoarele date solicitate pentru înscriere</template
    >
    <template #form-fields>
      <div class="form-username">
        <Input v-model="form.numele" type="text" placeholder="Numele" />
        <Input v-model="form.prenumele" type="text" placeholder="Prenumele" />
      </div>
      <Input v-model="form.cod" type="text" placeholder="Codul Declarant" />
      <Input v-model="form.companie" type="text" placeholder="Companie" />
      <Input v-model="form.telefon" type="tel" placeholder="Număr telefon" />
      <Input v-model="form.parola" type="password" placeholder="Parola" />
      <Input
        v-model="form.confirmareParola"
        type="password"
        placeholder="Repetă Parola"
      />

      <label class="checkbox-label">
        <input type="checkbox" v-model="form.termeni" />
        Sunt de acord cu termenii și condițiile.
      </label>
      <Button class="submit-button" @click="handleSubmit">ÎNSCRIE-TE</Button>
    </template>
  </AuthLayout>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import AuthLayout from "@/components/AuthLayout.vue";
import Input from "@/components/AuthInput.vue";
import Button from "@/components/Button.vue";
import {useRouter} from "vue-router";

const form = reactive({
  numele: "",
  prenumele: "",
  cod: "",
  companie: "",
  telefon: "",
  parola: "",
  confirmareParola: "",
  termeni: false,
});

const router = useRouter();

function handleSubmit() {
  router.push('/login')
}
</script>

<style scoped>
.form-username {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.submit-button {
  max-width: 220px;
  height: 50px;
  margin-top: 20px;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  margin: 1rem 0;
  color: black;
}
</style>
