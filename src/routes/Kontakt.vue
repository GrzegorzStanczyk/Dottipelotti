<template>
  <section class="blog-container">
    <aside v-if="!isMobile" class="aside">
      <Zapisy :siteContent="siteContent"/>
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
          <KontaktIn :siteContent="siteContent"/>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import KontaktIn from '@/components/Kontakt_in'
import Zapisy from '@/components/Zapisy'
export default {
  name: 'Kontakt',
  components: { KontaktIn, Zapisy },
  data () {
    return {
      title: null
    }
  },
  props: { siteContent: Object, isMobile: Boolean },
  computed: {
    pageContent () {
      return {
        pl: this.siteContent.pages.pl.find(page => page.slug === 'kontakt_pl').content.rendered,
        en: this.siteContent.pages.en.find(page => page.slug === 'kontakt_en').content.rendered
      }
    },
    blogTitle () {
      this.title = this.siteContent.lang === 'pl' ? 'kontakt' : 'contact'
      return this.title
    }
  },
  mounted () {
    console.log('Kontakt siteContent', this.siteContent)
  }
}
</script>

<style lang="scss" scoped>
.aside-contact {
  margin: 0;
  text-align: center;  
  &::before {
    display: none;
  }
}
.aside::after {
  background: url(../../static/images/kontakt.jpg) no-repeat center top;
}

.title {
  background-color: #00d1cb;
}

.o2 {
  right: -15px;
  top: -15px;
}

.o3 {
  left: -12px;
  top: -12px;
}

</style>
