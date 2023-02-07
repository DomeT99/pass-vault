<script setup lang="ts">
	//Vue native modules
	import { computed, defineAsyncComponent, ref } from "vue";

	//Components
	import Layout from "../layout/Default.vue";
	import Button from "../components/common/Button.vue";
	import Loading from "../components/common/Loading.vue";
	import Modal from "../components/common/Modal.vue";

	//Router
	import router from "../router";

	//Store
	import { useComponentStore } from "../store/componentStore";
	const componentStore = useComponentStore();

	//Async Components
	const Table = defineAsyncComponent({
		loader: () => import("../components/Home/SectionTable.vue"),
		loadingComponent: Loading,
		delay: 700,
		timeout: 5000,
	});

	//Computed Props
	const btnIcon = computed(() => {
		return new URL("../assets/images/plus-solid.svg", import.meta.url).href;
	});

	//Functions
	function switchPassView() {
		router.push("addpassword");
	}

	function closeModal() {
		componentStore.showDeletePopup = !componentStore.showDeletePopup;
	}
</script>
<template>
	<Layout>
		<template v-if="componentStore.showDeletePopup">
			<Modal
				:error-function="closeModal"
				:succ-function="() => null"
				:title="'ATTENTION'"
			>
				Do you want delete this row?</Modal
			>
		</template>

		<Table />
		<section class="button-bar">
			<Button
				:fn-button="switchPassView"
				class="btn-secondary btn-pad"
				:type="'button'"
				><img :src="btnIcon" width="25" height="25"
			/></Button>
		</section>
	</Layout>
</template>
<style scoped lang="scss">
	.button-bar {
		padding: 2rem;
		position: fixed;
		bottom: 0;
		right: 0;
	}
</style>
