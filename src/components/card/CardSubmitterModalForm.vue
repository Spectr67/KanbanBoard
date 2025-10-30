<script>
import {
  BForm,
  BFormFloatingLabel,
  BFormInput,
  BButton,
} from 'bootstrap-vue-next'
import { createCard } from '@/functions/utils'

export default {
  components: {
    BForm,
    BFormFloatingLabel,
    BFormInput,
    BButton,
  },
  emits: ['CardSubmit'],
  data() {
    return {
      cardText: '',
    }
  },
  methods: {
    cardFromEntries() {
      const card = createCard(this.cardText)
      this.$emit('CardSubmit', card)
      this.cardText = ''
    },
  },
}
</script>

<template>
  <BForm @submit.prevent="cardFromEntries">
    <BFormFloatingLabel
      label="Card text"
      label-for="floatingTitle"
      class="my-2"
    >
      <BFormInput id="floatingTitle" v-model="cardText" type="text" />
    </BFormFloatingLabel>

    <div class="text-center mt-3">
      <BButton type="submit" class="fs-4 px-3 py-1 fw-bold">
        Create Card
      </BButton>
    </div>
  </BForm>
</template>
