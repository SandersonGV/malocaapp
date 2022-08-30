<template>
  <div>
   <HeaderComponent></HeaderComponent>
    <router-view />
    <NewsletterComponent></NewsletterComponent>
    <FooterComponent></FooterComponent>
    <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>

  </div>
</template>
<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import NewsletterComponent from "@/components/NewsletterComponent.vue";

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
      destaques:[],
      projetos:[],
    };
  },
};
</script>
