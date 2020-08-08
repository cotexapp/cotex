<template>
	<div class="home">
		<div class="home__appBar">
			<img src="@/assets/logo.svg" alt="Logo" class="logo" />
			<div>
				<span class="pointer" @click="toggleNotification">
					<i class="iconify" data-icon="mdi-bell"></i>
				</span>
				<div v-if="isNotification" class="notification pointer">
					<!-- 알림 카드 -->
				</div>
				<span class="pointer" @click="toggleProfile">
					{{getUserData.userID}}
					<span v-if="!isProfile">
						<i class="iconify" data-icon="mdi-chevron-down"></i>
					</span>
					<span v-else>
						<i class="iconify" data-icon="mdi-chevron-up"></i>
					</span>
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
				<span class="pointer" @click="
						() => {
							search = '';
						}
					">
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
				<div class="home__bookshelf__books__add pointer" @click="()=>{isShowBookCreate = true}">
					<i class="iconify" data-icon="mdi-plus-circle"></i>
					새 책 추가하기
				</div>
				<div
					@click="()=>{ $router.push('/page')}"
					v-for="(item, idx) in filteredBooks"
					:key="idx"
					class="home__bookshelf__books__book pointer"
					:style="{ backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4)), url(' + item.image + ')' }"
				>
					<h3>{{ item.title }}</h3>
				</div>
			</div>
		</div>
		<BookCreate v-if="isShowBookCreate" @close="()=>{isShowBookCreate = false}"></BookCreate>
	</div>
</template>

<script lang="ts">
import BookCreate from "../components/BookCreate.vue";

import { Component, Vue, Watch } from "vue-property-decorator";
@Component({
	components: {
		BookCreate,
	},
})
export default class Home extends Vue {
	isShowBookCreate: boolean = false;
	searchTimer: number = 0;
	isNotification: boolean = false;
	isProfile: boolean = false;
	search: string = "";
	filteredBooks: any = [];
	books: any = [
		{
			title: "부의 대이동",
			image: "https://m.media-amazon.com/images/I/51d2e+67u1L.jpg",
		},
		{
			title: "보통의 언어들",
			image: "https://m.media-amazon.com/images/I/51d2e+67u1L.jpg",
		},
		{
			title: "인생의 태도",
			image: "https://m.media-amazon.com/images/I/51d2e+67u1L.jpg",
		},
		{
			title: "통찰과 역설1",
			image: "https://m.media-amazon.com/images/I/51d2e+67u1L.jpg",
		},
		{
			title: "통찰과 역설2",
			image: "https://m.media-amazon.com/images/I/51d2e+67u1L.jpg",
		},
		{
			title: "통찰과 역설3",
			image: "https://m.media-amazon.com/images/I/51d2e+67u1L.jpg",
		},
		{
			title: "통찰과 역설4",
			image: "https://m.media-amazon.com/images/I/51d2e+67u1L.jpg",
		},
	];

	@Watch("search")
	isSearchChanged() {
		if (this.searchTimer) {
			clearTimeout(this.searchTimer);
		}
		this.searchTimer = setTimeout(() => {
			// TODO
			this.filteredBooks = this.books.filter(
				(books: any) =>
					books.title
						.toLowerCase()
						.indexOf(this.search.toLowerCase()) != -1
			);
		}, 300);
	}

	get getUserData() {
		return this.$store.state.userData;
	}

	created() {
		if (!this.getUserData.userID) this.$router.push("/login");
		this.filteredBooks = this.books;
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
	.logo {
		filter: brightness(10);
		margin-top: 15px;
		margin-left: 10px;
	}
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

				box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
				.iconify {
					font-size: 30px;
					margin-bottom: 7px;
				}
			}
			.home__bookshelf__books__book {
				display: flex;
				justify-content: center;
				align-items: flex-end;

				width: 200px;
				height: 100%;
				margin: 0 10px;
				padding: 25px 0;

				border-radius: 5px;
				box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);

				background-position: center;
				background-size: contain;

				color: #ffffff;
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
