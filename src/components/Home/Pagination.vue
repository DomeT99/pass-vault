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
  let btnNext = document.getElementById("btn_next")! as HTMLAnchorElement;
  let btnPrev = document.getElementById("btn_prev")! as HTMLAnchorElement;
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
                          <td>${props.dataJson[i].site}</td>
                          <td>${props.dataJson[i].username}</td>
                         </tr>`;
  }

  if (page == 1) {
    btnPrev.style.visibility = "hidden";
  } else {
    btnPrev.style.visibility = "visible";
  }

  if (page == numPages()) {
    btnNext.style.visibility = "hidden";
  } else {
    btnNext.style.visibility = "visible";
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
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item">
        <a @click="prevPage" class="page-link" id="btn_prev">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item">
        <a @click="nextPage" class="page-link" id="btn_next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>
<style scoped>
a{
  cursor: pointer;
}
</style>