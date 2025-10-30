<script>
import { BAccordion } from 'bootstrap-vue-next'
import CardItem from './CardItem.vue'

export default {
  components: { BAccordion, CardItem },
  props: ['cards'],
}
</script>

<template>
  <div class="card-list">
    <CardItem v-for="card in cards" :key="card.id" :card="card" />
  </div>
</template>

<style scoped>
.card-list {
  width: 100%;
  max-height: 400px;
  overflow-y: auto;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 8px;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
