<template>
  <transition name="modal">
    <div class="modal-mask" >
      <div class="modal-wrapper">
        <div class="modal-container" @click="currentImage(imageIndex)">
          
          <div class="modal-header">
            <slot name="header">
              <button class="btn modal-close-button"
                      @click="$emit('close')"
                      type="button"
                      aria-label="close lightbox">
                <span class="modal-button__label">Close lightbox</span>
              </button>
              <button class="btn modal-preview-button"
                      @click="$emit('close')"
                      type="button"
                      aria-label="close lightbox">
                <span class="modal-button__label">Preview picture</span>
              </button>
              <button class="btn modal-next-button"
                      @click="$emit('close')"
                      type="button"
                      aria-label="close lightbox">
                <span class="modal-button__label">Next picture</span>
              </button>
            </slot>
          </div>
          <img :src="this.siteContent.media[imageIndex].media_details.sizes.full.source_url" @click="imageIndex" alt="" class="modal-img">
          
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  props: { siteContent: Object, isMobile: Boolean, imageIndex: Number },
  data () {
    return {

    }
  },
  computed: {
    pageContent () {
      return this.siteContent.media.map(media => media.media_details.sizes.full.source_url)
    }
  },
  methods: {
    currentImage (index) {
      console.log(index)
    }
  },
  mounted () {
    console.log('Galeria siteContent', this.siteContent.media)
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
  width: 50%;
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
}

.btn {
  position: absolute;  
  border-radius: 50%;
  border: 0;
  cursor: pointer;
  &:focus{
    outline: none;
  }
}

.modal-preview-button {
  width: 71px;
  height: 71px;
  top: 50%;
  left: -60px;
  background: url(../../static/images/w-lewo.png) no-repeat center center;
  transform: translateY(-50%)
}

.modal-next-button {
  width: 71px;
  height: 71px;
  top: 50%;
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
</style>
