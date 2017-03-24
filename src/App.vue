<template>
  <p v-if="!siteContent" class="loading">Loading...</p>
  <div v-else id="app">
    <div class="top-container">
      <div class="logo" />
      <language />
    </div>
    <navigation />
    <section>
      <div class="contact-container" />
      <router-view :siteContent="siteContent" />
    </section>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import Language from '@/components/Language'

export default {
  name: 'app',
  components: { Navigation, Language },
  data () {
    return {
      siteContent: null
    }
  },
  beforeMount () {
    this.getSiteContent()
  },
  methods: {
    getSiteContent () {
      const requests = [
        this.$http.get('pages'),
        this.$http.get('posts')
      ]

      Promise.all(requests)
        .then(response => {
          this.siteContent = {
            pages: response[0].body,
            posts: response[1].body
          }
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
}
</script>

<style>
@font-face {
  font-family: 'typoupright';
  src: url('../static/font/ufonts.com_typoupright_bt.eot');
  src: url('../static/font/ufonts.com_typoupright-bt.woff')  format('woff'),
       url('../static/font/ufonts.com_typoupright-bt.ttf')  format('truetype');
}
html {
  height: 100%;
}

body {
  height: 100%;
  font-family: Verdana, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: url(../static/images/tlo.jpg);
}

body, .top-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

#app {
  display: flex;
  flex-direction: column;
  margin-top: 22px;
  height: 100%;
  width: 1024px;
}

#app > main {
  flex: 1;
  margin-top: 16px;
  padding: 8px;
}

.loading {
  text-align: center;
}

h1 {
  font-family: "typoupright", cursive;
}

.logo {
  background: url(../static/images/logo.png) no-repeat;
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

.top-container {
  position: relative;
  background: url(../static/images/top3.png) no-repeat;
  width: 1024px;
  height: 255px;
}

.top-container::before {
  content: '';
  background: url(../static/images/sloneczko.png) no-repeat;
  position: absolute;
  left: 26px;
  top: 80px;  
  width: 85px;
  height: 83px;
  animation: spin 20s linear 0s infinite;
}
</style>
