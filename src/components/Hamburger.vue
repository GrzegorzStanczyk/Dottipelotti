<template> 
	<div class="mobile-navigation">
		<div class="mask"
          v-bind:class="{ shadow: seen }"
          v-on:click="seen = !seen"/>
		<button class="nav-toggler"
          v-on:click="seen = !seen"
					type="button"
					aria-label="toggle navigation" 
					aria-controls="navigation" 
					aria-expand="false">
			<span class="nav-toggler__icon" aria-hidden="true"></span>
      <span class="nav-toggler__icon" aria-hidden="true"></span>
			<span class="nav-toggler__label">Open/close menu</span>  
		</button>
		<nav class="nav-bar"
            v-bind:class="{ nav__open: seen }"
						role="navigation" 
						aria-label="Main Menu">
        <ul class="nav-links">
          <li v-for="anchor in anchors"><a v-on:click="seen = !seen" :href="`#${anchor.link}`">{{ anchor.name }}</a></li>
        </ul>
		</nav>
	</div>	
</template>

<script>
export default {
  name: 'Hamburger',
  data () {
    return {
      seen: false,
      anchors: [
        { name: 'Dom', link: '' },
        { name: 'Misja', link: 'misja' },
        { name: 'Program', link: 'program' },
        { name: 'Na talerzu', link: 'na-talerzu' },
        { name: 'Galeria', link: 'galeria' },
        { name: 'Kadra', link: 'kadra' },
        { name: 'Cennik', link: 'cennik' },
        { name: 'Kontakt', link: 'kontakt' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.mask {  
  position: fixed;
  top: 0;
  right: 0;
  border-radius: 0 0 0 100%;
  height: 0;
  width: 0;
  z-index: 15;
  background: rgba(255,225,0, 0.2);
  transition: all 1s ease-out;
  visibility: hidden;
  opacity: 0;
}

.shadow {
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  visibility: visible;
  opacity: 1;
  margin: 0;
  padding: 0;
}

.nav-toggler {
  padding: 0;
  margin: 0;
  box-sizing: content-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  z-index: 5;
  top: -2%;
  right: -2%;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background-color: rgb(255,225,0);
  border: 0;
  cursor: pointer;
  transition: all .3s ease;
  box-shadow: 2px 2px 2px 2px rgba(0,0,0, .2);
  &:focus {
    outline: 0;
    border: 15px dotted red;
    transform: rotate(30deg);
    &::before {
        display: none;
    }
  }
  &:not(:focus) {
    border: 0px dotted red;
  }
  &::before {
    content: '';
    display: block;
    position: absolute;
    left: -20px;
    top: 25px;
    background-color: rgb(255,225,0);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    box-shadow: 
      2px 2px 2px rgba(0,0,0, .2),
      -5px 25px 0 rgb(255,225,0),
      -3px 27px 2px rgba(0,0,0, .2),     
      5px 50px 0 rgb(255,225,0),
      7px 52px 2px rgba(0,0,0, .2),  
      20px 70px 0 rgb(255,225,0),
      22px 72px 2px rgba(0,0,0, .2),  
      45px 85px 0 rgb(255,225,0),
      47px 87px 2px rgba(0,0,0, .2),  
      70px 90px 0 rgb(255,225,0),
      72px 92px 2px rgba(0,0,0, .2),  
      100px 80px 0 rgb(255,225,0),
      102px 82px 2px rgba(0,0,0, .2);
  }    
}

.nav-toggler__icon:first-child {    
  display: block;
  margin-top: 20px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #00D1CB;
}
.nav-toggler__icon:nth-child(2) {  
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #00D1CB;
}

.nav-toggler__label, .nav__label {
	border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
}

.nav-bar {
  font-family: "typoupright", cursive;  
  opacity:0;
  visibility: hidden;
  position: fixed;   
  .nav-links{    
    li {
      position: fixed;
      top: 0;
      left: 100%;
      transition: all 1s ease-in;      
      a {
        text-decoration: underline;
        color: inherit;
      }
    }
    li:first-child {
      color: #00d1cb;
    }
    li:nth-child(2){
      color: #ff4699;
    }
    li:nth-child(3){
      color: #00d1cb;
    }
    li:nth-child(4){
      color: #fbb63a;
    }
    li:nth-child(5){
      color: #b3dc5b;
    }
    li:nth-child(6){
      color: #ffe100;
    }
    li:nth-child(7){
      color: #ff4699;
    }
    li:nth-child(8){
      color: #00d1cb;
    }
  } 
} 

.nav__open {
  visibility: visible;
  opacity:1;
  font-size: 36px;
  z-index: 1000;
  .nav-links{      
    li:first-child {
      top: 1%;
      left: 45%;
    }
    li:nth-child(2){
      top: 11%;
      left: 44%;
    }
    li:nth-child(3){
      top: 21%;
      left: 45%;
    }
    li:nth-child(4){
      top: 31%;
      left: 46%;
    }
    li:nth-child(5){
      top: 41%;
      left: 48%;
    }
    li:nth-child(6){
      top: 51%;
      left: 51%;
    }
    li:nth-child(7){
      top: 61%;
      left: 56%;
    }
    li:nth-child(8){
      top: 71%;
      left: 62%;
    }
  } 
}

</style>
