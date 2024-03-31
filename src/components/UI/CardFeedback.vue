<template>
  <div
    class="bg-slate-100 h-full w-3/12 border border-white border-4 shadow-inner p-4 mt-4 rounded-xl text-custom-blue flex flex-col justify-between"
  >
    <div class="h-96">
      <div class="flex justify-start">
        <img
          width="80"
          class="rounded-full me-4"
          v-if="!!props.depoimento.imagemAluno"
          :src="props.depoimento.imagemAluno"
          :alt="`Foto do(a) ${props.depoimento.nomeAluno}`"
        />
        <div class="mt-2 flex flex-col justify-between h-4/5">
          <h1 class="text-2xl mt-1 font-bold text-wrap">
            {{ props.depoimento.nomeAluno }}
          </h1>
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
        :href="props.depoimento.linkLinkedin"
        target="_blank"
        class="bg-white text-custom-blue p-2 rounded-md shadow"
      >
        perfil no LinkedIn
        <i class="bx bxl-linkedin"></i>
      </a>
      <button class="bg-red-100 text-sm rounded text-custom-blue p-2 shadow">
        reportar
        <i class="bx bx-comment-x"></i>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import moment from "moment";

const props = defineProps({
  depoimento: {
    type: Object,
    required: true,
  },
});
</script>
