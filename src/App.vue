<template>
  <p v-if="!siteContent" class="loading">Loading...</p>
  <div v-else id="app">
    <navigation />
    <main>
      <router-view :siteContent="siteContent" />
    </main>
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
  color: #2c3e50;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}

#app > main {
  flex: 1;
  margin-top: 16px;
  padding: 8px;
  background: powderblue;
}

.loading {
  text-align: center;
}
</style>
