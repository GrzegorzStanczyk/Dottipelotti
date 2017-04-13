<template>  
  <main class="blog-container">
    <aside class="aside">
      <KontaktIn :siteContent="siteContent"/>
    </aside>
    <article class="blog-container-in">
      <header class="center">
        <h2 class="title home">Witajcie w Dotti Pelotti
          <span class="o1"></span>
          <span class="o2"></span>
          <span class="o3"></span>
        </h2>
      </header>  
      <div class="border">
        <div class="blog-container-in-article">
          <img src="../../static/images/aktualnosci.jpg" alt="Aktualności">
          <div tabindex="0" v-html="pageContent.pl" class="content" />
          <a href="/aktualnosci">archiwum aktualności</a>
        </div> 
      </div>
    </article>
  </main>
</template>

<script>
import KontaktIn from '@/components/Kontakt_in'
export default {
  name: 'Home',
  components: { KontaktIn },
  props: { siteContent: Object },
  computed: {
    pageContent () {
      return {
        pl: this.siteContent.pages.pl.find(page => page.slug === 'home_pl').content.rendered,
        en: this.siteContent.pages.en.find(page => page.slug === 'home_en').content.rendered
      }
    }
  },
  mounted () {
    console.log('Home siteContent', this.siteContent)
  }
}
</script>

<style lang="scss">

.center {
  text-align: center;
}

.aside {
  display: none;
}

.blog-container {  
  display: flex;
  position: relative;
  justify-content: space-around;
  background-color: #FCFFF0;
  padding-bottom: 10px;
}

.blog-container-in {
  max-width: 450px;
}

.blog-container-in-article {
  font-size: 15px;
  margin: 8px;
  padding: 8px;
  background: url(../../static/images/aktualnosci-bg.jpg) repeat;
  & img {
    display: block;
    margin: 0 auto;
  }
}

.border {
  border: 2px dotted #dddac8; 
}

.title {
  text-align: center;
  position: relative;  
  transform: rotate(-2deg);
  font-weight: normal;
  display: inline-block;
  font-size: 40px;
  margin: 25px auto;
  min-width: 220px;
  &.home {
    background: #00d1cb;
  }
  &::before {    
    content: "";
    display: block;
    position: absolute;
    top: -20px;
    left: -50px;
    background: url(../../static/images/header-bg.png) no-repeat;
    width: 111px;
    height: 15px;
  }
}

.title .o1 {
  position: absolute;
  width: 39px;
  height: 39px;
  display: block;
  background: url(../../static/images/o1.png) no-repeat center center;
  left: -19px;
  bottom: -19px;
}

.title .o2 {
  position: absolute;
  width: 30px;
  height: 30px;
  display: block;
  background: url(../../static/images/o2.png) no-repeat center center;
  right: -15px;
  top: -15px;
}

.title .o3 {
  position: absolute;
  width: 24px;
  height: 24px;
  display: block;
  background: url(../../static/images/o3.png) no-repeat center center;
  right: -12px;
  bottom: -12px;
}

@media screen and (min-width: 1024px) {
  .blog-container {
    max-width: 1024px;
    background: url(../../static/images/content3.png) no-repeat center top;
    background-size: 100% 100%;
    &::before {
      content: '';
      position: absolute;
      left: -160px;
      bottom: 0;
      z-index: -10;
      width: 224px;
      height: 285px;
      background: url(../../static/images/tlo4.png) no-repeat;
    }
    &::after {
      content: '';
      position: absolute;
      right: -160px;
      top: 0;
      z-index: -10;
      background: url(../../static/images/tlo5.png) no-repeat;
      width: 234px;
      height: 284px;
    }  
  }
  .title {
    padding-left: 35px;
    padding-right: 35px;
  }
  .aside {
    display: block;
    height: 100%;
    &::after {
      content: '';
      display: block;
      background: url(../../static/images/home.jpg) no-repeat center top;
      width: 481px;
      height: 238px;
      margin-left: 10px;
    }
  }
}
</style>
