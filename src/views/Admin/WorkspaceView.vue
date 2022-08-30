<template>
  <div class="row">
      <div class="col-sm-9 col-md-9 col-lg-9 mx-auto">
        <div class="card border-0 shadow rounded-3 my-5">
          <div class="card-body p-4 p-sm-5">
            <div class="d-flex align-items-start">
              <div class="nav flex-column nav-pills me-3 text-start" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <button class="nav-link text-start active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" >Pricipal</button>
                <button class="nav-link text-start" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" >Social</button>
                <button class="nav-link text-start" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" >Serviços</button>
                <button class="nav-link text-start" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" >Time</button>
                <button class="nav-link text-start" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" >Projetos</button>
              </div>
              <div class="tab-content container" id="v-pills-tabContent">
                <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                  <div class="mb-2">
                    <label for="titulo" class="form-label">Titulo</label>
                    <input v-model="maloca.titulo" type="text" class="form-control"  placeholder="titulo">
                  </div>
                  <div class="mb-2">
                    <label for="email" class="form-label">email</label>
                    <input v-model="maloca.email" type="email" class="form-control"  placeholder="email">
                  </div>
                  <div class="mb-2">
                    <label for="endereco" class="form-label">endereco</label>
                    <input v-model="maloca.endereco" type="text" class="form-control"  placeholder="endereco">
                  </div>
                  <div class="mb-2">
                    <label for="telefone" class="form-label">telefone</label>
                    <input v-model="maloca.telefone" type="text" class="form-control"  placeholder="telefone">
                  </div>
                  <div class="mb-2">
                    <label for="frase" class="form-label">frase</label>
                    <input v-model="maloca.frase" type="text" class="form-control"  placeholder="frase">
                  </div>
                </div>
                <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
                <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
                <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import MalocaInfo from "@/models/malocainfo";

export default {
  name: "WorkspaceView",
  components: {

  },
   data() {
    return {
      maloca: {},
    };
  },
  methods: {
    loadMalocainfo: function () {
      this.maloca = new MalocaInfo();
      console.log(this.maloca)
    },
  },
  created() {
    this.loadMalocainfo();
  },
};
</script>

<style scoped>
.workspace {
  margin: 0 auto;
  width: 70vw;
}
</style>