<template>
  <form class="bg-white shadow-md rounded px-8 py-4" @submit.prevent="handleEnviarDepoimento">
    <label class="block text-gray-700 text-sm font-bold mb-2"> Seu nome </label>
    <input
      type="text"
      required
      v-model="depoimento.nomeAluno"
      placeholder="Digite seu nome"
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
    />
    <label class="block text-gray-700 text-sm font-bold mb-2"> Feedback </label>
    <textarea
      required
      placeholder="Seu feedback"
      v-model="depoimento.depoimento"
      class="resize shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
    />
    <label class="block text-gray-700 text-sm font-bold mb-2">LinkedIn</label>
    <input
      type="text"
      v-model="depoimento.linkLinkedin"
      placeholder="Link do seu perfil no linkedIn"
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
    />
    <label class="block text-gray-700 text-sm font-bold mb-2">GitHub</label>
    <input
      type="text"
      v-model="depoimento.userGithub"
      placeholder="Username do seu perfil no GitHub"
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
    />
    <label class="block text-gray-700 text-sm font-bold mb-2">
      Permite usar sua imagem do perfil do GitHub?
      <input class="ms-2" type="checkbox" v-model="depoimento.permiteFoto" />
      <span class="ms-2 text-gray-500 font-light"
        >Sua foto será exibida no card junto ao seu depoimento</span
      >
    </label>

    <button
      type="submit"
      class="border-2 border-custom-blue bg-custom-blue text-white py-2 px-4 mt-4 rounded hover:bg-white hover:text-custom-blue text-sm"
    >
      Enviar
    </button>
    <button
      class="ms-2 bg-white text-sm text-custom-blue border-2 border-custom-blue py-2 px-4 mt-4 rounded"
      @click="showForm = false"
    >
      Esconder formulário
    </button>
  </form>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
// @ts-ignore
import { enviarDepoimento } from "../services/connection-firebase.js";

const props = defineProps({
  showForm: {
    type: Boolean,
    required: true,
  },
});

const showForm = ref(props.showForm);

const depoimento = ref({
  nomeAluno: "",
  imagemAluno: "",
  depoimento: "",
  data: "",
  linkLinkedin: "",
  userGithub: "",
  permiteFoto: false,
  reported: false,
});

const handleEnviarDepoimento = async () => {
  depoimento.value.data = new Date().toISOString().split('T')[0];

  if(depoimento.value.permiteFoto){
    try {

      const response = await fetch(`https://api.github.com/users/${depoimento.value.userGithub}`)
      const data = await response.json();
      depoimento.value.imagemAluno = data?.avatar_url;
    } catch (error) {
      console.error(error);
    }
  }

  await enviarDepoimento(depoimento.value);
};

</script>
