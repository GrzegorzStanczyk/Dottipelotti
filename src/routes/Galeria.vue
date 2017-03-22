<template>
  <div v-html="pageContent" class="content" />
</template>

<script>
export default {
  name: 'Galeria',
  props: { siteContent: Object },
  computed: {
    pageContent () {
      return this.siteContent.pages.find(page => page.slug === 'galeria').content.rendered
    }
  },
  mounted () {
    console.log('Galeria siteContent', this.siteContent)
  }
}
</script>
