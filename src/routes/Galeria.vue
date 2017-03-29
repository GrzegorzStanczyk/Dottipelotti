<template>
  <section class="blog-container">
    <div class="center">
      <h2 class="title">galeria
        <span class="o1"></span>
        <span class="o2"></span>
        <span class="o3"></span>
      </h2>
    </div>      
    <div class="galery">
      <img v-for="media in pageContent" :src="media" alt="">   
    </div>       
  </section>
</template>

<script>
export default {
  name: 'Galeria',
  props: { siteContent: Object },
  computed: {
    pageContent () {
      return this.siteContent.media.map(media => media.media_details.sizes.thumbnail.source_url)
    }
  },
  mounted () {
    console.log('Galeria siteContent', this.siteContent.media)
  }
}
</script>

<style lang="scss" scoped>
.blog-container {
  box-sizing: border-box;
  padding: 15px 0;
  max-width: 1024px;
}

.galery, .blog-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.title {
  background-color: #b3dc5b;   
}

img {
  margin: 15px;
}
</style>
