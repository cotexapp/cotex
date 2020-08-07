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
				<h2>{{ !isRegister ? "로그인" : "가입하기" }}</h2>
				<p>CoTeX에서 손쉽게 출판을 시작해보세요.</p>
			</div>

			<div class="login__form__social">
				<h2>SNS 로그인</h2>
				<Button class="button login__form__social__naver">
					<img
						src="https://recruit.navercorp.com/img/favicon/naver_favicon.ico"
						alt="Naver Logo"
						width="28"
						height="28"
					/> 네이버로 로그인하기
				</Button>
				<Button class="button login__form__social__kakao">
					<img src="../assets/kakao.png" alt="Kakao Logo" width="28" height="28" /> 카카오로 로그인하기
				</Button>
				<Button class="button login__form__social__github">
					<img
						src="https://cdn.iconscout.com/icon/free/png-256/github-1767765-1502345.png"
						alt="GitHub Logo"
						width="24"
						height="24"
					/> GitHub로 로그인하기
				</Button>
			</div>
			<hr />
			<form action="javascript:void(0)" @submit="submit" class="login__form__loginbox">
				<label class="inputbox">
					<div class="login__label">아이디 &ast;</div>
					<input class="textinput" v-model="id" placeholder="ID" required />
				</label>
				<label class="inputbox">
					<div class="login__label">비밀번호 &ast;</div>
					<input
						class="passwordinput"
						v-model="password"
						placeholder="Password"
						required
						type="password"
					/>
				</label>
			</form>
			<Button
				class="login__from__submitBtn"
				@click="submit"
				type="submit"
			>{{ !isRegister ? "로그인" : "가입하기" }}</Button>
			<div v-if="!isRegister" class="login__form__first">
				CoTex에 처음인가요?
				<b @click="()=>{isRegister = true}">가입하기</b>
			</div>
			<div v-else class="login__form__first">
				이미 계정이 있으신가요?
				<b @click="()=>{isRegister = false}">로그인</b>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Button from "@/components/Button.vue";

@Component({
	components: {
		Button,
	},
})
export default class Login extends Vue {
	isRegister: boolean = false;
	id: string = "";
	password: string = "";

	submit() {
		console.log(this.id, this.password);
		if (this.id && this.password) {
			if (!this.isRegister)
				this.$store.dispatch("LOGIN", {
					userID: this.id,
					password: this.password,
				});
			else
				this.$store.dispatch("REGISTER", {
					userID: this.id,
					password: this.password,
				});
		}
	}
}
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
				padding: 8px;
				display: flex;
				justify-content: center;
				align-items: center;
				img {
					margin-right: 7px;
				}
				&.login__form__social__naver {
					background-color: #1ec800;
				}
				&.login__form__social__kakao {
					background-color: #ffe812;
				}
				&.login__form__social__github {
					background-color: #ffffff;
					border: 1px solid #eeeeee;
					color: #1b1c30;
				}
			}
		}
		.login__form__loginbox {
		}
		.login__from__submitBtn {
			margin-top: 40px;
			width: 100%;
			font-size: 14px;
		}
		.login__form__first {
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 10px;
			b {
				margin-left: 5px;
				cursor: pointer;
			}
		}
	}
	.inputbox {
		.login__label {
			color: $secondary-color;
			font-weight: bold;

			margin: 20px 0 7px 0;
		}
		input {
			font-size: 14px;
		}
	}
}
</style>
