<template>
  <section class="blog-container">
    <header class="center">
      <h2 class="title">galeria
        <span class="o1"></span>
        <span class="o2"></span>
        <span class="o3"></span>
      </h2>
    </header>
    <modal :showModal="showModal" v-if="showModal" @close="showModal = false" />
    <div class="gallery" >
      <img v-for="media in pageContent" :src="media" alt="" @click="showModal = true">
    </div>
  </section>
</template>

<script>
import Modal from '@/components/Modal'
export default {
  name: 'Galeria',
  components: { Modal },
  props: { siteContent: Object, isMobile: Boolean },
  data () {
    return {
      showModal: false
    }
  },
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

.blog-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.gallery {
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
