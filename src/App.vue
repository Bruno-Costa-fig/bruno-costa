<template>
  <div class="w-screen pb-24 min-h-screen bg-custom-blue text-white">
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
    <section id="sobre" class="px-8">
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
      <!-- <p>
        Atualmente estou na busca por desenvolver o ensino de tecnologia na
        minha região, com o intuito de atrair jovens e adultos para o mundo da
        programação e tecnologia.
      </p> -->
    </section>
    <section id="empresas" class="flex w-screen origin-left">
      <SectionEmpresas />
    </section>
    <section id="experiencias" class="flex flex-col mb-8 px-8">
      <h3 class="w-56 text-4xl my-4 pb-2 border-b-4 border-white">Experiências</h3>

      <h4 class="text-2xl my-4">ZDZCode
        <span class="bg-slate-100 text-custom-blue rounded text-sm ms-4" style="padding: 4px;">Jun de 2021 - até o momento</span>
      </h4>
      <p>
        <span class="font-bold"># Principais atividades:</span>
        <ul class="mt-8 ms-8 list-disc">
          <li>criação de telas para sistemas com Vuejs</li>
          <li>criação de api's em .Net e integração com frontend</li>
          <li>projeto e implementação de entidades e definição de seus relacionamentos</li>
          <li>gerenciamento de estruturas em bancos de dados e na manutenção e criação de novas procedures e tabelas</li>
        </ul>
      </p>

      <p class="mt-8">
        <span class="font-bold"># Projetos e resultados obtidos:</span>
        
        <ul class="mt-8 ms-8 list-disc">
          <li>criação de sistema administrativo para gerenciamento de fluxo de vendas e clientes para funerárias</li>
          <li>trabalhei no desenvolvimento de sistema de controle de investimentos e aportes financeiros</li>
          <li>projeto e implementação de entidades e definição de seus relacionamentos</li>
          <li>gerenciamento de estruturas em bancos de dados e na manutenção e criação de novas procedures e tabelas</li>
          <li>criei uma automação para importação de base de dados de clientes em arquivos excel/csv usando C#</li>
          <li>trabalhei na manutenção de barramentos de serviços integrados com o serviço Service Bus da Azure</li>
          <li>Trabalhei na criação de contratos, relatórios e carteiras de identificação de clientes desenvolvidos totalmente com C#</li>
          <li>Responsável pela migração de bibliotecas de componentes internos desenvolvidos em VueJs 2 para a versão 3 com Typescript</li>
          <li>Trabalhei na implementação de fluxo de cadastro de clientes em app desenvolvido em Flutter com integração de API construida em .net</li>
          <li>Trabalhei na migração de versão de bibliotecas internas do .net 7 para a versão 8.0</li>
          <li>Atualmente trabalhando na manutenção de sistemas de gerenciamento de redes hospitalares em um projeto legado escritos em ASP clássico com VBScript e na sua migração para uma versão atual escrita em .NET 8 e com a interface criada usando NUXTJS e Typescript</li>
        </ul>
      </p>

      <h4 class="text-2xl my-4 mt-16">LAB 365 | SENAI/SC
        <span class="bg-slate-100 text-custom-blue rounded text-sm ms-4" style="padding: 4px;">Dez de 2022 - até o momento</span>
      </h4>
      <p>
        <span class="font-bold"># Principais atividades:</span>
        <br>
        <span>
          Atuo como Mentor Educacional de turmas internas. Dentre as principais atribuições está a criação de conteúdos e materiais educativos para os encontros com as turmas, corrigir e orientar os alunos durante execução de projetos práticos.
        </span>
        </p>

      <p class="mt-8">
        <span class="font-bold"># Projetos e resultados obtidos:</span>
        
        <ul class="mt-8 ms-8 list-disc">
          <li>Já lecionei mais de 10 turmas em 2023 e 2024, variando entre FrontEnd com React e VueJs e Backend com .Net/C# e NodeJs.</li>
          <li>Além dos conteúdos base, já lecionei sobre POO, TDD e Testes Unitários com Jest e XUnit, SCRUM, Git e GitHub.</li>
          <li>Mentor e avaliador em projetos práticos para conclusão de módulos dos cursos síncronos.</li>
          <li>Atuei na Trilha Dev no projeto Floripa Mais Tec no mês de novembro de 2023 onde pude lecionar em aulas ao vivo pelo YouTube com mais de 1 mil alunos simultâneos nas lives e com um montante total de mais de 4 mil alunos.</li>
        </ul>
      </p>
    </section>
    <section id="feedbacks" class="px-8 py-8">
      <SectionFeedbacks />
    </section>
    <section id="redes" class="px-8">
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

<style>
/* Estilos Tailwind CSS aqui */
.text-blue-500 {
  color: #3b82f6;
}

.button {
  background-color: #fff;
  color: #3b82f6;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 2em;
}

.text-gray-500 {
  color: #6b7280;
}

.text-gray-700 {
  color: #4b5563;
}
</style>
