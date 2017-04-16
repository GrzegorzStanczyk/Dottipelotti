<template>
  <section class="blog-container">
    <aside v-if="!isMobile" class="aside">
      <KontaktIn :siteContent="siteContent"/>
    </aside>
    <article class="blog-container-in">
      <header class="center">
        <h2 class="title">{{title}}
          <span class="o1"></span>
          <span class="o2"></span>
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
  name: 'Program',
  components: { KontaktIn },
  data () {
    return {
      title: null
    }
  },
  props: { siteContent: Object, isMobile: Boolean },
  computed: {
    pageContent () {
      this.title = this.siteContent.lang === 'pl' ? 'nasz program' : 'our program'
      return {
        pl: this.siteContent.pages.pl.find(page => page.slug === 'program_pl').content.rendered,
        en: this.siteContent.pages.en.find(page => page.slug === 'program_en').content.rendered
      }
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
