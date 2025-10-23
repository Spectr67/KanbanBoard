<script>
import { BCard, BCardBody, BCardText } from 'bootstrap-vue-next'
import CardList from '../Card/CardList.vue'

export default {
  components: { CardList, BCard, BCardBody, BCardText },
  props: ['column'],
}
</script>

<template>
  <BCard class="wrapper-card" no-body>
    <template #header>
      <h5 class="mb-0 text-center">{{ column.title }}</h5>
    </template>

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
