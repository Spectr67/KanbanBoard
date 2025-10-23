<script>
import {
  BButton,
  BCard,
  BCardBody,
  BCardText,
  BModal,
} from 'bootstrap-vue-next'
import CardList from '../Card/CardList.vue'
import CardSubmitterModalForm from '../Card/CardSubmitterModalForm.vue'

export default {
  components: {
    CardList,
    BCard,
    BCardBody,
    BCardText,
    BModal,
    CardSubmitterModalForm,
    BButton,
  },
  props: ['column'],
  data() {
    return {
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
  <BModal v-model="showModal" title="Add New Card" centered no-footer>
    <CardSubmitterModalForm />
  </BModal>

  <BCard class="wrapper-card" no-body>
    <template #header>
      <h5 class="mb-0 text-center">{{ column.title }}</h5>
    </template>

    <BButton class="fs-5 px-3" @click="openModal"> Add Card </BButton>

    <BCardBody class="d-flex flex-column justify-content-between">
      <BCardText class="text-truncate">{{ column.role || '' }}</BCardText>
      <CardList :cards="column.cards" />
    </BCardBody>
  </BCard>
</template>

<style scoped>
.text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.wrapper-card {
  width: 250px;

  min-height: 400px;
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 0.5rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
}
</style>
