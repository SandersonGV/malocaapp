<template>
  <div>
   <HeaderComponent :malocainfo="malocainfo"></HeaderComponent>
    <router-view  />
    <NewsletterComponent :malocainfo="malocainfo" ></NewsletterComponent>
    <FooterComponent :malocainfo="malocainfo"  ></FooterComponent>
    <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>

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
      malocainfo: {},
      destaques:[],
      projetos:[],
    };
  },
  methods: {
    loadMalocainfo: async function () {
      this.malocainfo = await malocaConsumer.getInfo();
      let servicos = await malocaConsumer.getServices();
      this.malocainfo.servicos = servicos;
    },
  },
  async created() {
    await this.loadMalocainfo();
  },
};
</script>
