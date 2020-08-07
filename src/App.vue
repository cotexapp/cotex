<template>
	<div id="app">
		<router-view />
	</div>
</template>

<style lang="scss">
@import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css);
* {
	margin: 0;
	padding: 0;

	box-sizing: border-box;
	font-family: "NanumSquare", sans-serif;

	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;

	word-break: keep-all;
}

#app {
	text-align: center;
	color: $text-color;
}
</style>
