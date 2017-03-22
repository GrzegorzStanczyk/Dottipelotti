<template>
  <div id="app">
    <router-view></router-view>
    <div v-html="trescWpisu" />
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      trescWpisu: ''
    }
  },
  mounted () {
    this.$http.get('http://dottipelotti.eu/wpbaza/wp-json/wp/v2/posts').then(response => {
      this.trescWpisu = response.body[0].content.rendered
    }, error => {
      console.log(error)
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
