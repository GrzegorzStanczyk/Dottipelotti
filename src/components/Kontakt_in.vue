<template>
  <div v-html="pageContent" class="content aside-contact" />
</template>

<script>
export default {
  name: 'KontaktIn',
  props: { siteContent: Object },
  computed: {
    pageContent () {
      return this.siteContent.pages.find(page => page.slug === 'kontakt_in').content.rendered
    }
  },
  mounted () {
    console.log('Kontakt_in siteContent', this.siteContent)
  }
}
</script>

<style lang="scss">
  .aside-contact {
    font-size: 14px;
    position: relative;
    margin-left: 130px;
    &::before {
      content: '';
      display: block;
      position: absolute;
      left: -65px;
      top: 50%;
      transform: translate(-50%, -50%);
      background: url(../../static/images/kontakt-ikona.png) no-repeat;
      width: 98px;
      height: 98px;
    }
  }
  a {
    text-decoration: none;
    color: #ff4699;
  }
  .color_1 {
    color: #ff4699;
  }

  .color_2 {
    color: #fbb63a;
  }

  .color_3 {
    color: #b3dc5b;
  }

  .color_4 {
    color: #00d1cb;
  }

</style>
