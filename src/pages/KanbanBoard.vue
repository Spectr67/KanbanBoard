<script>
import { BButton, BModal } from 'bootstrap-vue-next'
import ColumnSubmitterModalForm from '../Components/Column/ColumnSubmitterModalForm.vue'
import ColumnList from '../Components/Column/ColumnList.vue'

export default {
  components: { BButton, BModal, ColumnSubmitterModalForm, ColumnList },

  data() {
    return {
      caption: 'KanbanBoard',
      columns: [],
      columnsCount: 0,
      showModal: false,
    }
  },

  methods: {
    openModal() {
      this.showModal = true
    },

    closeModal() {
      this.showModal = false
    },

    handleColumnSubmit(newColumn) {
      this.columns.push(newColumn)
      this.columnsCount = this.columns.length
      this.closeModal()
    },
  },
}
</script>

<template>
  <div class="container">
    <div class="text-center mt-4">
      <BButton class="fs-4 px-3 py-1 fw-bold" @click="openModal">
        Add Column
      </BButton>
    </div>

    <BModal v-model="showModal" title="Add New Column" centered no-footer>
      <ColumnSubmitterModalForm @ColumnSubmit="handleColumnSubmit" />
    </BModal>

    <div>
      <ColumnList :columns="columns" />
    </div>
  </div>
</template>
