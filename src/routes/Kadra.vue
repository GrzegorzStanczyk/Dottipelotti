<template>
  <section class="blog-container">
    <aside class="aside">
      <KontaktIn :siteContent="siteContent"/>
    </aside>
    <article class="blog-container-in">
      <header class="center">
        <h2 class="title">{{title}}
          <span class="o1"></span>
          <span class="o2"></span>
          <span class="o3"></span>
        </h2> 
      </header>
      <div class="border">
        <div class="blog-container-in-article">
          <div v-if="siteContent.lang === 'pl'" tabindex="0" v-html="pageContent.pl" />
          <div v-else tabindex="0" v-html="pageContent.en"/>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import KontaktIn from '@/components/Kontakt_in'
export default {
  name: 'Kadra',
  components: { KontaktIn },
  data () {
    return {
      title: null
    }
  },
  props: { siteContent: Object },
  computed: {
    pageContent () {
      this.title = this.siteContent.lang === 'pl' ? 'kadra' : 'personnel'
      return {
        pl: this.siteContent.pages.pl.find(page => page.slug === 'kadra_pl').content.rendered,
        en: this.siteContent.pages.en.find(page => page.slug === 'kadra_en').content.rendered
      }
    }
  },
  mounted () {
    console.log('Kadra siteContent', this.siteContent)
  }
}
</script>

<style lang="scss" scoped>
.aside::after {
  background: url(../../static/images/kadra.jpg) no-repeat center top;
}

.title {
  background-color: #ffe100;
}

.o2 {
  right: -15px;
  top: 36px;
}

.o3 {
  right: 35px;
  top: -11px;
}

</style>
