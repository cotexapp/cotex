<template>
	<div class="page">
		<div class="page__temp">
			<button>생성</button>
		</div>
		<div class="page__grid" @mousemove="eventMove" @mouseup="eventEnd">
			<div class="page__grid__box" ref="box">
				<div
					class="page__grid__box__cell"
					v-for="cell in cells"
					:key="cell.idx"
					:style="`
                    left:${gridWidth*cell.x}px;
                    top:${gridHeight*cell.y}px;
                    width:${gridWidth*cell.width}px;
                    height:${gridHeight*cell.height}px`"
				>
					<p>
						<textarea type="text" v-model="cell.text" />
					</p>
					<button class="page__grid__box__cell__resize" @mousedown="eventStart($event,cell.idx)"></button>
				</div>
			</div>
		</div>
		<div class="page__celledit"></div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import TextInput from "@/components/TextInput.vue";
import PasswordInput from "@/components/PasswordInput.vue";
import Button from "@/components/Button.vue";

interface Cell {
	idx: number;
	x: number;
	y: number;
	width: number;
	height: number;
	linkwith: number[];
	text?: string; // 텍스트
	img?: string; // 이미지 경로
}

@Component
export default class Page extends Vue {
	gridX: number = 9;
	gridY: number = 13;
	gridWidth: number = 0;
	gridHeight: number = 0;
	width: number = 0;
	height: number = 0;
	offsetLeft: number = 0;
	offsetTop: number = 0;
	cells: Cell[] = [
		{
			idx: 0,
			x: 1,
			y: 1,
			width: 2,
			height: 2,
			linkwith: [],
			text: "테스트",
		},
		{
			idx: 1,
			x: 4,
			y: 4,
			width: 5,
			height: 5,
			linkwith: [],
			text: "테스트",
		},
	];

	box!: HTMLDivElement;

	selectedIndex: number = -1;
	startPositionX: number = 0;
	startPositionY: number = 0;
	startWidth: number = 0;
	startHeight: number = 0;

	mounted() {
		this.box = this.$refs.box as HTMLDivElement;

		let resize = () => {
			this.width = this.box.getBoundingClientRect().width;
			this.height = this.box.getBoundingClientRect().height;
			this.offsetLeft = this.box.getBoundingClientRect().left;
			this.offsetTop = this.box.getBoundingClientRect().top;

			this.gridWidth = this.width / this.gridX;
			this.gridHeight = this.height / this.gridY;
		};
		window.onresize = resize;
		resize();
	}
	eventStart(e: MouseEvent, idx: number) {
		let cell: Cell | undefined = this.cells.find((cell) => cell.idx == idx);

		let x = e.clientX - this.offsetLeft;
		let y = e.clientY - this.offsetTop;

		this.startPositionX = x;
		this.startPositionY = y;
		this.startWidth = cell!.width;
		this.startHeight = cell!.height;

		this.selectedIndex = idx;
	}
	eventMove(e: MouseEvent) {
		if (this.selectedIndex != -1) {
			let x = e.clientX - this.offsetLeft;
			let y = e.clientY - this.offsetTop;

			let cell: Cell | undefined = this.cells.find(
				(cell) => cell.idx == this.selectedIndex
			);
			if (cell) {
				cell.width =
					this.startWidth +
					Math.floor((x - this.startPositionX) / this.gridWidth) +
					1;
				cell.height =
					this.startHeight +
					Math.floor((y - this.startPositionY) / this.gridHeight) +
					1;
			}
		}
	}
	eventEnd(e: MouseEvent) {
		this.selectedIndex = -1;
		this.startPositionX = 0;
		this.startPositionY = 0;
	}
}
</script>

<style lang="scss">
.page {
	width: 100vw;
	height: 100vh;
	display: flex;
	.page__temp {
		flex: 2;
		background-color: #eeeeee;
		height: 100%;
	}
	.page__grid {
		flex: 3;
		background-color: #dddddd;
		height: 100%;

		padding: 10px;

		display: flex;

		.page__grid__box {
			position: relative;

			background-color: $primary-color;
			width: 100%;
			height: 100%;
			.page__grid__box__cell {
				position: absolute;

				background-color: $secondary-color;

				transition: 0.2s cubic-bezier(0.175, 0.885, 0.32, 1);
				p {
					height: 100%;
					textarea {
						outline: none;

						width: 100%;
						height: 100%;
						resize: none;
					}
				}

				.page__grid__box__cell__resize {
					cursor: nwse-resize;

					position: absolute;
					right: 0;
					bottom: 0;

					border: none;
					outline: none;
					background-color: rgba(0, 0, 0, 0.2);

					width: 20px;
					height: 20px;
				}
			}
		}
	}
	.page__celledit {
		flex: 3;
		background-color: #cccccc;
		height: 100%;
	}
}
</style>
