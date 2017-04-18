<template>
  <div class="carousel">
    <slick ref="slick" :options="slickOptions">
    <img v-for="image in pageContent" 
      :src="image" alt="">
    </slick>
  </div>
</template>

<script>
import Slick from 'vue-slick'
export default {
  name: 'Carousel',
  props: { siteContent: Object },
  components: { Slick },
  data () {
    return {
      slickOptions: {
        slidesToShow: 1
      }
    }
  },
  computed: {
    pageContent () {
      return this.siteContent.media.map(media => media.media_details.sizes.full.source_url)
    }
  },
  methods: {
    next () {
      this.$refs.slick.next()
    },
    prev () {
      this.$refs.slick.prev()
    },
    reInit () {
      this.$refs.slick.reSlick()
    }
  }
}
</script>

<style lang="scss">
.slick-slider {
  width: 100%;
  height: 100%;
  position: relative;  
  overflow: hidden;
}

.slick-arrow {
  width: 12%;
  height: 15%;
  top: 50%;
  position: absolute;  
  border-radius: 50%;
  border: 0;
  cursor: pointer;
  transition: opacity .6s ease;  
  color: rgba(0, 0, 0, 0);
  &:focus{
    outline: none;
  }
}

.slick-prev {
  z-index: 10;
  left: 2%;
  background: url(../../static/images/w-lewo.png) no-repeat center center;
  background-size: 100% 100%;
  transform: translateY(-50%);
}

.slick-next {
  right: 2%;
  background: url(../../static/images/w-prawo.png) no-repeat center center;
  background-size: 100% 100%;
  transform: translateY(-50%);
}

</style>
