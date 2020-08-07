<template>
	<input class="passwordinput" v-on="$listeners" v-bind="$props" type="password" />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class PasswordInput extends Vue {}
</script>

<style lang="scss" scoped>
.passwordinput {
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
