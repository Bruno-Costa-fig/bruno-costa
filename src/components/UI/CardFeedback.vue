<template>
  <div
    class="bg-slate-100 w-full border border-white border-4 shadow-inner p-4 mt-4 rounded-xl text-custom-blue flex flex-col justify-between"
  >
    <div class="h-full">
      <div class="flex justify-start">
        <div>
          <img
          width="80"
          class="rounded-full me-4 mt-3"
          v-if="!!props.depoimento.imagemAluno"
          :src="props.depoimento.imagemAluno"
          :alt="`Foto do(a) ${props.depoimento.nomeAluno}`"
          />
        </div>
        <div class="mt-2 flex flex-col justify-between h-4/5">
          <h1 class="text-2xl mt-1 font-bold text-wrap">
            {{ props.depoimento.nomeAluno }}
          </h1>
          <h3 class="text-1xl mt-1 font-medium text-wrap">
            {{ props.depoimento.profissao }}
          </h3>
          <div class="pb-4">
            {{ moment(props.depoimento.data).format("DD/MM/YYYY") }}
          </div>
        </div>
      </div>

      <div class="mt-4">
        <i class="bx bxs-quote-alt-left text-3xl"></i>
        <p>{{ props.depoimento.depoimento }}</p>
        <span class="flex justify-end">
          <i class="bx bxs-quote-alt-right text-3xl"></i>
        </span>
      </div>
    </div>
    <div class="flex justify-between">
      <a
        v-if="!!props.depoimento.linkLinkedin"
        :href="props.depoimento.linkLinkedin"
        target="_blank"
        class="bg-white text-custom-blue p-2 rounded-md shadow"
      >
        perfil no LinkedIn
        <i class="bx bxl-linkedin"></i>
      </a>
      <!-- <button @click="reportar" class="bg-red-100 text-sm rounded text-custom-blue p-2 shadow">
        reportar
        <i class="bx bx-comment-x"></i>
      </button> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import moment from "moment";
// @ts-ignore
import { reportarDepoimento } from "../../services/connection-firebase";

const props = defineProps({
  depoimento: {
    type: Object,
    required: true,
  },
});

// const reportar = () => {
//   reportarDepoimento(props.depoimento.id)
// };
</script>
