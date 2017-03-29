<template>
  <section class="blog-container">
    <aside class="aside">
      <KontaktIn :siteContent="siteContent"/>
    </aside>
    <article class="blog-container-in">
      <header class="center">
        <h2 class="title">nasz program
          <span class="o1"></span>
          <span class="o2"></span>
        </h2>
      </header>
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
  name: 'Program',
  components: { KontaktIn },
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

<style lang="scss" scoped>
.aside::after {
  background: url(../../static/images/program.jpg) no-repeat center top;
}

.title {
  background: #00d1cb;
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
