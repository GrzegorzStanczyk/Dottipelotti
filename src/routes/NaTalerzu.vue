<template>
  <section class="blog-container">
    <aside>
      <KontaktIn :siteContent="siteContent"/>
    </aside>
    <article class="blog-container-in">
      <h2 class="title">na talerzu
        <span class="o1"></span>
        <span class="o2"></span>
      </h2> 
      <div class="border">
        <div class="blog-container-in-article">
          <div tabindex="0" v-html="pageContent" class="content" />        
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import KontaktIn from '@/components/Kontakt_in'
export default {
  name: 'NaTalerzu',
  components: { KontaktIn },
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

<style lang="scss" scoped>
aside::after {
  background: url(../../static/images/na-talerzu.jpg) no-repeat center top;
}

.title {
  background-color: #fbb63a;
}

.o1 {
  left: -19px;
  top: -19px;
}

.o2 {
  right: -15px;
  top: 36px;
}

</style>
