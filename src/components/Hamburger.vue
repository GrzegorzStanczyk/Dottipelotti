<template> 
	<div class="row">
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
				<li><a v-on:click="seen = !seen" href="#">Dom</a></li>
				<li><a v-on:click="seen = !seen" href="#misja">Misja</a></li>
				<li><a v-on:click="seen = !seen" href="#program">Program</a></li>
				<li><a v-on:click="seen = !seen" href="#na-talerzu">Na talerzu</a></li>
				<li><a v-on:click="seen = !seen" href="#galeria">Galeria</a></li>
				<li><a v-on:click="seen = !seen" href="#kadra">Kadra</a></li>
				<li><a v-on:click="seen = !seen" href="#cennik">Cennik</a></li>
				<li><a v-on:click="seen = !seen" href="#kontakt">Kontakt</a></li>
			</ul>
		</nav>
	</div>	
</template>

<script>
export default {
  name: 'Hamburger',
  data () {
    return {
      seen: false
    }
  },
  methods: {
    toggleClass () {
      console.log('jest')
    }
  }
}
</script>

<style lang="scss">

.mask {
  position: fixed;
  top: 0;
  right: 0;
  border-radius: 0 0 0 100%;
  height: 0;
  width: 0;
  z-index: 15;
  background: rgba(255,225,0, 0.2);
  transition: all 1s ease;
}

.shadow {
  background: rgba(255,225,0, 0.8);
  width: 100%;
  height: 100%;
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
      -5px 25px 0 rgb(255,225,0),
      5px 50px 0 rgb(255,225,0),
      20px 70px 0 rgb(255,225,0),
      45px 85px 0 rgb(255,225,0),
      70px 90px 0 rgb(255,225,0),
      100px 80px 0 rgb(255,225,0);        
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
  display: none;  
  a {
    text-decoration: none;
    color: inherit;
  } 
} 

.nav__open {
  font-family: "typoupright", cursive;
  font-size: 32px;
  color: #FCFFF0;
  display: block;
  position: fixed;
  width: 100%;
  z-index: 1000;  
  .nav-links{
    li {
      position: fixed;      
    }
    li:first-child {
      top: 1%;
      left: 45%;
      color: #00d1cb;
    }
    li:nth-child(2){
      top: 6%;
      left: 48%;
      color: #ff4699;
    }
    li:nth-child(3){
      top: 11%;
      left: 51%;
      color: #00d1cb;
    }
    li:nth-child(4){
      top: 16%;
      left: 54%;
      color: #fbb63a;
    }
    li:nth-child(5){
      top: 21%;
      left: 57%;
      color: #b3dc5b;
    }
    li:nth-child(6){
      top: 26%;
      left: 60%;
      color: #ffe100;
    }
    li:nth-child(7){
      top: 31%;
      left: 63%;
      color: #ff4699;
    }
    li:nth-child(8){
      top: 36%;
      left: 67%;
      color: #00d1cb;
    }
  }
}

</style>
