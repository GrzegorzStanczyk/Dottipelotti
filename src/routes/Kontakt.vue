<template>
  <section class="blog-container">
    <aside>
      <KontaktIn :siteContent="siteContent"/>
    </aside>
    <article class="blog-container-in">
      <h2 class="title">kontakt
        <span class="o1"></span>
        <span class="o2"></span>
        <span class="o3"></span>
      </h2> 
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
export default {
  name: 'Kontakt',
  components: { KontaktIn },
  props: { siteContent: Object },
  computed: {
    pageContent () {
      return this.siteContent.pages.find(page => page.slug === 'kontakt').content.rendered
    }
  },
  mounted () {
    console.log('Kontakt siteContent', this.siteContent)
  }
}
</script>

<style lang="scss" scoped>
aside::after {
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
