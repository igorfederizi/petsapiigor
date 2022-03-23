<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light greenBg sticky-top">
        <div class="container">
          <!-- <img src="./assets/Techanimal_logo.jpg" class="img-fluid d-inline-block align-text-top"> -->
        <!-- <a class="navbar-brand purpleFontsTitle" href="#">Tech Animal</a> -->
        <router-link :to="'/'" class="navbar-brand purpleFontsTitle">Tech Animal</router-link>

        <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
          <ul class="navbar-nav me-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <router-link
              :to="'/parceiros'"
              class="nav-link purpleFontsTitle"
              >Parceiros</router-link>
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link purpleFontsTitle" href="#">Parceiros</a> -->
              <router-link
                :to="'/sobre'"
                class="nav-link purpleFontsTitle"
                >Sobre</router-link>
            </li>
            <li class="nav-item">
              <router-link
              :to="'/contatos'"
              class="nav-link purpleFontsTitle"
              >Contatos</router-link>
            </li>
            <li class="nav-item">
              <router-link
              :to="'/clientes'"
              class="nav-link purpleFontsTitle"
              >Clientes</router-link>
            </li>
             <!--<li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
              <div class="dropdown-menu" aria-labelledby="dropdownId">
                <a class="dropdown-item" href="#">Teste 2</a>
                <a class="dropdown-item" href="#">Teste 3</a>
              </div>
            </li> -->
          </ul>
          <form class="d-flex my-2 my-lg-0">
            <!-- <input class="form-control me-sm-2 darkGreenBg" type="text" placeholder="Encontre aqui"> -->
            <!--<input id="newsletter1" type="text" class="me-sm-2 form-control" placeholder="Encontre aqui">
             <button class="btn btn-outline-success my-2 my-sm-0 darkGreenBg" type="submit">Buscar</button> -->
          </form>
        </div>
      </div> <!-- container -->
    </nav>
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
export default {
    components: {
        
    }
}
</script>