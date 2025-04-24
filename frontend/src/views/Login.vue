<template>
  <AuthLayout>
    <template #form-description
      >Introduceți numele de utilizator și parola</template
    >
    <template #form-fields>
      <Input v-model="form.code" type="text" placeholder="Codul Declarant" />
      <Input v-model="form.parola" type="password" placeholder="Parola" />
      <div class="recovery-group">

        <label class="checkbox-label">
          <input type="checkbox" v-model="form.rememberMe" />
          Ține-mă minte pe acest computer.
        </label>
        <div class="checkbox-label recovery-password">
          Ați uitat parola?
        </div>
      </div>
      <div class="button-group">

        <Button class="submit-button" @click="onLogin">LOGARE</Button>
        <Button variant="secondary" class="submit-button" @click="createAccount">CREAȚI UN CONT</Button>
      </div>
    </template>
  </AuthLayout>

</template>

<script setup lang="ts">
import { reactive } from "vue";
import Input from "../components/AuthInput.vue";
import Button from "../components/Button.vue";
import AuthLayout from "@/components/AuthLayout.vue";
import {useRouter} from "vue-router";

const form = reactive({
  code: "",
  parola: "",
  rememberMe: false,
});

const router = useRouter()

function onLogin() {
  router.push('/dashboard')
}

function createAccount() {
  router.push('/')
}
</script>

<style scoped>
.button-group {
display: flex;
gap: 10px;
width: max-content;
justify-self: center;
}

.recovery-group {
  display: flex;
  justify-content: space-between;
}

.recovery-password {
  cursor: pointer;
}

.submit-button {
  width: 220px;
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
