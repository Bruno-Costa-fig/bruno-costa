<template>
  <div class="w-screen my-6 bg-white flex items-center justify-center">
    <div class="slider h-100 bg-white w-11/12 py-8  justify-evenly items-center">
      <div
        class="icon-container flex sm:flex-col md:flex-row justify-evenly items-center"
      >
        <img v-for="empresa in empresas" :key="empresa.name" :width="empresa.width" :src="empresa.url" :alt="empresa.name" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const empresas = ref([
  {
    name: "zdzcode",
    url: "https://www.zdzcode.com.br/assets/img/logo-vertical.webp",
    width: 180,
  },
  {
    name: "lab365",
    url: "https://media.licdn.com/dms/image/C4D0BAQGcs8aDa4BZOQ/company-logo_200_200/0/1668186440398/lab365_logo?e=1720051200&v=beta&t=V9Na0P8LP6LvJ7z0P3gBNRamcZNhL_qtzu_m5oneOFk",
    width: 90,
  },
  // {
  //   name: "SENAI",
  //   url: "https://www.senai-ce.org.br/themes/senai/assets/images/logo-senai.png",
  //   width: 120,
  // },
  // {
  //   name: "Zenir Móveis",
  //   url: "https://tfcvih.vtexassets.com/assets/vtex.file-manager-graphql/images/7eb966c9-68d4-4f0e-807f-a59ae9108678___905d864e2735fe80fabc91d3d3facdc8.svg",
  //   width: 200,
  // },
]);
</script>
