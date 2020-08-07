<template>
	<div class="bookcreate">
		<div class="bookcreate__content">
			<div class="bookcreate__title">
				<i class="iconify" data-icon="mdi-book"></i>
				<h1>책 만들기 &ast;</h1>
			</div>
			<h2>제목</h2>
			<input v-model="title" class="textinput" placeholder="제목" type="text" />
			<div class="bookcreate__edit">
				<div>
					<h2>관리자</h2>
					<input
						placeholder="관리자"
						:value="getUser.userID"
						class="textinput"
						type="text"
						required
						disabled
					/>
				</div>
				<div>
					<h2>협업자</h2>
					<input placeholder="협업자 1" class="textinput" type="text" />
				</div>
				<div>
					<h2>협업자</h2>
					<input placeholder="협업자 2" class="textinput" type="text" />
				</div>
				<div>
					<h2>협업자</h2>
					<input placeholder="협업자 3" class="textinput" type="text" />
				</div>
			</div>
			<button
				type="submit"
				class="submit"
				@click="()=>{$emit('submit',{title}); $router.push('/page')}"
			>생성</button>
			<button type="reset" class="reset" @click="()=>{$emit('close',false)}">취소</button>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class BookCreate extends Vue {
	title: string = "";

	get getUser() {
		return this.$store.state.userData;
	}
}
</script>

<style lang="scss" scoped>
.bookcreate {
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	width: 100vw;
	height: 100vh;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.45);
	overflow: auto;
	z-index: 2000;
	.bookcreate__content {
		padding: 40px;
		border-radius: 20px;

		background-color: #ffffff;
		.bookcreate__title {
			display: flex;
			justify-content: center;
			align-items: center;

			.iconify {
				font-size: 40px;
			}
		}
		.bookcreate__edit {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
		}
		h2 {
			font-size: 1em;
			line-height: 1.33;
			letter-spacing: 0.3px;
			color: #8f9bb3;

			text-align: left;
		}
		input {
			margin-bottom: 20px;

			width: 400px;
		}
	}
	.submit {
		background-color: #0676ed;
		padding: 15px 30px;
		border-radius: 200px;
		border: none;
		outline: none;
		box-shadow: 3px 3px 10px -1px rgba(11, 27, 102, 0.31);
		color: white;
		font-size: 16px;
	}
	.reset {
		border: solid 1px #dae1ed;
		background-color: #fdfefe;
		padding: 15px 30px;
		border-radius: 200px;
		outline: none;
		color: #dae1ed;
		font-size: 16px;
		margin-left: 20px;
	}
}
</style>
