<template>
  <div v-html="pageContent" class="content" />
</template>

<script>
export default {
  name: 'Kadra',
  props: { siteContent: Object },
  computed: {
    pageContent () {
      return this.siteContent.pages.find(page => page.slug === 'kadra').content.rendered
    }
  },
  mounted () {
    console.log('Kadra siteContent', this.siteContent)
  }
}
</script>
