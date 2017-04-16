<template>
	<div class="languages-container" v-bind:class="active">
		<a href="/"
				v-on:click.stop.prevent="chooseSiteLang('pl')"
        v-on:click="makeActive('pl')"
				title="Wybierz polski jezyk" 
				aria-label="Wybierz polski jezyk"
				lang="pl" 
				hreflang="Polish" 
				class="pl">pl
		</a>
		<a href="/" 
				v-on:click.stop.prevent="chooseSiteLang('en')"
        v-on:click="makeActive('en')"
				title="Choose english language"
				aria-label="Choose english language"
				lang="en" 
				hreflang="English" 
				class="en">en
		</a>
	</div>
</template>

<script>
export default {
  name: 'language',
  data () {
    return {
      active: 'pl'
    }
  },
  methods: {
    chooseSiteLang (lang) {
      this.$emit('setSiteLang', lang)
    },
    makeActive: function (item) {
      this.active = item
    }
  }
}
</script>

<style scoped>
	.languages-container {
		position: absolute;
		top: 20px;
		right: 75%;
	}

a {
	display: flex;
  justify-content: center;
  align-items: center;
	position: absolute;
  text-decoration: none;
	border-radius: 50%;
	background-color: #FBFFEF;
  width: 30px;
  height: 30px;
  color: #c7c3bc;
}

.languages-container.pl .pl,
.languages-container.en .en {
	color: #FBFFEF;
	background-color: #00D1CB;
}

a:hover {
  color: #726a58;
}

a:nth-child(1) {
	top: 0px;
  left: -22px;
}

a:nth-child(2) {
  top: -10px;
  left: 16px;
}

@media screen and (min-width: 1024px) {
	.languages-container {
		font-family: "typoupright", cursive;
		position: absolute;
		top: 100px;
		right: 80px;
		font-size: 19px;
	}
}
</style>
