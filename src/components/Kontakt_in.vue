<template>
  <div v-if="siteContent.lang === 'pl'" v-html="pageContent.pl" class="content aside-contact" />
  <div v-else v-html="pageContent.en" class="content aside-contact" />
</template>

<script>
export default {
  name: 'KontaktIn',
  props: { siteContent: Object },
  computed: {
    pageContent () {
      return {
        pl: this.siteContent.pages.pl.find(page => page.slug === 'kontakt_in_pl').content.rendered,
        en: this.siteContent.pages.en.find(page => page.slug === 'kontakt_in_en').content.rendered
      }
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
    &:last-child {
      font-weight: bold;
    }
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
  .facebook {
    color: #3B5998;
    font-weight: bold;
  }
</style>
