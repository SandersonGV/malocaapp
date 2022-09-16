<template>
  <div  class="container-xxl py-5">
    <div class="container">
      <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 class="section-title text-center text-primary text-uppercase">
          Nossos Serviços
        </h6>
        <h1 class="mb-5">
          Conheça os
          <span class="text-primary text-uppercase">Serviços</span> que
          oferecemos
        </h1>
      </div>
      <div class="row g-4">
        <div
          v-for="item,index in servicos" :key="index"
          class="col-lg-4 col-md-6 wow fadeInUp"
          data-wow-delay="0.6s"
        >
          <a class="service-item rounded" >
            <div class="service-icon bg-transpasrent border rounded p-1">
              <div class="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                <i :class="item.icone + ' fa-2x text-primary'"></i>
              </div>
            </div>
            <h5 class="mb-3">{{ item.nome }}</h5>
            <p class="text-body mb-0">{{ item.descricao }}</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServicesComponent",
  props:{
    servicos: {type:Array}
  },
  data() {
    return {
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
