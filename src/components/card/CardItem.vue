<script>
export default {
  props: ['card'],
}
</script>

<template>
  <div class="card-item">
    <p class="mb-0">{{ card.text }}</p>
  </div>
</template>

<style scoped>
.card-item {
  padding: 8px 12px;
  border: 1px solid fuchsia;
  border-radius: 6px;
  background-color: #fff0f5;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.card-item:hover {
  transform: scale(1.02);
  cursor: pointer;
}
</style>
