<script setup lang="ts">
// @ts-nocheck
import { onMounted } from "vue";
import _ from "lodash";

interface PaginationModel {
  dataJson: object[];
  idTable: string;
}

const props = defineProps<PaginationModel>();

let currentPage = 1;
let recordsPerPage = 3;

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
  let idTable = document.getElementById(props.idTable)! as
    | HTMLElement
    | HTMLTableElement;

  if (page < 1) {
    page = 1;
  }

  if (page > numPages()) {
    page = numPages();
  }

  for (let i = (page - 1) * recordsPerPage; i < page * recordsPerPage; i++) {
    idTable.innerHTML += props.dataJson[i].First;
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
        <a
          @click="prevPage"
          class="page-link"
          id="btn_prev"
          href="#"
          aria-label="Prev"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item">
        <a
          @click="nextPage"
          class="page-link"
          id="btn_next"
          href="#"
          aria-label="Next"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>
