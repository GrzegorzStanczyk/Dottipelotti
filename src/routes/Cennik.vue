<template>
  <div v-html="pageContent" class="content" />
</template>

<script>
export default {
  name: 'Cennik',
  props: { siteContent: Object },
  computed: {
    pageContent () {
      return this.siteContent.pages.find(page => page.slug === 'cennik').content.rendered
    }
  },
  mounted () {
    console.log('Cennik siteContent', this.siteContent)
  }
}
</script>
