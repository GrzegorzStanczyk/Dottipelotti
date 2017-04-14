<template>  
  <div id="mobileApp">
    <Hamburger :siteContent="siteContent"/>
    <header>
      <h1 class="focusable">Witajcie w Dotti Pelotti</h1>
      <div class="top-container"> 
        <div class="logo" />
        <Language v-on:setSiteLang="getSiteLang"/>
      </div>
    </header>
    <Home id="home" :siteContent="siteContent" />
    <Misja id="misja" :siteContent="siteContent" />
    <Program id="program" :siteContent="siteContent" />
    <NaTalerzu id="na-talerzu" :siteContent="siteContent" />
    <Galeria id="galeria" :siteContent="siteContent" :isMobile="isMobile" />
    <Kadra id="kadra" :siteContent="siteContent" />
    <Cennik id="cennik" :siteContent="siteContent" />
    <Kontakt id="kontakt" :siteContent="siteContent" />
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
  props: { siteContent: Object, isMobile: Boolean },
  methods: {
    getSiteLang (lang) {
      this.$emit('setSiteLang', lang)
    }
  }
}
</script>

<style>

</style>
