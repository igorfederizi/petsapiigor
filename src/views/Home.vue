<template>
  <div>    
      <Navbar />

    <div class="container-fluid darkGreenBg">
    
    <div class="row ms-5 pt-5 pb-5">
      <div class="col-xs-1 col-sm-6 col-md-5 col-lg-6 col-md-10 order-last">
          <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_6hhvdjuv.json" background="transparent"  speed="1"  style="width: 1000px; height: 600px;" class="img-fluid img" loop autoplay></lottie-player> 
         <!-- <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_2UeWRZ.json"  background="transparent"  speed="1"  style="width: 1000px; height: 600px;" class="img-fluid img" loop autoplay></lottie-player> -->
          <!-- <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_pwohahvd.json"  background="transparent"  speed="1"  style="width: 1000px; height: 600px;" class="img-fluid img"  loop  autoplay></lottie-player> -->
        </div>

    <!--xs sm md lg xl xxl -->
      <div class="col-xs-5 col-sm-5 col-md-2 col-lg-6">
        <div class="col-md-7 col-lg-12 mt-5">
          <h1 class="display-3 mb-5 greenFontsTitle">Construa sua marca conectando-se com os clientes!</h1>
        <blockquote class="blockquote greenFontsTitle">
          <p>Nossa Missão!</p>
          <footer class="col-lg-8 blockquote-footer greenFontsTitle"> <cite title="Source Title">"Temos como foco o bem estar, auxílio e acompanhamento para todos os tipos de animais"</cite></footer>
        </blockquote>

        <!-- <a name="" id="" class="btn greenBg purpleFontsContents" href="#" role="button">Mais informações!</a> -->
        <router-link :to="'/sobre'" class="btn greenBg purpleFontsContents">Mais informações</router-link>
         </div>
      </div>
    </div>
  </div>

<div style="background-color: #281F56">
  <div class="container pb-3">
    <div class="row justify-content-around">
      <h1 class="display-5 mt-4 mb-4 text-center greenFontsTitle">Nossos melhores clientes</h1>
      <hr>
      <div class="card mb-3 mt-3 blueFont" style="max-width: 540px; background-color: #00EA7C; border: none;">
        <div class="row g-0">
          <div class="col-md-4">
            <!-- <img src="https://picsum.photos/id/1/200/200"  alt="..."> -->
            <!-- <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_DnLK6k.json"  background="transparent"  speed="1"  style="width: 150px; height: 150px;"   loop  autoplay></lottie-player> -->
            <lottie-player src="https://assets5.lottiefiles.com/private_files/lf30_fmzfmcm5.json" background="transparent"  speed="1"  style="width: 150px; height: 150px;" class="img-fluid rounded-start"  loop  autoplay></lottie-player>
            <!-- <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_kc3drow3.json"  background="transparent"  speed="1"  style="width: 150px; height: 150px;"  class="img-fluid rounded-start" loop  autoplay></lottie-player>-->
          </div>
   
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title purpleFontsContents">Gatos</h5>
              <p class="text purpleFontsContents">Atendemos e disponibilizamos os módulos de cadastro de animal, onde o usuário poderá organizar por nome, idade, vacinas entre outras informações.</p>
              <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
            </div>
          </div>
        </div>
      </div>

           <div class="card mb-3 mt-3 bestClients">
        <div class="row g-0">
          <div class="col-md-4">
            <!-- <img src="https://picsum.photos/id/1/200/200" alt="..."> -->
            <lottie-player src="https://assets3.lottiefiles.com/private_files/lf30_emulvclw.json"  background="transparent"  speed="1"  style="width: 150px; height: 150px;" class="img-fluid rounded-start"  loop  autoplay></lottie-player>
          </div>
   
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title purpleFontsContents">Cães</h5>
              <p class="text purpleFontsContents" >Além dos felinos, o usuário dispõe também do cadastro de cães! Podendo usufruir dos cadastros citados anteriormente, além dos módulos de Veterinária, Pet Shop, Casa de Ração, Sites e pontos de vendas!</p>
              <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</div> <!-- green bg -->

<div class="container-fluid">
  <div class="row align-items-center">
    <div class="col-md-6 col-lg-6">
      <img src="../assets/tech-animal-vertical-azul-02-100.jpg" class="img-fluid" alt="" width="1800" height="auto">
    </div>
  
      <div class="col-md-6 text-center mt-4">
            <h2 class="display-3 mb-1 purpleFontsTitle">
              Faça a melhor escolha para sua gestão!<br>
            </h2>
            <!-- <small class="text text-center display-5 purpleFontsTitle">Para sua melhor controle e gestão!</small> -->

         <!-- <div class="col-lg-12 text-align: justify; text-justify: inter-character;">
          <hr>
            <h5 class="purpleFontsContents">
            <small>Tem como foco o bem estar, auxílio e acompanhamento para todos os tipos de animais</small>
            <p>Uma empresa líder que tem como principal valor, pensar que os animais envolvidos terão oportunidades de melhores cuidados</p>
            <p>Oferecemos à nossos clientes crescimento na gestão do seu negócio e feedbacks necessários para evolução constante.</p></h5>
        </div> -->

        <a name="" id="" class="btn greenBg mt-5 mb-5" style="color: #3F3D91" href="#" role="button">Fazer um orçamento!</a>
      </div>
  </div>
