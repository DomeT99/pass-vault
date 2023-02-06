<script setup lang="ts">
	import { provide } from "vue";

	//Modules
	import { DataJsonType } from "../../modules/types";

	//Router
	import router from "../../router";

	//Components
	import Button from "../common/Button.vue";

	//Interface to describe the component's props
	interface TableModel {
		id: string;
		dataJson: DataJsonType[];
	}
	const props = defineProps<TableModel>();

	function editPassword(id: string) {
		router.push("/updatepassword/" + id);
	}
</script>
<template>
	<div class="max-h-40 overflow-y-scroll">
		<table class="table table-bordered table-hover" :id="props.id">
			<thead class="table-secondary">
				<tr>
					<th scope="col">ID</th>
					<th scope="col">Site/App</th>
					<th scope="col">Username</th>
					<th scope="col">Password</th>
					<th scope="col"></th>
					<th scope="col"></th>
					<th scope="col"></th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="data in props.dataJson">
					<td>{{ data.id }}</td>
					<td>{{ data.site }}</td>
					<td>{{ data.username }}</td>
					<td>{{ data.password }}</td>
					<td>
						<Button
							:fn-button="() => editPassword(data.id)"
							class="btn btn-fourth w-100"
							:type="'button'"
							>✒️</Button
						>
					</td>
					<td><button class="btn btn-primary w-100">🔍</button></td>
					<td>
						<Button
							:fn-button="() => provide('showModal', true)"
							class="btn btn-fifth w-100"
							:type="'button'"
							>❌</Button
						>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<style scoped>
	.max-h-40 {
		max-height: 40vh;
	}
	.overflow-y-scroll {
		overflow-y: scroll;
	}
</style>
