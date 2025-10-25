<script>
import ColumnItem from './ColumnItem.vue'

export default {
  components: { ColumnItem },
  props: ['columns'],
}
</script>

<template>
  <div class="d-flex flex-wrap gap-3 justify-content-center my-4">
    <ColumnItem v-for="column in columns" :key="column.id" :column="column" />
  </div>
</template>

<style scoped>
.d-flex {
  flex-wrap: wrap;
}
</style>
