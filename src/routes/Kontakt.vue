<template>
  <div v-html="pageContent" class="content" />
</template>

<script>
export default {
  name: 'Kontakt',
  props: { siteContent: Object },
  computed: {
    pageContent () {
      return this.siteContent.pages.find(page => page.slug === 'kontakt').content.rendered
    }
  },
  mounted () {
    console.log('Kontakt siteContent', this.siteContent)
  }
}
</script>
