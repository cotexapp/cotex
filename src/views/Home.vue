<template>
	<div class="home">
		<div class="home__appBar">
			<img src alt="Logo" />
			<div>
				<span class="pointer" @click="toggleNotification">
					<i class="iconify" data-icon="mdi-bell"></i>
				</span>
				<div v-if="isNotification" class="notification pointer">
					<!-- 알림 카드 -->
				</div>
				<span class="pointer" @click="toggleProfile">
					김현우
					<span v-if="!isProfile"><i class="iconify" data-icon="mdi-chevron-down"></i></span>
					<span v-else><i class="iconify" data-icon="mdi-chevron-up"></i></span>
				</span>
				<div v-if="isProfile" class="profile pointer">
					<!-- 알림 카드 -->
				</div>
			</div>
		</div>

		<div class="home__cover">
			<h1>나의 서재</h1>

			<div class="home__search">
				<i class="iconify" data-icon="mdi-search"></i>
				<input type="text" placeholder="검색어를 입력하세요 ..." v-model="search" />
				<span
					class="pointer"
					@click="
						() => {
							search = '';
						}
					"
				>
					<i class="iconify" data-icon="mdi-close"></i>
				</span>
			</div>
		</div>
		<div class="home__bookshelf">
			<div class="home__bookshelf__sort pointer" @click="sort">
				<i class="iconify" data-icon="mdi-sort-variant"></i>
				정렬
			</div>
			<div class="home__bookshelf__books">
				<div class="home__bookshelf__books__add pointer">
					<i class="iconify" data-icon="mdi-plus-circle"></i>
					새 책 추가하기
				</div>
				<span v-for="item in books" :key="item">
					<div class="home__bookshelf__books__book pointer" :style="{ backgroundImage: 'url(' + item.image + ')' }">
						<h3>{{ item.title }}</h3>
					</div>
				</span>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Home extends Vue {
	isNotification: boolean = false;
	isProfile: boolean = false;
	search: string = "";
	books: any = [
		{ title: "부의 대이동", image: "https://m.media-amazon.com/images/I/51d2e+67u1L.jpg" },
		{ title: "보통의 언어들", image: "https://m.media-amazon.com/images/I/51d2e+67u1L.jpg" },
		{ title: "인생의 태도", image: "https://m.media-amazon.com/images/I/51d2e+67u1L.jpg" },
		{ title: "통찰과 역설", image: "https://m.media-amazon.com/images/I/51d2e+67u1L.jpg" },
		{ title: "통찰과 역설", image: "https://m.media-amazon.com/images/I/51d2e+67u1L.jpg" },
		{ title: "통찰과 역설", image: "https://m.media-amazon.com/images/I/51d2e+67u1L.jpg" },
		{ title: "통찰과 역설", image: "https://m.media-amazon.com/images/I/51d2e+67u1L.jpg" },
	];

	get getUserData() {
		return this.$store.state.userData;
	}

	toggleNotification() {
		this.isNotification = !this.isNotification;
	}

	toggleProfile() {
		this.isProfile = !this.isProfile;
	}

	sort() {
		// TODO
		return;
	}
}
</script>

<style lang="scss" scoped>
.home {
	.home__appBar {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: auto;

		display: flex;
		justify-content: space-between;
		align-items: flex-start;

		padding: 20px;

		color: #ffffff;
	}
	.home__cover {
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-direction: column;
		background: url("../assets/cover.svg") no-repeat center;
		background-size: auto 100%;
		padding: 100px 0;

		height: 50vh;

		h1 {
			color: #ffffff;
		}
		.home__search {
			display: flex;
			justify-content: center;
			align-items: center;
			min-width: 500px;
			max-width: 800px;

			background-color: $focus-color;

			border-radius: 32px;
			padding: 15px;
			transition: 0.2s;
			i {
				color: black;
			}
			.iconify {
				font-size: 30px;
				margin: 0 10px;
			}
			input {
				flex: 1;

				border: none;
				background: none;
				outline: none;

				font-size: 1em;
			}
		}
	}
	.home__bookshelf {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		flex-direction: column;
		height: 50vh;
		padding: 30px;
		overflow-x: scroll;

		.home__bookshelf__sort {
			position: absolute;
			top: 52vh;
			right: 20px;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			.iconify {
				margin-right: 10px;
			}
		}
		.home__bookshelf__books {
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 10px;
			height: 100%;

			.home__bookshelf__books__add {
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				background-color: #f1f1f1;

				width: 200px;
				height: 100%;

				margin-right: 10px;

				border-radius: 5px;
			}
			span {
				height: 100%;

				.home__bookshelf__books__book {
					width: 200px;
					height: 100%;
					margin: 0 10px;
					border: 1px solid black;
				}
			}
		}
	}

	.notification {
		position: relative;
	}
	.profile {
		position: relative;
	}
	.pointer {
		cursor: pointer;
	}
}
</style>
