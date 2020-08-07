<template>
	<div class="login">
		<div class="login__content">
			<div class="login__content__textbox">
				<h1>누구나 퍼블리싱을 손쉽게</h1>
				<p>
					복잡하고 번거로운 퍼블리싱 툴 대신 셀 단위의 사용자간 실시간 편집을 통해
					<br />새로운 차원의 퍼블리싱을 경험해보세요
				</p>
			</div>
			<img class="image" src="@/assets/CoTeX.svg" />
		</div>
		<div class="login__form">
			<div class="login__form__header">
				<img src alt="로고" class="logo" />
				<h2>로그인</h2>
				<p>CoTeX에서 손쉽게 출판을 시작해보세요.</p>
			</div>

			<div class="login__form__social">
				<h2>SNS 로그인</h2>
				<Button class="button">네이버로 로그인하기</Button>
				<Button class="button">카카오로 로그인하기</Button>
				<Button class="button">Github로 로그인하기</Button>
			</div>
			<hr />
			<div class="login__form__loginbox">
				<label class="inputbox">
					<div class="login__label">아이디 &ast;</div>
					<TextInput placeholder="ID"></TextInput>
				</label>
				<label class="inputbox">
					<div class="login__label">비밀번호 &ast;</div>
					<PasswordInput placeholder="Password"></PasswordInput>
				</label>
			</div>
			<Button class="login__from__loginbtn">로그인</Button>
			<div class="login__form__first">CoTex에 처음인가요? 가입하기</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import TextInput from "@/components/TextInput.vue";
import PasswordInput from "@/components/PasswordInput.vue";
import Button from "@/components/Button.vue";

@Component({
	components: {
		TextInput,
		PasswordInput,
		Button,
	},
})
export default class Login extends Vue {}
</script>

<style lang="scss">
.login {
	display: flex;
	width: 100vw;
	height: 100vh;

	background-color: $primary-color;

	text-align: left;

	hr {
		border: 1px solid #eeeeee;
		width: 50%;
		margin: 40px auto;
	}
	.login__content {
		flex: 1;
		overflow: hidden;

		display: flex;
		justify-content: center;
		align-items: center;

		.login__content__textbox {
			position: absolute;
			top: 10%;
			color: white;

			h1 {
				font-size: 50px;
				letter-spacing: 1.25px;
				text-align: center;
			}
			p {
				font-size: 20px;
				line-height: 1.9;
				letter-spacing: 0.5px;
				text-align: center;
			}
		}
		.image {
			width: 100%;
		}
	}
	.login__form {
		padding: 40px;

		background-color: white;
		width: 600px;

		display: flex;
		flex-direction: column;
		.login__form__header {
			h2 {
				font-size: 24px;
			}
			p {
				font-size: 14px;
			}
			.logo {
				display: inline-block;
				background: $primary-color;
				width: 60px;
				height: 60px;
			}
		}
		.login__form__social {
			display: flex;
			flex-direction: column;
			h2 {
				text-align: center;
				margin: 20px 0;
				font-size: 16px;
			}
			.button {
				margin-bottom: 15px;
			}
		}
		.login__form__loginbox {
		}
		.login__from__loginbtn {
			margin-top: 40px;
			width: 100%;
			font-size: 14px;
		}
		.login__form__first {
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
	.inputbox {
		.login__label {
			color: $secondary-color;
			font-weight: bold;

			margin: 20px 0;
		}
		input {
			font-size: 14px;
		}
	}
}
</style>
