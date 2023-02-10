<script setup lang="ts">
/**Filter bar component of the table */

import { reactive } from "vue";

//Components
import Input from "../common/Input.vue";
import Button from "../common/Button.vue";

//Models
import { FilterModel } from "../../modules/models";

interface Filter {
  filterFn(filterValue: FilterModel): Promise<void>;
}
const props = defineProps<Filter>();

let filterValue: FilterModel = reactive({
  site: "",
  username: "",
});
</script>
<template>
  <section class="row g-4">
    <div class="col-md-4 col-lg-5 col-sm-4">
      <Input
        :value="filterValue.site"
        :place-holder="'Site/App'"
        class="form-control filter"
        v-model="filterValue.site"
      />
    </div>
    <div class="col-md-4 col-lg-5 col-sm-4">
      <Input
        :value="filterValue.username"
        :place-holder="'Username/Email'"
        class="form-control filter"
        v-model="filterValue.username"
      />
    </div>
    <div class="col-md-3 col-lg-2 col-sm-3">
      <Button
        :fn-button="() => props.filterFn(filterValue)"
        class="btn-fifth w-100"
        :type="'button'"
        >Search</Button
      >
    </div>
  </section>
</template>
