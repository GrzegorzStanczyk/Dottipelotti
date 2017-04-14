<template>
  <section class="blog-container">
    <header class="center">
      <h2 class="title">{{title}}
        <span class="o1"></span>
        <span class="o2"></span>
        <span class="o3"></span>
      </h2>
    </header>
    <carousel v-if="isMobile"
              :siteContent="siteContent"/>
    <div v-else class="gallery" >
      <img v-for="(media, index) in pageContent" 
          :src="media" alt="" 
          @click="imageClick(index)" 
          class="gallery-images">
      <modal :imageIndex="imageIndex" 
            :siteContent="siteContent"
            :showModal="showModal" 
            v-if="showModal" 
            @close="showModal = false" />
    </div>
  </section>
</template>

<script>
import Carousel from '@/components/Carousel'
import Modal from '@/components/Modal'
export default {
  name: 'Galeria',
  components: { Modal, Carousel },
  props: { siteContent: Object, isMobile: Boolean },
  data () {
    return {
      showModal: false,
      title: null,
      imageIndex: ''
    }
  },
  computed: {
    pageContent () {
      this.title = this.siteContent.lang === 'pl' ? 'galeria' : 'gallery'
      return this.siteContent.media.map(media => media.media_details.sizes.thumbnail.source_url)
    }
  },
  methods: {
    imageClick (index) {
      this.showModal = true
      this.imageIndex = index
    }
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

.gallery-images {
  cursor: pointer;
  transition: opacity .6s ease;
}

.gallery-images:hover {
  opacity: 0.7;
}

.title {
  background-color: #b3dc5b;   
}

img {
  margin: 15px;
}
</style>
