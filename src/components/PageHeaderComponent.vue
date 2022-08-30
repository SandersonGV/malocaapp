<template>
 <div class="container-fluid page-header p-0 " style="background-image: url(img/fundopageheader.png)">
            <div class="container-fluid page-header-inner pt-5">
                <div class="container text-center pb-5">
                    <h1 class="display-3 text-white mb-3 animated slideInDown">{{pageName}}</h1>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center text-uppercase">
                            <li class="breadcrumb-item"><router-link to='/'>Inicio</router-link></li>
                            <li class="breadcrumb-item"><a href="#">Paginas</a></li>
                            <li class="breadcrumb-item text-white active" aria-current="page">{{pageName}}</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
</template>

<script>
export default {
  name: 'PageHeaderComponent',
  props: {
    pageName: String,
  },
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
