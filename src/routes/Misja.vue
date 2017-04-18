<template>
  <section class="blog-container">
    <aside v-if="!isMobile" class="aside">
      <KontaktIn :siteContent="siteContent"/>
    </aside>
    <article class="blog-container-in">
      <header class="center">
        <h2 class="title">{{blogTitle}}
          <span class="o1"></span>
          <span class="o2"></span>
          <span class="o3"></span>
        </h2>
      </header>
      <div class="border">
        <div class="blog-container-in-article">
          <div v-if="siteContent.lang === 'pl'" tabindex="0" v-html="pageContent.pl" />
          <div v-else tabindex="0" v-html="pageContent.en" />
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
  data () {
    return {
      title: null
    }
  },
  props: { siteContent: Object, isMobile: Boolean },
  computed: {
    pageContent () {
      return {
        pl: this.siteContent.pages.pl.find(page => page.slug === 'misja_pl').content.rendered,
        en: this.siteContent.pages.en.find(page => page.slug === 'misja_en').content.rendered
      }
    },
    blogTitle () {
      this.title = this.siteContent.lang === 'pl' ? 'nasza misja' : 'our mission'
      return this.title
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
