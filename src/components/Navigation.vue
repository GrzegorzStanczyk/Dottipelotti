<template>  
    <nav role="navigation">
      <router-link class="window home" to="/" exact><span>home</span></router-link>
      <router-link class="window misja" to="/misja"><span>misja</span></router-link>
      <router-link class="window program" to="/program"><span>program</span></router-link>
      <router-link class="window na-talerzu" to="/na-talerzu"><span>na talerzu</span></router-link>
      <router-link class="window galeria" to="/galeria"><span>galeria</span></router-link>
      <router-link class="window kadra" to="/kadra"><span>kadra</span></router-link>
      <router-link class="window cennik" to="/cennik"><span>cennik</span></router-link>
      <router-link class="contact" to="/kontakt"><span>kontakt</span></router-link>
    </nav>  
</template>

<style scoped lang="scss">
nav {
  position: relative;
  display: flex;
  justify-content: space-around;
  padding: 0 57px;
  background: url(../../static/images/menu3.png) no-repeat center bottom;
  font-family: "typoupright", cursive;
  font-size: 24px;
  height: 131px;
  color: #726a58;
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

.cennik {
  background: url(../../static/images/cennik.png) no-repeat center 0;
}

.cennik.router-link-active,
.cennik:hover {
  background: url(../../static/images/cennik-akt.png) no-repeat center 0;
}

.galeria {
  background: url(../../static/images/galeria.png) no-repeat center 0;
}

.galeria.router-link-active,
.galeria:hover {
  background: url(../../static/images/galeria-akt.png) no-repeat center 0;
}

.kadra {
  background: url(../../static/images/kadra.png) no-repeat center 0;
}

.kadra.router-link-active,
.kadra:hover {
  background: url(../../static/images/kadra-akt.png) no-repeat center 0;
}

.contact.router-link-active,
.contact:hover {
  background: url(../../static/images/kontakt-akt.png) no-repeat center 0;
  color: #ffffff;
}

.misja {
  background: url(../../static/images/misja.png) no-repeat center 0;
}

.misja.router-link-active,
.misja:hover {
  background: url(../../static/images/misja-akt.png) no-repeat center 0;
}

.na-talerzu {
  background: url(../../static/images/na-talerzu.png) no-repeat center 0;
}

.na-talerzu.router-link-active,
.na-talerzu:hover {
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
