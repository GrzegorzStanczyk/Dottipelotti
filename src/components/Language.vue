<template>
	<div class="languages-container">
		<a href="/" 
				title="Wybierz polski jezyk" 
				aria-label="Wybierz polski jezyk"
				lang="pl" 
				hreflang="Polish" 
				class="langPL active">pl
		</a>
		<a href="/" 
				title="Choose english language"
				aria-label="Choose english language"
				lang="en" 
				hreflang="English" 
				class="langEN">en
		</a>
	</div>
</template>

<style scoped>
.languages-container {
  font-family: "typoupright", cursive;
	top: 100px;
  right: 80px;
	position: absolute;
	    font-size: 19px;
}

a {
	position: absolute;
  text-decoration: none;
	background: url(../../static/images/jezyk-bg.png) no-repeat;
  width: 28px;
  height: 28px;
  color: #c7c3bc;
}

a.active {
  color: #726a58;
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
</style>
