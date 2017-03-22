<template>
  <div v-html="pageContent" class="content" />
</template>

<script>
export default {
  name: 'NaTalerzu',
  props: { siteContent: Object },
  computed: {
    pageContent () {
      return this.siteContent.pages.find(page => page.slug === 'na-talerzu').content.rendered
    }
  },
  mounted () {
    console.log('NaTalerzu siteContent', this.siteContent)
  }
}
</script>
