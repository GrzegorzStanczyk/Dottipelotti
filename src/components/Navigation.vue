<template>  
    <nav role="navigation" :class="{ 'rotate': !rotateStyle }">
      <router-link class="window home" to="/" exact >
        <div class="door--left"></div>
        <div class="door--right"></div>
        <span>{{navTitle ? 'dom' : 'home'}}</span>
      </router-link>
      <router-link class="window mision" to="/misja">
        <div class="door--left"></div>
        <div class="door--right"></div>  
        <span>{{navTitle ? 'misja' : 'mission'}}</span>
      </router-link>
      <router-link class="window program" to="/program">
        <div class="door--left"></div>
        <div class="door--right"></div>  
        <span>program</span>
      </router-link>
      <router-link class="window on-the-plate" to="/na-talerzu">
        <div class="door--left"></div>
        <div class="door--right"></div>  
        <span>{{navTitle ? 'na talerzu' : 'on the plate'}}</span>
      </router-link>
      <router-link class="window gallery" to="/galeria">
        <div class="door--left"></div>
        <div class="door--right"></div>  
        <span>{{navTitle ? 'galeria' : 'gallery'}}</span>
      </router-link>
      <router-link class="window staff" to="/kadra">
        <div class="door--left"></div>
        <div class="door--right"></div>  
        <span>{{navTitle ? 'kadra' : 'our staff'}}</span>
      </router-link>
      <router-link class="window prices" to="/cennik">
        <div class="door--left"></div>
        <div class="door--right"></div>  
        <span>{{navTitle ? 'cennik' : 'prices'}}</span>
      </router-link>
      <router-link class="contact" to="/kontakt"><span>{{navTitle ? 'kontakt' : 'contact'}}</span></router-link>
    </nav>    
</template>

<script>
export default {
  name: 'Navigation',
  props: { siteContent: Object },
  data () {
    return {
      title: null
    }
  },
  computed: {
    navTitle () {
      this.title = this.siteContent.lang === 'pl'
      return this.title
    },
    rotateStyle () {
      return (navigator.userAgent.indexOf('Edge') > -1 || navigator.userAgent.indexOf('Trident/7.0') > -1)
    }
  }
}
</script>

<style scoped lang="scss">
nav {
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: space-around;
  background: url(../../static/images/menu3.png) no-repeat center bottom;
  font-family: "typoupright", cursive;
  font-size: 24px;
  height: 131px;
  min-width: 1024px;
  color: #726a58;
  padding: 0 40px;
}

.window {
  position: relative;  
  top: 3px;
  height: 74px;
  width: 76px;
  perspective: 250px;
  // width: 104px;
  // height: 108px;
  // transition: background .2s ease-in; 
  transition: all .4s ease;
  &:hover {
    color: #000000;
    box-shadow: 0px 0px 15px 1px rgba(0,0,0,0.2);
  }
  &:hover .door--right {        
    transform: rotateY(130deg);
    box-shadow: -15px 5px 30px 5px rgba(0,0,0,0.3);
  }
  &:hover .door--left{
    transform: rotateY(-130deg);
    box-shadow: 15px 5px 30px 5px rgba(0,0,0,0.3);
  }
  & > span {
    position: absolute;
    width: 100%;
    bottom: -30px;
    text-align: center;
  }
}

a {
  color: inherit;
  text-decoration: none;
}

.rotate .door--left {
  transform: translate(0, 0) rotate(1deg);
}

.rotate .door--right {
    transform: translate(0, 0) rotate(-1deg);
}

.door--left {
    position: absolute;
    z-index: 100;
    top: 0;
    left: -1px;
    width: 50%;
    height: 100%;
    box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.3);
    background: linear-gradient(to right, rgba(226,226,226,1) 0%, rgba(252,255,240,1) 36%, rgba(252,255,240,1) 100%);    
    transform-origin: 0 50%;
    transition: all .5s ease;
    &::before {
      content: '';
      position: absolute;
      right: -7px;
      width: 14px;
      height: 14px;
      border-radius: 50%;
    }
}

.window:nth-child(1) .door--left::before {
    top: 35%;
    background-color: rgb(254,116,175);
}
.window:nth-child(2) .door--left::before {
    top: 50%;
    background-color: rgb(0,209,203);
}
.window:nth-child(3) .door--left::before {
    top: 45%;
    background-color: rgb(255,225,0);
}
.window:nth-child(4) .door--left::before {
    top: 30%;
    background-color: rgb(251,182,58);
}
.window:nth-child(5) .door--left::before {
    top: 55%;
    background-color: rgb(194,225,123);
}
.window:nth-child(6) .door--left::before {
    top: 35%;
    background-color: rgb(255,70,153);
}
.window:nth-child(7) .door--left::before {
    top: 40%;
    background-color: rgb(247,225,65);
}

.door--right {
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.3);
    background: linear-gradient(to left, rgba(226,226,226,1) 0%, rgba(252,255,240,1) 36%, rgba(252,255,240,1) 100%);
    transform-origin: 100% 0%;
    transition: all .4s ease;
}

.router-link-active{
  color: #000000;
}

.router-link-active .door--right {
    transform: rotateY(130deg);
    box-shadow: -15px 5px 30px 5px rgba(0,0,0,0.3);
}

.router-link-active .door--left{
    transform: rotateY(-130deg);
    box-shadow: 15px 5px 30px 5px rgba(0,0,0,0.3);
}

.home {
  background: url(../../static/images/home-akt.png) no-repeat center;
}

.mision {
  background: url(../../static/images/misja-akt.png) no-repeat 50% 54%;
}

.program {
  background: url(../../static/images/program-akt.png) no-repeat center;
}

.on-the-plate {
  background: url(../../static/images/na-talerzu-akt.png) no-repeat 50% 57%;
}

.gallery {
  background: url(../../static/images/galeria-akt.png) no-repeat 50% 56%;
}

.staff {
  background: url(../../static/images/kadra-akt.png) no-repeat 50% 56%;  
}

.prices {
  background: url(../../static/images/cennik-akt.png) no-repeat 50% 56%;
}

.contact.router-link-active,
.contact:hover {
  background: url(../../static/images/kontakt-akt.png) no-repeat center 0;
  color: #ffffff;
}


.contact {
  position: absolute;
  top: -255px;
  right: 90px;
  text-transform: lowercase;    
  background: url(../../static/images/kontakt.png) no-repeat;
  width: 174px;
  height: 115px;
  color: #726a58;  
  font-family: "typoupright", cursive;
  font-size: 22px;
}

.contact > span {
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translate(-50%, -50%);
}

</style>
