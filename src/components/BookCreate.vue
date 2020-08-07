<template>
	<div class="bookcreate">
		<div class="bookcreate__content">
			<div class="bookcreate__title">
				<i class="iconify" data-icon="mdi-book"></i>
				<h1>책 만들기 &ast;</h1>
			</div>
			<input v-model="title" class="bookcreate__input" placeholder="제목" type="text" />
			<div>협업자</div>
			<div class="bookcreate__edit">
				<div>
					<input placeholder="관리자" type="text" required />
					<div>관리자</div>
				</div>
				<div>
					<input placeholder="협업자 1" type="text" />
					<div>협업자</div>
				</div>
				<div>
					<input placeholder="협업자 2" type="text" />
					<div>협업자</div>
				</div>
				<div>
					<input placeholder="협업자 3" type="text" />
					<div>협업자</div>
				</div>
			</div>
			<button type="submit">생성</button>
			<button type="reset">취소</button>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class BookCreate extends Vue {
	title: string = "";
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
	}
}
</style>
