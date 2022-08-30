<template>
  <div class="about">
    <PageHeaderComponent page-name="Entre em contato conosco" />
    <ContactComponent />
  </div>
</template>

<script>
import MalocaInfo from "@/models/malocainfo";
import PageHeaderComponent from "@/components/PageHeaderComponent.vue";
import ContactComponent from "@/components/ContactComponent.vue";

export default {
  name: "ContactView",
  components: {
    PageHeaderComponent, 
    ContactComponent
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