</div>

<div class="container-fluid" style="background-color: #00C67A">
  <div class="row justify-content-center">
<h1 class="display-4 text-center mt-4 mb-4 purpleFontsTitle">Parceiros</h1>

<div class="col-md-4 col-lg-2 mb-5">
    <div class="text-center" style="color: #00EA7C;">
      <a href="">
        <img src="..\assets\designer-grafico.png" class="img-fluid rounded mx-auto d-block img" width="150rem" height="auto" alt="Contatar">     
      </a>
      <div class="card-body">
        <h5 class="card-title text-center purpleFontsContents">Anderson Design</h5>
        <!-- <p class="card-text">This content is a little bit longer.</p> -->
      </div>
    </div>
 </div>

 <div class="col-md-4 col-lg-2 mb-5">
    <div class="text-center" style="color: #00EA7C;">
      <a href="">
        <img src="..\assets\logoOng.jpg" class="img-fluid rounded mx-auto d-block img" width="auto" max-height="auto" alt="Contatar">     
      </a>
      <div class="card-body">
        <h5 class="card-title text-center purpleFontsContents">Club Amigo dos Animais</h5>
        <!-- <p class="card-text">This content is a little bit longer.</p> -->
      </div>
    </div>
 </div>
 


  </div>


</div>

<div class="container-fluid" style="background-color: #00EA7C">
  <footer class="py-5">
    <div class="row">
      <div class="col-md-2">
        <h5 style="color: #281F56;">Sobre</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0" style="color: #3F3D91">Clientes</a></li>
          <!-- <li class="nav-item mb-2"><a href="#" class="nav-link p-0" style="color: #3F3D91">Features</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0" style="color: #3F3D91">Pricing</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0" style="color: #3F3D91">FAQs</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0" style="color: #3F3D91">About</a></li> -->
        </ul>
      </div>

      <div class="col-md-2">
        <h5 style="color: #281F56;">Conteúdo</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0" style="color: #3F3D91">Produtos</a></li>
          <!--<li class="nav-item mb-2"><a href="#" class="nav-link p-0" style="color: #3F3D91">Features</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0" style="color: #3F3D91">Pricing</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0" style="color: #3F3D91">FAQs</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0" style="color: #3F3D91">About</a></li> -->
        </ul>
      </div>

      <div class="col-md-2">
        <h5 style="color: #281F56;">Colaboradores</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0" style="color: #3F3D91">Parceiros</a></li>
          <!--<li class="nav-item mb-2"><a href="#" class="nav-link p-0" style="color: #3F3D91">Features</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0" style="color: #3F3D91">Pricing</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0" style="color: #3F3D91">FAQs</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0" style="color: #3F3D91">About</a></li> -->
        </ul>
      </div>

      <div class="col-xs-2 col-md-4">
        <form>
          <h5 style="color: #281F56;">Assine nossas novidades!</h5>
          <!-- <p style="color: #3F3D91"> Assine nossas novidades</p> -->
          <div class="d-flex w-100 gap-2">
            <label for="newsletter1" class="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" class="form-control" placeholder="Seu melhor e-mail">
            <button class="btn" type="button" style="background-color: #3F3D91; color: #00EA7C">Assinar</button>
          </div>
        </form>
      </div>
    </div>

      </footer>
</div>

    <!-- <div class="d-flex justify-content-between py-4 my-4 border-top">
      <p>© 2021 Company, Inc. All rights reserved.</p>
      <ul class="list-unstyled d-flex">
        <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
        <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
        <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
      </ul>
    </div>
  </footer>
</div>-->


  </div>
</template>

<style scoped>

.greenFontsTitle {
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  color: #00EA7C;
}

.purpleFontsTitle {
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  color: #281F56;
}



.greenFontsContents {
  font-family: 'Kanit', sans-serif;
  font-weight: 300;
  color: #00EA7C;


}

.purpleFontsContents {
  font-family: 'Kanit', sans-serif;
  font-weight: 300;
  color: #3F3D91;

}


.greenBg {
  background-color: #00EA7C;
  border: none;
}


.darkGreenBg {
  background-color: #3F3D91;
  color: #00EA7C;
}

.bestClients {
 max-width: 540px;
 background-color: #00EA7C;
 border: none;

}

/**.blueFont {
  color: #281F56;
  
}*/

/*.titleFont {
  font-family: 'Montserrat', sans-serif;
}*/

/*.fontApoio {
  font-family: 'Kanit', sans-serif;
  color: aliceblue;
}*/

</style>


<script>

import Navbar from '../components/Navbar.vue'

export default ({
  components: {
    Navbar
  }
})
</script>
