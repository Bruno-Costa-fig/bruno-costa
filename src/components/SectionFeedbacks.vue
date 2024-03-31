<template>
  <div class="min-h-screen">
    <h3 class="w-56 text-4xl my-4 pb-2 border-b-4 border-white">Meus alunos</h3>
    <p>
      Se você é ou já foi meu aluno, deixe aqui clicando no botão ao lado:
      <button
        @click="showForm = true"
        class="text-custom-blue bg-white ms-4 p-2 rounded"
      >
        Deixar feedback
      </button>
    </p>

    <div class="w-full my-8 flex justify-center" v-if="showForm">
      <div class="w-8/12">
        <FormDepoimento :show-form="showForm"/>
      </div>
    </div>
    <div class="flex w-full justify-evenly items-center mt-8" v-if="listaDepoimentos.length > 0">
      <i
        class="bx bxs-left-arrow-circle text-5xl shadow-md rounded-full pointer-events-auto"
        @click="previousPage"
        v-if="page > 0"
      ></i>
      <i
        v-else
        class="bx bxs-left-arrow-circle text-5xl shadow-md rounded-full text-gray-400 opacity-30"
      ></i>
      <CardFeedback
        :depoimento="depoimento"
        v-for="(depoimento, i) in listaDepoimentos.slice(page, page + 3)"
        :key="i"
        class="carousel-item"
      />
      <i
        v-if="page < listaDepoimentos.length - 3"
        class="bx bxs-right-arrow-circle text-5xl shadow-md rounded-full pointer-events-auto"
        @click="nextPage"
      ></i>
      <i
        v-else
        class="bx bxs-right-arrow-circle text-5xl shadow-md rounded-full text-gray-400 opacity-30"
      ></i>
    </div>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import CardFeedback from "./UI/CardFeedback.vue";
import FormDepoimento from "./FormDepoimento.vue";
import { ref } from "vue";
// @ts-ignore
import { getCollection } from "../services/connection-firebase.js";	

const page = ref(0);

const showForm = ref(false);

const nextPage = () => {
  page.value += 3;
};

const previousPage = () => {
  if (page.value > 0 && page.value - 3 >= 0) {
    page.value -= 3;
  } else {
    page.value = 0;
  }
};

const { listaDepoimentos } = getCollection();
</script>
