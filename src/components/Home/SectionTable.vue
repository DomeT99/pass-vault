<script setup lang="ts">
	/**Section that is loaded asynchronously in Home views*/
	import { onMounted, reactive } from "vue";

	//Components
	import Table from "./Table.vue";
	import Filter from "./Filter.vue";

	//Modules
	import { PswDBModel } from "../../modules/models";

	//Third Part Library
	import _ from "lodash";

	//Store
	import { usePasswordStore } from "../../store/passwordStore";

	const pswStore = usePasswordStore();

	let idTable: string = _.uniqueId("");
	let dbData: PswDBModel[] = reactive([]);

	onMounted(async () => {
		try {
			dbData = await pswStore.populateTable(dbData);
		} catch (e) {
			throw e;
		}
	});
</script>

<template>
	<section class="container pt-10 fade-in">
		<Filter />
	</section>
	<section class="container pt-5 fade-in table-responsive">
		<Table :id="idTable" :data-json="dbData" />
	</section>
</template>
<style scoped>
	.pt-10 {
		padding-top: 10rem;
	}
</style>
