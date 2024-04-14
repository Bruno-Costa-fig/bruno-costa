<template>
  <div class="w-screen shadow-md shadow-md-left shadow-md-right sm:my-2 my-6 bg-white flex items-center justify-center">
    <div class="slider h-100 bg-white w-10/12 py-8 sm:w-8/12">
      <div class="icon-container">
        <i :class="`bx ${icon}`" v-for="icon in iconsList"></i>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bx {
  font-size: 5em;
  margin: 0 0.9em;
  color: #4069ef;
}



.icon-container {
  display: flex;
  padding: 0 10px;
  animation: slideIcons 10s backwards infinite;
}

.slider {
  overflow: hidden;
}

@keyframes slideIcons {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

@media screen and (max-width: 425px){
  .bx {
    font-size: 3em;
    margin: 0 0.3em;
  }
}

@media screen and (max-width: 768px){
  .bx {
    margin: 0 0.3em;
  }
}
</style>

<script lang="ts" setup>
import { ref } from "vue";

const iconsList = ref([
  "bxl-github",
  "bxl-html5",
  "bxl-vuejs",
  "bxl-javascript",
  "bxl-react",
  "bxl-bootstrap",
  "bxl-css3",
  "bxl-tailwind-css",
  "bxl-sass",
  "bxl-nodejs",
]);
</script>
