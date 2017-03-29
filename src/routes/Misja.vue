<template>
  <section class="blog-container">
    <aside class="aside">
      <KontaktIn :siteContent="siteContent"/>
    </aside>
    <article class="blog-container-in">
      <header class="center">
        <h2 class="title">nasza misja
          <span class="o1"></span>
          <span class="o2"></span>
          <span class="o3"></span>
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
  name: 'Misja',
  components: { KontaktIn },
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

<style scoped lang="scss">
.aside::after {
  background: url(../../static/images/misja.jpg) no-repeat center top;
}

.title {
  background: #ff4699;  
}

.o3 {
  right: 20%;
  bottom: -12px;
}
</style>
