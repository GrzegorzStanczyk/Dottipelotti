<template>
  <section class="blog-container">
    <aside class="aside">
      <KontaktIn :siteContent="siteContent"/>
    </aside>
    <article class="blog-container-in">
      <header class="center">
        <h2 class="title">cennik
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
  name: 'Cennik',
  components: { KontaktIn },
  props: { siteContent: Object },
  computed: {
    pageContent () {
      return this.siteContent.pages.find(page => page.slug === 'cennik').content.rendered
    }
  },
  mounted () {
    console.log('Cennik siteContent', this.siteContent)
  }
}
</script>

<style lang="scss" scoped>
.aside::after {
  background: url(../../static/images/cennik.jpg) no-repeat center top;
}

.title {
  background-color: #ff4699;
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
