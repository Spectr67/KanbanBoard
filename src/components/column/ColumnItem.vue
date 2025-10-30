<script>
import {
  BButton,
  BCard,
  BCardBody,
  BCardText,
  BModal,
} from 'bootstrap-vue-next'
import CardList from '../card/CardList.vue'

export default {
  components: {
    CardList,
    BCard,
    BCardBody,
    BCardText,
    BModal,
    BButton,
  },
  props: ['column'],
  data() {
    return {}
  },
}
</script>

<template>
  <BCard class="wrapper-card" no-body>
    <template #header>
      <h5 class="mb-0 text-center">{{ column.title }}</h5>
    </template>

    <BCardBody>
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
