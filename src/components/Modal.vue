<template>
  <transition name="modal">
    <div class="modal-mask" >
      <div class="modal-wrapper" @click="$emit('close')">
        <div class="modal-container"  @click.stop>
          <button class="btn modal-close-button"
                  @click="$emit('close')"
                  type="button"
                  aria-label="close lightbox">
            <span class="modal-button__label">Close lightbox</span>
          </button>
          <button class="btn modal-preview-button"
                  @click="plusSlides(-1)"
                  type="button"
                  aria-label="preview lightbox">
            <span class="modal-button__label">Preview picture</span>
          </button>
          <button class="btn modal-next-button"
                  @click="plusSlides(1)"
                  type="button"
                  aria-label="next lightbox">
            <span class="modal-button__label">Next picture</span>
          </button>
          <img v-for="(image, index) in pageContent" 
              :src="image" alt="" 
              class="modal-img"
              ref="img">
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
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
      this.closeModal()
    })
  },
  created () {
    this.arrowSlide()
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
    },
    closeModal () {
      document.addEventListener('keydown', evt => {
        if (evt.keyCode === 27) {
          this.$emit('close')
        }
      }, false)
    },
    arrowSlide () {
      document.addEventListener('keydown', evt => {
        if (evt.keyCode === 37) {
          console.log('keypresed')
          this.plusSlides(-1)
        } else if (evt.keyCode === 39) {
          console.log('keypresed')
          this.plusSlides(1)
        }
      }, false)
    }
  },
  beforeDestroy () {
    document.removeEventListener('keydown', this.arrowSlide)
  }
}
</script>

<style lang="scss" scoped>

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  position: relative;
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

.modal-img {
  width: 100%;
  max-width: 100%;
  border: 1px solid #919191;
  overflow: visible;
  animation: fade 1s;
  display: none;
}

.show {
  display: block;
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

.modal-close-button {
  top: -82px;
  right: -75px;
  width: 100px;
  height: 100px;
  background: url(../../static/images/zamknij.png) no-repeat center center;
  &::before {
    content: '';
    width: 32px;
    height: 32px;
    position: absolute;
    top: 0px;
    right: -15px;
    background-color: #FFF;
    border-radius: 50%;
    box-shadow: 
      -30px -25px 0px #FFF;
  }
  &::after {
    content: '';
    width: 17px;
    height: 17px;
    position: absolute;
    top: -41px;
    right: -3px;
    background-color: #FFF;
    border-radius: 50%;
  }
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

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

@media screen and (min-height: 1000px) {
  .modal-container {
    width: 80%;
  }
}

@keyframes fade {
  from {opacity: 0.4}
  to {opacity: 1}
}
</style>
