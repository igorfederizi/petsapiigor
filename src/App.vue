<template>
  <div>  
  <router-view>
    <Navbar/>

  </router-view>
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

import Navbar from './components/Navbar.vue'

export default {
    components: {
      Navbar,
    } 
  
}
</script>