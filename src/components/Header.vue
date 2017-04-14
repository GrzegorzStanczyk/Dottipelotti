<template>
  <header>
    <h1 class="focusable">Witajcie w Dotti Pelotti</h1>
    <div class="top-container"> 
      <div class="logo" />
      <Language v-on:setSiteLang="getSiteLang"/>
    </div>
    <Navigation />
  </header>
</template>

<script>
import Language from '@/components/Language'
import Navigation from '@/components/Navigation'

export default {
  name: 'Header',
  components: { Language, Navigation },
  methods: {
    getSiteLang (lang) {
      this.$emit('setSiteLang', lang)
    }
  }
}
</script>

<style>

.top-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap; /* 1 */
}

h1.focusable:active,
h1.focusable:focus {
  clip: auto;
  clip-path: none;
  height: auto;
  margin: 0;
  overflow: visible;
  position: static;
  width: auto;
  white-space: inherit;
}

.top-container {
  position: relative;
  background: url(../../static/images/top3.png) no-repeat center;
  max-width: 1024px;
  height: 255px;
}

.logo {
  background: url(../../static/images/logo.png) no-repeat;
  margin-top: 30px;
  margin-left: 30px;
  width: 135px;
  height: 159px;
}

@keyframes spin {
  0% {transform: rotate(0deg);}
  10% {transform: rotate(-12deg);}
  60% {transform: rotate(48deg);}
  100% {transform: rotate(0deg);}
}


@media screen and (min-width: 1024px) {
  .top-container::before {
    content: '';
    background: url(../../static/images/sloneczko.png) no-repeat;
    position: absolute;
    left: 26px;
    top: 80px;  
    width: 85px;
    height: 83px;
    animation: spin 20s linear 0s infinite;
  }
}
</style>
