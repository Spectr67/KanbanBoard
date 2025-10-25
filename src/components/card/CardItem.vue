<script>
import { BCard, BCardText, BCardTitle } from 'bootstrap-vue-next'
export default {
  components: [BCard, BCardTitle, BCardText],
  props: ['column'],
}
</script>

<template>
  <BCard
    no-body
    style="max-width: 20rem"
    img-src="https://picsum.photos/380/200"
    img-alt="Image"
    img-top
  >
    <template #header>
      <h4 class="mb-0">Hello World</h4>
    </template>
    <BCardBody>
      <BCardTitle>{{ column.title }}</BCardTitle>
      <BCardText>{{ column.role }} </BCardText>
    </BCardBody>
  </BCard>
</template>
