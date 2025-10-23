<script>
import { BCard, BCardBody, BCardTitle, BCardText } from 'bootstrap-vue-next'
import CardList from './CardList.vue'

export default {
  components: { CardList, BCard, BCardBody, BCardTitle, BCardText },
  props: ['column'],
}
</script>

<template>
  <BCard
    no-body
    style="
      width: 250px;
      height: 400px;
      background-color: #f8f9fa;
      border-radius: 8px;
      padding: 0.5rem;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
      margin-bottom: 1rem;
    "
  >
    <template #header>
      <h5 class="mb-0 text-center">{{ column.title }}</h5>
    </template>

    <BCardBody class="d-flex flex-column justify-content-between">
      <!-- <BCardTitle class="text-truncate">{{ column.title }}</BCardTitle> -->
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
</style>
