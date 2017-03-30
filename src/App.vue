<template>
  <p v-if="!siteContent" class="loading">Loading...</p>
  <mobile v-else-if='isMobile' :siteContent="siteContent" />  
  <div v-else id="app">
    <top-container />
    <router-view :siteContent="siteContent" />  
    <div class="footer"></div>  
  </div>
</template>
<script>
import Navigation from '@/components/Navigation'
import topContainer from '@/components/Header'
import Mobile from '@/components/Mobile'

export default {
  name: 'app',
  components: { Navigation, topContainer, Mobile },
  data () {
    return {
      siteContent: null,
      widnowWidth: null,
      isMobile: null
    }
  },
  beforeMount () {
    this.getSiteContent()
  },
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('resize', this.getWindowWidth)

      this.getWindowWidth()
    })
  },
  methods: {
    getSiteContent () {
      const requests = [
        this.$http.get('pages'),
        this.$http.get('posts'),
        this.$http.get('media/?per_page=25')
      ]

      Promise.all(requests)
        .then(response => {
          this.siteContent = {
            pages: response[0].body,
            posts: response[1].body,
            media: response[2].body
          }
        })
        .catch(error => {
          console.error(error)
        })
    },
    getWindowWidth () {
      this.widnowWidth = window.innerWidth
      this.widnowWidth >= 1024 ? this.isMobile = false : this.isMobile = true
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.getWindowWidth)
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: 'typoupright';
  src: url('../static/font/ufonts.com_typoupright_bt.eot');
  src: url('../static/font/ufonts.com_typoupright-bt.woff')  format('woff'),
       url('../static/font/ufonts.com_typoupright-bt.ttf')  format('truetype');
}
html {
}

body {
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
}

.loading {
  text-align: center;
}

h2 {
  font-family: "typoupright", cursive;
}

.footer {
  background: url(../static/images/footer3.png) no-repeat center top;
  height: 41px;
  padding-bottom: 10px;
  min-width: 1024px;   
}

</style>
