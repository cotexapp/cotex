<template>
	<div class="page"></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import TextInput from "@/components/TextInput.vue";
import PasswordInput from "@/components/PasswordInput.vue";
import Button from "@/components/Button.vue";

@Component
export default class Page extends Vue {}
</script>

<style lang="scss">
.page {
}
</style>
