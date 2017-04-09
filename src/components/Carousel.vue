<template>
  <div class="gallery-mobile">
    <img v-for="(image, index) in pageContent" 
      :src="image" alt="" 
      class="modal-img">
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  props: { siteContent: Object, imageIndex: Number },
  data () {
    return {
      curentImage: this.imageIndex,
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
      this.showSlides(this.imageIndex)
    })
  },
  methods: {
    showSlides (n) {
      if (n > this.imagesLength) { this.curentImage = 0 }
      if (n < 0) { this.curentImage = this.imagesLength }
      this.$refs.img[this.curentImage].classList.add('show')
    },
    plusSlides (n) {
      this.$refs.img[this.curentImage].classList.remove('show')
      this.showSlides(this.curentImage += n)
      console.log(this.curentImage)
    },
    currentImage () {
      console.log(this.curentImage)
    }
  }
}
</script>

<style lang="scss" scoped>
.gallery-mobile {
  width: 100%;
  // display: flex;
  // flex-direction: row;
  // flex-wrap: nowrap;
  // overflow: hidden;
}
.modal-img {  
  position: relative;
<<<<<<< HEAD
  display: inline-block;
  width: 90%;
  max-width: 90%;
=======
  box-sizing: border-box;
  width: 60%;
  max-width: 1060px;
  margin: 0px auto;  
  padding: 20px 27px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.gallery-mobile {
  width: 100%;
}
.modal-img {
  display: block;
  margin: 0 auto;
  width: 100%;
  max-width: 95%;
>>>>>>> ed5a176e3c19a294401c2b5f6a4970f7251701d9
  border: 1px solid #919191;
  overflow: visible;
  animation: fade 1s;
  // display: none;
}

.btn {  
  width: 71px;
  height: 71px;
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

.modal-preview-button {
  left: -60px;
  background: url(../../static/images/w-lewo.png) no-repeat center center;
  transform: translateY(-50%)
}

.modal-next-button {
  right: -60px;
  background: url(../../static/images/w-prawo.png) no-repeat center center;
  transform: translateY(-50%)
}

.modal-button__label {
	border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
}

</style>
