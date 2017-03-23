<template>
  <p v-if="!siteContent" class="loading">Loading...</p>
  <div v-else id="app">
    <div class="top-container">
      <h1 class="logo"><a href="/"></a><span class="sr-only">Dotti Pelotti</span></h1>
      <div class="contact-container">
      </div>
      <div class="languages-container">
        <a href="/" 
          title="Wybierz polski jezyk" 
          aria-label="Wybierz polski jezyk"
          lang="pl" 
          hreflang="Polish" 
          class="langPL active">pl
        </a>
        <a href="/" 
          title="Choose english language"
          aria-label="Choose english language"
          lang="en" 
          hreflang="English" 
          class="langEN">en
        </a>
      </div>
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

export default {
  name: 'app',
  components: { Navigation },
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
html {
  height: 100%;
}

body {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: url(../static/images/tlo.jpg);
}

body, .top-container, .languages-container > a {
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

.top-container > .languages-container > a {
  font-family: "typouprighteunormal", cursive;
}

.languages-container > a {
  text-decoration: none;
}

.languages-container > a.active {
  color: #000000;
}

.top-container > .languages-container,
.top-container > .contact-container,
.top-container > .languages-container > a {
  position: absolute;
}

h1.logo {
  background: url(../static/images/logo.png) no-repeat;
  margin-top: 52px;
  margin-left: 30px;
  width: 135px;
  height: 159px;
}

h1.logo > a {
  display: block;
  width: 100%;
  height: 100%;
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

.top-container > .languages-container {
  top: 100px;
  right: 80px;
  border: 1px solid red;
}

.languages-container > a {  
  background: url(../static/images/jezyk-bg.png) no-repeat;
  width: 28px;
  height: 28px;
  color: #726a58; 
}

.languages-container > a:nth-child(1) {
  left: -21px;
}

.languages-container > a:nth-child(2) {
  top: -11px;
  left: 17px;
}

.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    border: 0;
}


</style>
