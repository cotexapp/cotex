<template>
	<input class="textinput" v-on="$listeners" v-bind="$props" type="text" />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class TextInput extends Vue {}
</script>

<style lang="scss" scoped>
.textinput {
	width: 100%;

	border: none;
	background: none;
	outline: none;

	background-color: $nofocus-color;

	font-size: 1em;

	border-radius: 5px;
	padding: 15px;
	transition: 0.2s;
}
</style>
