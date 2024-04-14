<template>
  <div class="min-h-screen">
    <h3 class="w-56 text-4xl my-4 pb-2 border-b-4 border-white">Recomendações</h3>
    <div class="flex flex-col lg:flex-row">
      <p class="mb-4">
        Trabalhou comigo ou já foi meu aluno? deixe sua recomendação clicando no botão ao lado:
      </p>
      <button
        @click="showForm = true"
        class="text-custom-blue bg-white ms-4 p-2 rounded"
      >
        Deixar feedback
      </button>
    </div>

    <div class="w-full my-8 flex justify-center" v-if="showForm">
      <FormDepoimento :show-form="showForm" @update:show-form="changeShowForm" />
    </div>

    <div class="mt-4 grid min-h-96 gap-2 md:gap-4 md:grid-cols-3">
      <CardFeedback
      :depoimento="depoimento"
      v-for="(depoimento, i) in listaDepoimentos.filter((x: any) => !x.reported).slice(page, page + 3)"
      :key="i"
      />
    </div>

    <div class="w-full flex justify-center">
      <button @click="previousPage" class="button me-4"><i class='bx bxs-left-arrow-circle'></i> Exibir Anteriores</button>
      <button @click="nextPage" class="button">Exibir próximos <i class='bx bxs-right-arrow-circle'></i></button>
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

const changeShowForm = (value: boolean) => {
  showForm.value = value;
};

const { listaDepoimentos } = getCollection();
</script>
