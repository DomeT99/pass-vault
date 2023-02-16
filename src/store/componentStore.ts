import { defineStore } from "pinia";
import { ref } from "vue";

export const useComponentStore = defineStore("componentStore", () => {
  //State
  let showDeletePopup = ref(false);
  let idPassword = ref("");
  let isShowToast = ref(false);
  return { showDeletePopup, idPassword, isShowToast };
});
