<template>
	<button class="button" v-on="$listeners" v-bind="$props">
		<slot></slot>
	</button>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Button extends Vue {}
</script>

<style lang="scss">
.button {
	cursor: pointer;
	border: none;
	background: none;
	outline: none;
	background-color: $primary-color;
	color: white;
	font-size: 1em;
	font-weight: bold;
	border-radius: 5px;
	padding: 15px;
	transition: 0.2s;
	&:hover {
		filter: brightness(1.1);
	}
	&:active {
		filter: brightness(0.9);
	}
}
</style>
