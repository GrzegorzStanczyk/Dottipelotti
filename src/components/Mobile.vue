<template>  
  <div id="mobileApp">
    <Hamburger />
    <header>
      <h1 class="focusable">Witajcie w Dotti Pelotti</h1>
      <div class="top-container"> 
        <div class="logo" />
        <Language />
      </div>
    </header>
    <Home id="home" :siteContent="siteContent" />
    <Misja id="mision" :siteContent="siteContent" />
    <Program id="program" :siteContent="siteContent" />
    <NaTalerzu id="food" :siteContent="siteContent" />
    <Galeria id="gallery" :siteContent="siteContent" />
    <Kadra id="personnel" :siteContent="siteContent" />
    <Cennik id="price" :siteContent="siteContent" />
    <Kontakt id="contact" :siteContent="siteContent" />
  </div>  
</template>

<script>

import Home from '@/routes/Home'
import Misja from '@/routes/Misja'
import Program from '@/routes/Program'
import NaTalerzu from '@/routes/NaTalerzu'
import Galeria from '@/routes/Galeria'
import Kadra from '@/routes/Kadra'
import Cennik from '@/routes/Cennik'
import Kontakt from '@/routes/Kontakt'
import Language from '@/components/Language'
import Hamburger from '@/components/Hamburger'

export default {
  name: 'Mobile',
  components: { Home, Misja, Program, NaTalerzu, Galeria, Kadra, Cennik, Kontakt, Language, Hamburger },
  props: { siteContent: Object }
}
</script>

<style>

</style>
