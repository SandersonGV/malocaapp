<template>
 <div class="container-xxl py-5">
            <div class="container">
                <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 class="section-title text-center text-primary text-uppercase">nossos contatos</h6>
                    <h1 class="mb-5">Entre em <span class="text-primary text-uppercase">Contato</span> conosco</h1>
                </div>
                <div class="row g-4">
                    <div class="col-12">
                        <div class="row gy-4">
                            <div class="col-md-4 text-start">
                                <h6 class="section-title text-start text-primary text-uppercase">Projetos</h6>
                                <p><i class="fa fa-envelope-open text-primary me-2"></i>projeto@malocagames.com</p>
                            </div>
                            <div class="col-md-4 text-start">
                                <h6 class="section-title text-start text-primary text-uppercase">Informações</h6>
                                <p><i class="fa fa-envelope-open text-primary me-2"></i>info@malocagames.com</p>
                            </div>
                            <div class="col-md-4 text-start">
                                <h6 class="section-title text-start text-primary text-uppercase">Eventos</h6>
                                <p><i class="fa fa-envelope-open text-primary me-2"></i>eventos@malocagames.com</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 wow fadeIn" data-wow-delay="0.1s">
                      
                        <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37943.5763131321!2d-46.69501795749757!3d-23.55723331692292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2sS%C3%A3o%20Paulo%2C%20State%20of%20S%C3%A3o%20Paulo%2C%20Brazil!5e0!3m2!1sen!2sbd!4v1656023118848!5m2!1sen!2sbd" 
                        class="position-relative rounded w-100 h-100"
                        frameborder="0" allowfullscreen="" aria-hidden="false"
                        loading="lazy" tabindex="0"
                        referrerpolicy="no-referrer-when-downgrade">

                        </iframe>
                    </div>
                    <div class="col-md-6">
                        <div class="wow fadeInUp" data-wow-delay="0.2s">
                                <div class="row g-3">
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" v-model="name" placeholder="Your Name" />
                                            <label for="name">Seu nome</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="email" class="form-control" v-model="email" placeholder="Your Email" />
                                            <label for="email">Seu Email</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" v-model="subject" placeholder="Subject" />
                                            <label for="subject">Assunto</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <textarea class="form-control" placeholder="Leave a message here" v-model="message" ></textarea>
                                            <label for="message">Mensagem</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button class="btn btn-primary w-100 py-3" @click="enviarMensagem"><i class="far fa-paper-plane"></i> Enviar mensagem</button>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>

export default {
  name: 'ContactComponent',
  props: {
  },
   data() {
    return {
      name:"",
      email:"",
      subject:"",
      message:"",
    };
  },
  methods: {
    enviarMensagem: function () {
        console.log(this.name,this.email,this.subject,this.message)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
