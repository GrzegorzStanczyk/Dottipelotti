<template>  
    <nav role="navigation" :class="{ 'rotate': !rotateStyle }">
      <router-link class="home" to="/" exact >
        <div class="window">
          <div class="door--left"></div>
          <div class="door--right"></div>
        </div>        
        <span>{{navTitle ? 'dom' : 'home'}}</span>
      </router-link>
      <router-link class="mision" to="/misja">
        <div class="window">          
          <div class="door--left"></div>
          <div class="door--right"></div>  
        </div>
        <span>{{navTitle ? 'misja' : 'mission'}}</span>
      </router-link>
      <router-link class="program" to="/program">
        <div class="window">
          <div class="door--left"></div>
          <div class="door--right"></div>  
        </div>
        <span>program</span>
      </router-link>
      <router-link class="on-the-plate" to="/na-talerzu">
        <div class="window">
          <div class="door--left"></div>
          <div class="door--right"></div>  
        </div> 
        <span>{{navTitle ? 'na talerzu' : 'on the plate'}}</span>
      </router-link>
      <router-link class="gallery" to="/galeria">
        <div class="window">
          <div class="door--left"></div>
          <div class="door--right"></div>  
        </div>        
        <span>{{navTitle ? 'galeria' : 'gallery'}}</span>
      </router-link>
      <router-link class="staff" to="/kadra">
        <div class="window">
          <div class="door--left"></div>
          <div class="door--right"></div>         
        </div> 
        <span>{{navTitle ? 'kadra' : 'our staff'}}</span>
      </router-link>
      <router-link class="prices" to="/cennik">
        <div class="window">        
          <div class="door--left"></div>
          <div class="door--right"></div>        
        </div>  
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
  perspective: 500px;
  // width: 104px;
  // height: 108px;
  // transition: background .2s ease-in; 
  transition: all .4s ease;
  &:hover {
    box-shadow: 0px 0px 15px 1px rgba(0,0,0,0.2);
  }

}

a {  
  color: inherit;
  text-decoration: none;
  &:hover {
    color: #000000;
    & .door--right {        
      transform: rotateY(130deg);
      box-shadow: -15px 5px 30px 5px rgba(0,0,0,0.3);
    }
    & .door--left{
      transform: rotateY(-130deg);
      box-shadow: 15px 5px 30px 5px rgba(0,0,0,0.3);
    } 
  }
  & span {
    display: block;
    margin-top: 5px;
    text-align: center;
  }
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
    box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.3);
    background: linear-gradient(to right, rgba(226,226,226,1) 0%, rgba(252,255,240,1) 15%, rgba(252,255,240,1) 100%);    
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

a:nth-child(1) .door--left::before {
    top: 35%;
    background-color: rgb(254,116,175);
}
a:nth-child(2) .door--left::before {
    top: 50%;
    background-color: rgb(0,209,203);
}
a:nth-child(3) .door--left::before {
    top: 45%;
    background-color: rgb(255,225,0);
}
a:nth-child(4) .door--left::before {
    top: 30%;
    background-color: rgb(251,182,58);
}
a:nth-child(5) .door--left::before {
    top: 55%;
    background-color: rgb(194,225,123);
}
a:nth-child(6) .door--left::before {
    top: 35%;
    background-color: rgb(255,70,153);
}
a:nth-child(7) .door--left::before {
    top: 40%;
    background-color: rgb(247,225,65);
}

.door--right {
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.3);
    background: linear-gradient(to left, rgba(226,226,226,1) 0%, rgba(252,255,240,1) 15%, rgba(252,255,240,1) 100%);
    transform-origin: 100% 0%;
    transition: all .4s ease;
}

.router-link-active {
  color: #000000;
}

.router-link-active .window{
  box-shadow: 0px 0px 15px 1px rgba(0,0,0,0.2);  
}

.router-link-active .door--right {
    transform: rotateY(130deg);
    box-shadow: -15px 5px 30px 5px rgba(0,0,0,0.3);
}

.router-link-active .door--left{
    transform: rotateY(-130deg);
    box-shadow: 15px 5px 30px 5px rgba(0,0,0,0.3);
}

.home .window {
  background: url(../../static/images/home-akt.png) no-repeat center;
}

.mision .window {
  background: url(../../static/images/misja-akt.png) no-repeat 50% 54%;
}

.program .window {
  background: url(../../static/images/program-akt.png) no-repeat center;
}

.on-the-plate .window {
  background: url(../../static/images/na-talerzu-akt.png) no-repeat 50% 57%;
}

.gallery .window {
  background: url(../../static/images/galeria-akt.png) no-repeat 50% 56%;
}

.staff .window {
  background: url(../../static/images/kadra-akt.png) no-repeat 50% 56%;  
}

.prices .window {
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
