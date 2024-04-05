<template>
  <div class="w-screen px-16 pb-24 min-h-screen bg-custom-blue text-white">
    <header class="h-auto pt-12 flex flex-col items-center justify-center">
      <img
        class="h-48 rounded-full"
        src="https://avatars.githubusercontent.com/u/62752426?v=4"
        alt="foto perfil"
      />
      <h1 class="text-6xl text-white font-medium">Bruno Costa</h1>
      <h2 class="font-light text-white">
        Programador | Professor de tecnologia
      </h2>
      <SlideTecnologias />
    </header>
    <section id="sobre">
      <h3 class="w-48 text-4xl my-4 pb-2 border-b-4 border-white">Sobre mim</h3>

      <p>
        Sou um Desenvolvedor de Software Full-Stack, oferecendo meus serviços
        para empresas em uma ampla gama de setores. No momento, estou
        comprometido com a ZDZCode, onde trago minha paixão e habilidades para
        impulsionar o sucesso da equipe. Em 2021, fiz uma transição de carreira
        do design gráfico para a área de TI, o que me permitiu explorar novos
        desafios. Desde então, tenho me destacado em projetos de desenvolvimento
        de software, onde pude aplicar minha criatividade e habilidades
        técnicas.
      </p>
      <br />
      <p>
        Tenho experiência sólida em tecnologias de front-end, como REACTJS,
        VUEJS, BOOTSTRAP, TAILWIND CSS, NUXT, NEXT, SASS, entre outras. Além
        disso, possuo conhecimento em back-end, com foco em C# e no ecossistema
        do .NET, e mantenho projetos pessoais interessantes com NodeJs +
        Typescript.
      </p>
      <p>
        Sou apaixonado por ensinar e compartilhar conhecimento pois acredito na
        força da comunidade e no poder da educação. Por isso, criei o canal no
        YouTube Bruno Costa Dev, onde compartilho conteúdos sobre tecnologia e
        programação. Além disso, sou professor de tecnologia no Lab365/SENAI-SC
        desde dezembro de 2022, onde leciono aulas de programação ao vivo para
        jovens e adultos. Durante este período tive a oportunidade de ensinar
        centenas de alunos, sendo a minha participação como professor na Trilha
        DEV do Floripa Mais Tec (projeto idealizado pelo Lab365/SENAI-SC em
        parceria com a prefeitura de Florianópolis/SC) o ápice da minha
        experiência, onde pude lecionar para mais de 3000 alunos.
      </p>
      <br />
      <p>
        Atualmente estou na busca por desenvolver o ensino de tecnologia na
        minha região, com o intuito de atrair jovens e adultos para o mundo da
        programação e tecnologia.
      </p>
    </section>
    <section id="empresas" class="flex">
      <SectionEmpresas />
    </section>
    <section id="feedbacks">
      <SectionFeedbacks />
    </section>
    <section id="redes">
      <h3 class="w-64 text-4xl my-4 pb-2 border-b-4 border-white">
        Minhas Redes
      </h3>
      Me siga para acompanhar meu trabalho e novidades:
      <div class="flex justify-evenly mt-4">
        <a
          href="https://www.linkedin.com/in/brunocostadev/"
          target="_blank"
          class="text-white-500 text-6xl"
        >
          <i class='bx bxl-linkedin-square'></i>
        </a>
        <a
          href="https://www.youtube.com/@brunocostadev"
          target="_blank"
          class="text-white-500 text-6xl"
        >
          <i class='bx bxl-youtube'></i>
        </a>
        <a
          href="https://www.instagram.com/brunocostadev/"
          target="_blank"
          class="text-white-500 text-6xl"
        >
          <i class='bx bxl-instagram'></i>
        </a>
        <a
          href="https://github.com/Bruno-Costa-fig"
          target="_blank"
          class="text-white-500 text-6xl"
        >
          <i class='bx bxl-github'></i>
        </a>
      </div>
    </section>
  </div>
  <footer class="w-full bg-custom-blue flex items-center py-4 fixed bottom-0">
    <div class="w-full">
      <p class="text-center text-slate-100">
        © 2022 Bruno Costa. Todos os direitos reservados.
      </p>
    </div>
  </footer>
</template>

<script lang="ts" setup>
// @ts-ignore
import SlideTecnologias from "./components/SlideTecnologias.vue";
import SectionFeedbacks from "./components/SectionFeedbacks.vue";
import SectionEmpresas from "./components/SectionEmpresas.vue";
</script>

<style scoped>
/* Estilos Tailwind CSS aqui */
.text-blue-500 {
  color: #3b82f6;
}

.text-gray-500 {
  color: #6b7280;
}

.text-gray-700 {
  color: #4b5563;
}
</style>
