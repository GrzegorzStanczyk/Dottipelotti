<template>  
    <nav role="navigation">
      <router-link class="window home" to="/" exact><span>{{navTitle ? 'dom' : 'home'}}</span></router-link>
      <router-link class="window mision" to="/misja"><span>{{navTitle ? 'misja' : 'mission'}}</span></router-link>
      <router-link class="window program" to="/program"><span>program</span></router-link>
      <router-link class="window on-the-plate" to="/na-talerzu"><span>{{navTitle ? 'na talerzu' : 'on the plate'}}</span></router-link>
      <router-link class="window gallery" to="/galeria"><span>{{navTitle ? 'galeria' : 'gallery'}}</span></router-link>
      <router-link class="window staff" to="/kadra"><span>{{navTitle ? 'kadra' : 'our staff'}}</span></router-link>
      <router-link class="window prices" to="/cennik"><span>{{navTitle ? 'cennik' : 'prices'}}</span></router-link>
      <router-link class="contact" to="/kontakt"><span>{{navTitle ? 'kontakt' : 'contact'}}</span></router-link>
    </nav>    
</template>

<script>
export default {
  name: 'Navigation',
  props: { siteContent: Object },
  data () {
    return {
      title: null
    }
  },
  computed: {
    navTitle () {
      this.title = this.siteContent.lang === 'pl'
      return this.title
    }
  }
}
</script>

<style scoped lang="scss">
nav {
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: space-around;
  background: url(../../static/images/menu3.png) no-repeat center bottom;
  font-family: "typoupright", cursive;
  font-size: 24px;
  height: 131px;
  min-width: 1024px;
  color: #726a58;
  padding: 0 40px;
}

.window {
  position: relative;  
  top: 3px;
  width: 104px;
  height: 108px;
  transition: background .2s ease-in; 
  &:hover {
    color: #000000;
  }
  & > span {
    position: absolute;
    width: 100%;
    bottom: 4px;
    text-align: center;
  }
}

a {
  color: inherit;
  text-decoration: none;
}

.router-link-active, 
.router-link-active:hover{
  color: #000000;
}

.home {
  background: url(../../static/images/home.png) no-repeat center 0;
}

.home.router-link-active,
.home:hover {
  background: url(../../static/images/home-akt.png) no-repeat center 0;
}

.prices {
  background: url(../../static/images/cennik.png) no-repeat center 0;
}

.prices.router-link-active,
.prices:hover {
  background: url(../../static/images/cennik-akt.png) no-repeat center 0;
}

.gallery {
  background: url(../../static/images/galeria.png) no-repeat center 0;
}

.gallery.router-link-active,
.gallery:hover {
  background: url(../../static/images/galeria-akt.png) no-repeat center 0;
}

.staff {
  background: url(../../static/images/kadra.png) no-repeat center 0;
}

.staff.router-link-active,
.staff:hover {
  background: url(../../static/images/kadra-akt.png) no-repeat center 0;
}

.contact.router-link-active,
.contact:hover {
  background: url(../../static/images/kontakt-akt.png) no-repeat center 0;
  color: #ffffff;
}

.mision {
  background: url(../../static/images/misja.png) no-repeat center 0;
}

.mision.router-link-active,
.mision:hover {
  background: url(../../static/images/misja-akt.png) no-repeat center 0;
}

.on-the-plate {
  background: url(../../static/images/na-talerzu.png) no-repeat center 0;
}

.on-the-plate.router-link-active,
.on-the-plate:hover {
  background: url(../../static/images/na-talerzu-akt.png) no-repeat center 0;
}

.program {
  background: url(../../static/images/program.png) no-repeat center 0;
}

.program.router-link-active,
.program:hover {
  background: url(../../static/images/program-akt.png) no-repeat center 0;
}

.contact {
  position: absolute;
  top: -255px;
  right: 90px;
  text-transform: lowercase;    
  background: url(../../static/images/kontakt.png) no-repeat;
  width: 174px;
  height: 115px;
  color: #726a58;  
  font-family: "typoupright", cursive;
  font-size: 22px;
}

.contact > span {
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translate(-50%, -50%);
}

</style>
