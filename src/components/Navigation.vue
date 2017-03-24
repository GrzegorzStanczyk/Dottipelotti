<template>
  <nav role="navigation">
    <router-link to="/">home</router-link>
    <router-link to="/cennik">cennik</router-link>
    <router-link to="/galeria">galeria</router-link>
    <router-link to="/kadra">kadra</router-link>
    <router-link class="contact" to="/kontakt"><span>kontakt</span></router-link>
    <router-link to="/misja">misja</router-link>
    <router-link to="/na-talerzu">na talerzu</router-link>
    <router-link to="/program">program</router-link>
  </nav>
</template>

<style scoped>
nav {
  position: relative;
  display: flex;
  padding: 8px;
}

a {
  color: inherit;
  text-decoration: none;
}

a:not(:last-child) {
  margin-right: 8px;
}

.contact {
  position: absolute;
  top: -255px;
  right: 85px;
  text-transform: lowercase;    
  background: url(../../static/images/kontakt.png) no-repeat;
  width: 174px;
  height: 115px;
  color: #726a58;  
  font-family: "typouprighteunormal", cursive;
}

.contact:hover {
  background: url(../../static/images/kontakt-akt.png) no-repeat;
  color: #ffffff;
}

.contact > span {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translate(-50%, -50%);
}

</style>
