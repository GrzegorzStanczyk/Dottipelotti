<template>
  <div id="mobileApp">
    <Home :siteContent="siteContent" />
    <Misja :siteContent="siteContent" />
    <Program :siteContent="siteContent" />
    <NaTalerzu :siteContent="siteContent" />
    <Galeria :siteContent="siteContent" />
    <Kadra :siteContent="siteContent" />
    <Cennik :siteContent="siteContent" />
    <Kontakt :siteContent="siteContent" />
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

export default {
  name: 'Mobile',
  components: { Home, Misja, Program, NaTalerzu, Galeria, Kadra, Cennik, Kontakt },
  props: { siteContent: Object }
}
</script>

<style>

</style>
