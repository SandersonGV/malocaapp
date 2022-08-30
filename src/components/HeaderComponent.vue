<template>
  <div class="container-fluid bg-dark px-0">
            <div class="row gx-0">
                <div class="col-lg-3 bg-dark d-none d-lg-block">
                <router-link to="/" class="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                        <img src="img/logo.png"  style="width:60%;" />
                </router-link>
                </div>
                <div class="col-lg-9">
                    <div class="row gx-0 bg-white d-none d-lg-flex">
                        <div class="col-lg-7 px-5 text-start">
                            <div class="h-100 d-inline-flex align-items-center py-2 me-4">
                                <i class="fa fa-envelope text-primary me-2"></i>
                                <p class="mb-0">{{maloca.email}}</p>
                            </div>
                            <div class="h-100 d-inline-flex align-items-center py-2">
                                <i class="fa fa-phone-alt text-primary me-2"></i>
                                <p class="mb-0">{{maloca.telefone}}</p>
                            </div>
                        </div>
                        <div class="col-lg-5 px-5 text-end">
                            <div class="d-inline-flex align-items-center py-2">
                              <a v-for="item in maloca.social" :key="item.id" class="me-3" :href="item.url"><i :class="item.icone"></i></a>
                            </div>
                        </div>
                    </div>
                    <nav class="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
                        <router-link to="/" class="navbar-brand d-block d-lg-none">
                            <h1 class="m-0 text-primary text-uppercase">{{maloca.titulo}}</h1>
                        </router-link>
                        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div class="navbar-nav mr-auto py-0">
                                <router-link to="/" class="nav-item nav-link active">Inicio</router-link>
                                <router-link to="/about" class="nav-item nav-link">Sobre</router-link>
                                <router-link to="/services" class="nav-item nav-link">Serviços</router-link>
                                <router-link to="/projects" class="nav-item nav-link">Projetos</router-link>
                                <router-link to="/contact" class="nav-item nav-link">Contato</router-link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
</template>

<script>
import MalocaInfo from '@/models/malocainfo';

export default {
  name: 'HeaderComponent',
  props: {
    msg: String,
  },
  data() {
    return {
      maloca:{},
    }
  },
  methods: {
    loadMalocainfo:function(){
      this.maloca = new MalocaInfo();
    },
  },created() {
    this.loadMalocainfo();
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
