<template>
  <div v-html="pageContent" class="content" />
</template>

<script>
export default {
  name: 'Zapisy',
  props: { siteContent: Object },
  computed: {
    pageContent () {
      return this.siteContent.pages.find(page => page.slug === 'zapisy').content.rendered
    }
  },
  mounted () {
    console.log('Zapisy siteContent', this.siteContent)
  }
}
</script>

<style lang="scss" scoped>
.content {  
  font-size: 14px;
  position: relative;
  margin-left: 130px;
  margin-top: 30px;
  &::before {
    content: '';
    display: block;
    position: absolute;
    left: -65px;
    top: 50%;
    transform: translate(-50%, -50%);
    background: url(../../static/images/zapisy-ikona.png) no-repeat;
    width: 98px;
    height: 98px;
  }
}
.color_4 {
  color: #00d1cb;
}
</style>
