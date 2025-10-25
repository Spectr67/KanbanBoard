<script>
import KanbanBoard from './pages/KanbanBoard.vue'
import SimpleBoard from './pages/SimpleBoard.vue'

export default {
  components: { KanbanBoard, SimpleBoard },
}
</script>

<template>
  <h1>Board</h1>
  <div class="main">
    <KanbanBoard />
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  padding-top: 25px;
}
.main {
  border: 1px solid #000;
  width: 1200px;
  height: 700px;
  margin: auto;
  margin-top: 50px;
  border-radius: 20px;
}
</style>
