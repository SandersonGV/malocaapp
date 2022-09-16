<template>
  <div>
    <div v-if="loading"  class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center " style="flex-direction: column">
      <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
      </div>
      <img src="img/logo.png"  style="width:30%" /> 
    </div>
    <div v-else>
   <HeaderComponent :malocainfo="maloca.info"></HeaderComponent >
    <router-view :malocaprop="maloca" />
    <NewsletterComponent :malocainfo="maloca.info" ></NewsletterComponent >
    <FooterComponent :malocainfo="maloca"  ></FooterComponent>
    <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
  </div>
  </div>
</template>
<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import NewsletterComponent from "@/components/NewsletterComponent.vue";
import malocaConsumer from '@/database/malocaConsumer';

export default {
  name: "SiteView",
  components: {
    HeaderComponent, 
    FooterComponent,
    NewsletterComponent,
  },
   data() {
    return {
      maloca: {},
      loading:true
    };
  },
  methods: {
    loadMalocainfo: async function () {
      this.maloca.info = await malocaConsumer.getInfo();
      this.maloca.servicos = await malocaConsumer.getServices();
      this.maloca.projetos  = await malocaConsumer.getProjects();
      this.maloca.team = await malocaConsumer.getTeam();
      this.maloca.partners = [];

      this.loading=false;
    },
  },
  async created() {
    await this.loadMalocainfo();
  },
};
</script>
