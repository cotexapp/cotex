<template>
	<div class="login">
		<div class="login_form">
			<h1>로그인</h1>
			<div class="login__label">아이디 &ast;</div>
			<TextInput placeholder="ID"></TextInput>
			<div class="login__label">비밀번호 &ast;</div>
			<PasswordInput placeholder="Password"></PasswordInput>
		</div>
	</div>
</template>

<script lang="ts">
import TextInput from "@/components/TextInput.vue";
import PasswordInput from "@/components/PasswordInput.vue";

import { Component, Vue } from "vue-property-decorator";
@Component({
	components: {
		TextInput,
		PasswordInput,
	},
})
export default class Login extends Vue {}
</script>

<style lang="scss">
.login {
	display: flex;
	justify-content: flex-end;
	width: 100vw;
	height: 100vh;
	padding: 20px;

	background-color: $primary-color;

	text-align: left;

	.login_form {
		padding: 20px;

		background-color: white;
		min-width: 400px;
	}
	.login__label {
		color: gray;
	}
}
</style>
