<template>
  <div v-html="pageContent" class="content" />
</template>

<script>
export default {
  name: 'Program',
  props: { siteContent: Object },
  computed: {
    pageContent () {
      return this.siteContent.pages.find(page => page.slug === 'program').content.rendered
    }
  },
  mounted () {
    console.log('Program siteContent', this.siteContent)
  }
}
</script>
