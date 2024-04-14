<template>
  <form
    v-if="showForm"
    class="bg-white shadow-md rounded px-8 py-4 text-gray-700"
    @submit.prevent="handleEnviarDepoimento"
  >
    <h2 class="text-2xl">Deixe aqui seu depoimento:</h2>
    <p class="mb-8 mt-2">
      Os depoimentos são uma forma de validar a qualidade do meu trabalho e de
      ajudar outras pessoas a decidirem se querem ou não trabalhar/estudar comigo. Se
      você já foi meu aluno ou trabalhou comigo, deixe aqui seu feedback. Os
      depoimentos após postados aparecerão na seção de feedbacks abaixo em <b>tempo
      real.</b>
    </p>
    <label class="block  text-sm font-bold mb-2"> Seu nome </label>
    <input
      type="text"
      required
      v-model="depoimento.nomeAluno"
      placeholder="Digite seu nome"
      class="shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
    />
    <label class="block text-sm font-bold mb-2"
      >Sua profissão (opcional)</label
    >
    <input
      type="text"
      required
      v-model="depoimento.profissao"
      placeholder="Digite sua profissão"
      class="shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
    />
    <label class="block text-sm font-bold mb-2">
      Feedback (Máx. 500 caracteres)</label
    >
    <textarea
      required
      :maxlength="500"
      placeholder="Seu feedback - máximo 500 caracteres"
      v-model="depoimento.depoimento"
      class="resize shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
    />
    <label class="block text-sm font-bold mb-2"
      >LinkedIn (opcional)</label
    >
    <input
      type="text"
      v-model="depoimento.linkLinkedin"
      placeholder="Link do seu perfil no linkedIn"
      class="shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
    />
    <label class="block text-sm font-bold mb-2"
      >GitHub (opcional)</label
    >
    <input
      type="text"
      v-model="depoimento.userGithub"
      placeholder="Username do seu perfil no GitHub"
      class="shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
    />
    <label class="block text-sm font-bold mb-2">
      Permite usar sua imagem do perfil do GitHub?
      <input class="ms-2" type="checkbox" v-model="depoimento.permiteFoto" />
      <span class="ms-2 text-gray-500 font-light"
        >Sua foto será exibida no card junto ao seu depoimento</span
      >
    </label>
    <h4 class="block font-bold">Observações</h4>
    <label class="block text-sm mb-2">
      O link do seu LinkedIn servirá apenas para direcionar outros usuários para
      seu perfil, como forma de validação do depoimento e comprovação de
      identidade, mas não será usado em momento algum para nenhuma outra
      finalidade por parte da equipe da Bruno Costa Dev.
    </label>
    <label class="block text-sm mb-2">
      O link do seu Github servirá apenas para buscar sua foto de perfil, caso
      você permita, para exibição no card do depoimento. Nenhum outro dado será
      coletado ou armazenado por parte da equipe da Bruno Costa Dev.
    </label>
    <label class="block text-sm mb-2">
      Os depoimentos aqui contidos podem a qualquer momento serem removidos ou
      reportados por usuários que se sintam ofendidos ou que achem que o
      conteúdo é inadequado ou irreal. A equipe da Bruno Costa Dev se reserva o direito de
      avaliar e remover depoimentos que não estejam de acordo com as políticas
      de uso do site.
    </label>

    <div class="flex">
      <button
        type="submit"
        class="border-2 border-custom-blue bg-custom-blue text-white py-2 px-4 mt-4 rounded hover:bg-white hover:text-custom-blue text-sm"
      >
        Enviar
      </button>
      <button
        class="ms-2 bg-white text-sm text-custom-blue border-2 border-custom-blue py-2 px-4 mt-4 rounded"
        @click.prevent="showForm = false"
      >
        Esconder formulário
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { defineProps, ref, watch } from "vue";
// @ts-ignore
import { enviarDepoimento } from "../services/connection-firebase.js";

const props = defineProps({
  showForm: {
    type: Boolean,
    required: true,
  },
});

const showForm = ref(props.showForm);

const emit = defineEmits(["update:showForm"]);

watch(
  () => showForm.value,
  (value) => {
    emit("update:showForm", value);
  }
);

const depoimento = ref({
  nomeAluno: "",
  imagemAluno: "",
  profissao: "",
  depoimento: "",
  data: "",
  linkLinkedin: "",
  userGithub: "",
  permiteFoto: false,
  reported: false,
});

const handleEnviarDepoimento = async () => {
  depoimento.value.data = new Date().toISOString().split("T")[0];

  if (depoimento.value.permiteFoto) {
    try {
      const response = await fetch(
        `https://api.github.com/users/${depoimento.value.userGithub}`
      );
      const data = await response.json();
      depoimento.value.imagemAluno = data?.avatar_url;
    } catch (error) {
      console.error(error);
    }
  }

  await enviarDepoimento(depoimento.value);
};
</script>
