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
				<span class="pointer">
					김현우
					<span @click="toggleProfile">
						<i class="iconify" data-icon="mdi-chevron-down"></i>
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
				<i class="iconify home__search__icon" data-icon="mdi-search"></i>
				<input type="text" v-model="search" />
				<i class="iconify" data-icon="mdi-close"></i>
			</div>
			<div class="home__content">
				<div class="home__content__sort">
					<i class="iconify" data-icon="mdi-sort-variant"></i>
					정렬
				</div>
			</div>
			<img class="home__cover__image" src="@/assets/cover.svg" />
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
	components: {},
})
export default class Home extends Vue {
	isNotification: boolean = false;
	isProfile: boolean = false;
	search: string = "";

	get getUserData() {
		return this.$store.state.userData;
	}

	toggleNotification() {
		this.isNotification = !this.isNotification;
	}

	toggleProfile() {
		this.isProfile = !this.isProfile;
	}
}
</script>

<style lang="scss" scoped>
.home {
	.home__appBar {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;

		padding: 20px;

		color: #ffffff;
	}
	.home__cover {
		display: flex;
		justify-content: space-between;
		align-items: center;
		.home__cover__image {
			position: absolute;
			top: 0;
			left: 0;
			z-index: -1;
		}
		h1 {
			color: #ffffff;
		}
		.home__search {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: row;
			max-width: 800px;

			background-color: $focus-color;

			border-radius: 20px;
			padding: 15px;
			transition: 0.2s;
			i {
				color: black;
			}
			.search__icon {
				margin-right: 10px;
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
