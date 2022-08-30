<template>
  <div class="about">
    <PageHeaderComponent page-name="Sobre-nós" />
    <AboutComponent />
    <TeamComponent :team="maloca.time" />
  </div> 
</template>

<script>
import MalocaInfo from "@/models/malocainfo";
import AboutComponent from "@/components/AboutComponent.vue";
import PageHeaderComponent from "@/components/PageHeaderComponent.vue";
import TeamComponent from "@/components/TeamComponent.vue";

export default {
  name: "AboutView",
  components: {
    PageHeaderComponent, 
    AboutComponent,
    TeamComponent,
  },
   data() {
    return {
      maloca: {},
      destaques:[],
      projetos:[],
    };
  },
  methods: {
    loadMalocainfo: function () {
      this.maloca = new MalocaInfo();
    },
  },
  created() {
    this.loadMalocainfo();
  },
};
</script>