<template>
  <div class="container-xxl py-5">
        <div  class="container">
            <div class="row g-5 align-items-center">
                <div class="col-lg-6">
                    <h6 class="section-title text-start text-primary text-uppercase">Sobre nós</h6>
                    <h1 class="mb-4">Bem vindos à <span class="text-primary text-uppercase">{{maloca?.info?.titulo}}</span></h1>
                    <p class="mb-4">{{maloca?.info?.frase}}</p>
                    <div class="row g-3 pb-4">
                        <div class="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
                            <div class="border rounded p-1">
                                <div class="border rounded text-center p-4">
                                    <i class="far fa-object-group fa-2x text-primary mb-2"></i>
                                    <h2 class="mb-1" data-toggle="counter-up">{{maloca?.projetos?.length}}</h2>
                                    <p class="mb-0">Projetos</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4 wow fadeIn" data-wow-delay="0.3s">
                            <div class="border rounded p-1">
                                <div class="border rounded text-center p-4">
                                    <i class="fa fa-users-cog fa-2x text-primary mb-2"></i>
                                    <h2 class="mb-1" data-toggle="counter-up">{{maloca?.team?.length}}</h2>
                                    <p class="mb-0">Equipe</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4 wow fadeIn" data-wow-delay="0.5s">
                            <div class="border rounded p-1">
                                <div class="border rounded text-center p-4">
                                    <i class="fas fa-handshake fa-2x text-primary mb-2"></i>
                                    <h2 class="mb-1" data-toggle="counter-up">{{maloca?.partners?.length}}</h2>
                                    <p class="mb-0">Parceiros</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <router-link to="/about" class="btn btn-primary py-3 px-5 mt-2" >Conheça mais</router-link>
                </div>
                <div class="col-lg-6">
                    <div class="row g-3">
                        <div class="col-6 text-end">
                            <img class="img-fluid rounded w-75 wow zoomIn mt-5" data-wow-delay="0.1s" src="img/about-3.png"  />
                        </div>
                        <div class="col-6 text-start">
                            <img class="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.3s" src="img/about-2.png" />
                        </div>
                        <div class="col-6 text-end">
                            <img class="img-fluid rounded w-50 wow zoomIn" data-wow-delay="0.5s" src="img/about-4.png" />
                        </div>
                        <div class="col-6 text-start">
                            <img class="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.7s" src="img/about-1.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'AboutComponent',
  props: {
    malocaprop: Object,
  },
  data() {
    return {
        maloca: this.malocaprop,
    }
  },methods: {
    
  },
  async mounted() {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
