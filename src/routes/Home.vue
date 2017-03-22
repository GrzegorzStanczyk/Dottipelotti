<template>
  <div v-html="pageContent" class="content" />
</template>

<script>
export default {
  name: 'Home',
  props: { siteContent: Object },
  computed: {
    pageContent () {
      return this.siteContent.pages.find(page => page.slug === 'home').content.rendered
    }
  },
  mounted () {
    console.log('Home siteContent', this.siteContent)
  }
}
</script>
