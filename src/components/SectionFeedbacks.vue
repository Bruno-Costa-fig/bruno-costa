<template>
  <div class="min-h-screen">
    <h3 class="w-56 text-4xl my-4 pb-2 border-b-4 border-white">Recomendações</h3>
    <p>
      Trabalhou comigo ou já foi meu aluno? deixe sua recomendação clicando no botão ao lado:
      <button
        @click="showForm = true"
        class="text-custom-blue bg-white ms-4 p-2 rounded"
      >
        Deixar feedback
      </button>
    </p>

    <div class="w-full my-8 flex justify-center" v-if="showForm">
      <FormDepoimento :show-form="showForm" @update:show-form="changeShowForm" />
    </div>

    <div class="sm:flex md:grid gap-4 grid-cols-3">
      <CardFeedback
      :depoimento="depoimento"
      v-for="(depoimento, i) in listaDepoimentos.filter(x => !x.reported).slice(page, page + 3)"
      :key="i"
      />
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
