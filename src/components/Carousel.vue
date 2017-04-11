<template>
  <div class="carousel">
    <button class="btn carousel__preview-button"
            @click="plusSlides(-1)"
            type="button">
    </button>
    <button class="btn carousel__next-button"
            @click="plusSlides(1)"
            type="button">
    </button>
    <img v-for="image in pageContent" 
      :src="image" alt="" 
      class="carousel__img"
      ref="img">
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  props: { siteContent: Object },
  data () {
    return {
      slideIndex: 0,
      imagesLength: this.siteContent.media.length - 1
    }
  },
  computed: {
    pageContent () {
      return this.siteContent.media.map(media => media.media_details.sizes.full.source_url)
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.showSlides(this.slideIndex)
    })
  },
  methods: {
    showSlides (n) {
      if (n > this.imagesLength) { this.slideIndex = 0 }
      if (n < 0) { this.slideIndex = this.imagesLength }
      this.$refs.img[this.slideIndex].classList.add('show')
    },
    plusSlides (n) {
      this.$refs.img[this.slideIndex].classList.remove('show')
      this.showSlides(this.slideIndex += n)
    }
  }
}
</script>

<style lang="scss" scoped>
.carousel {
  width: 100%;
  position: relative;  
}
.carousel__img {  
  display: none;
  max-width: 95%;
  margin: 0 auto;
}

.show {
  display: block;
}

.btn {
  width: 8%;
  height: 10%;
  top: 50%;
  position: absolute;  
  border-radius: 50%;
  border: 0;
  cursor: pointer;
  transition: opacity .6s ease;
  &:focus{
    outline: none;
  }
}

.btn:hover {
  opacity: 0.8;
}

.carousel__preview-button {
  left: 2%;
  background: url(../../static/images/w-lewo.png) no-repeat center center;
  background-size: 100% 100%;
  transform: translateY(-50%);
}

.carousel__next-button {
  right: 2%;
  background: url(../../static/images/w-prawo.png) no-repeat center center;
  background-size: 100% 100%;
  transform: translateY(-50%);
}

</style>
