import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/routes/Home'
import Cennik from '@/routes/Cennik'
import Galeria from '@/routes/Galeria'
import Kadra from '@/routes/Kadra'
import Kontakt from '@/routes/Kontakt'
import Misja from '@/routes/Misja'
import NaTalerzu from '@/routes/NaTalerzu'
import Program from '@/routes/Program'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/cennik', name: 'Cennik', component: Cennik },
    { path: '/galeria', name: 'Galeria', component: Galeria },
    { path: '/kadra', name: 'Kadra', component: Kadra },
    { path: '/kontakt', name: 'Kontakt', component: Kontakt },
    { path: '/misja', name: 'Misja', component: Misja },
    { path: '/na-talerzu', name: 'NaTalerzu', component: NaTalerzu },
    { path: '/program', name: 'Program', component: Program }
  ]
})
