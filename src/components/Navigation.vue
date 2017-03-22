<template>
  <nav>
    <router-link to="/">home</router-link>
    <router-link to="/cennik">cennik</router-link>
    <router-link to="/galeria">galeria</router-link>
    <router-link to="/kadra">kadra</router-link>
    <router-link to="/kontakt">kontakt</router-link>
    <router-link to="/misja">misja</router-link>
    <router-link to="/na-talerzu">na talerzu</router-link>
    <router-link to="/program">program</router-link>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  padding: 8px;
  background: powderblue;
}

a {
  color: inherit;
}

a:not(:last-child) {
  margin-right: 8px;
}
</style>
