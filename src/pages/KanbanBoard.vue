<script>
import CardSubmitterModalForm from '@/components/card/CardSubmitterModalForm.vue'
import ColumnList from '@/components/column/ColumnList.vue'
import ColumnSubmitterModalForm from '@/components/column/ColumnSubmitterModalForm.vue'
import { BButton, BModal } from 'bootstrap-vue-next'
export default {
  components: {
    BButton,
    BModal,
    ColumnSubmitterModalForm,
    ColumnList,
    CardSubmitterModalForm,
  },

  data() {
    return {
      caption: 'KanbanBoard',
      columns: [],
      columnsCount: 0,
      showColumnModal: false,
      showCardModal: false,
    }
  },

  methods: {
    openColumnModal() {
      this.showColumnModal = true
    },
    closeColumnModal() {
      this.showColumnModal = false
    },
    openCardModal() {
      this.showCardModal = true
    },
    closeCardModal() {
      this.showCardModal = false
    },

    handleColumnSubmit(column) {
      this.columns.push(column)
      this.columnsCount = this.columns.length
      this.closeColumnModal()
    },
    handleCardSubmit(newCard) {
      if (this.columns.length === 0) return
      this.columns[0].cards.push(newCard)
      this.closeCardModal()
    },
  },
}
</script>

<template>
  <div class="container">
    <div class="text-center mt-4 d-flex gap-3 justify-content-center">
      <BButton class="fs-4 px-3 py-1 fw-bold" @click="openColumnModal">
        Add Column
      </BButton>
      <BButton
        class="fs-4 px-3 py-1 fw-bold"
        @click="openCardModal"
        :disabled="columns.length === 0"
      >
        Add Card
      </BButton>
    </div>

    <BModal v-model="showColumnModal" title="Add New Column" centered no-footer>
      <ColumnSubmitterModalForm @ColumnSubmit="handleColumnSubmit" />
    </BModal>

    <BModal v-model="showCardModal" title="Add New Card" centered no-footer>
      <CardSubmitterModalForm @CardSubmit="handleCardSubmit" />
    </BModal>

    <div class="mt-4">
      <ColumnList :columns="columns" />
    </div>
  </div>
</template>

<style scoped>
button {
  width: 250px;
}
</style>
