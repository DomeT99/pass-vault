<script setup lang="ts">
//Vue native modules
import { onMounted } from "vue";

//Third Part Library
import _ from "lodash";

//Types
import { DataJson } from "../../modules/types";

//Interface to describe the component's props
interface PaginationModel {
  dataJson: DataJson[];
  id: string;
}

const props = defineProps<PaginationModel>();

let currentPage = 1;
let recordsPerPage = 5;

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    changePage(currentPage);
  }
}

function nextPage() {
  if (currentPage < numPages()) {
    currentPage++;
    changePage(currentPage);
  }
}

function changePage(page: number) {
  let idBodyTable = document.getElementById(props.id)! as
    | HTMLElement
    | HTMLTableElement;

  if (page < 1) {
    page = 1;
  }

  if (page > numPages()) {
    page = numPages();
  }

  idBodyTable.innerHTML = "";

  /**Improve in the future */
  for (let i = (page - 1) * recordsPerPage; i < page * recordsPerPage; i++) {
    idBodyTable.innerHTML += `<tr>
                          <td>${props.dataJson[i].id}</td>
                          <td>${props.dataJson[i].site}</td>
                          <td>${props.dataJson[i].username}</td>
                          <td>${props.dataJson[i].password}</td>
                          
                          <td><button class="btn btn-fourth w-100">✒️</button></td>
                          <td><button class="btn btn-primary w-100">🔍</button></td>
                          <td><button class="btn btn-fifth w-100">❌</button></td>
                         </tr>`;
  }
}

function numPages() {
  return _.ceil(props.dataJson.length / recordsPerPage);
}

onMounted(() => {
  changePage(1);
});
</script>

<template>
  <nav aria-label="Table pagination">
    <ul class="pagination">
      <li class="page-item">
        <a @click="prevPage" class="page-link">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item">
        <a @click="nextPage" class="page-link">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>
<style scoped>
a {
  cursor: pointer;
}
</style>
