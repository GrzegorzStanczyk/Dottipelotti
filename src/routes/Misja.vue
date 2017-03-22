<template>
  <div v-html="pageContent" class="content" />
</template>

<script>
export default {
  name: 'Misja',
  props: { siteContent: Object },
  computed: {
    pageContent () {
      return this.siteContent.pages.find(page => page.slug === 'misja').content.rendered
    }
  },
  mounted () {
    console.log('Misja siteContent', this.siteContent)
  }
}
</script>
