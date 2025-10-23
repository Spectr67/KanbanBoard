<script>
import {
  BForm,
  BFormGroup,
  BFormSelect,
  BFormFloatingLabel,
  BFormInput,
  BButton,
} from 'bootstrap-vue-next'
import { createColumn } from '@/CreateFunctions'
export default {
  components: {
    BFormGroup,
    BForm,
    BFormSelect,
    BFormFloatingLabel,
    BFormInput,
    BButton,
  },
  emits: ['ColumnSubmit'],
  data() {
    return {
      colors: ['black', 'white', 'green', 'red'],
      chosenColor: '',
      title: '',
      cardsLimit: 3,
    }
  },
  methods: {
    columnFromEntries() {
      const column = createColumn(this.title, this.cardsLimit)
      column.color = this.chosenColor || '#ff0077'
      this.$emit('ColumnSubmit', column)
      this.title = ''
      this.cardsLimit = 3
      this.chosenColor = ''
    },
  },
}
</script>

<template>
  <BForm @submit.prevent="columnFromEntries">
    <BFormFloatingLabel label="Title" label-for="floatingTitle" class="my-2">
      <BFormInput
        id="floatingTitle"
        v-model="title"
        type="text"
        placeholder="Enter column title"
      />
    </BFormFloatingLabel>

    <BFormFloatingLabel
      label="Cards limit"
      label-for="floatingLimit"
      class="my-2"
    >
      <BFormInput
        id="floatingLimit"
        v-model.number="cardsLimit"
        type="number"
        min="1"
        placeholder="Cards limit"
      />
    </BFormFloatingLabel>

    <BFormGroup label="Color:" label-for="input-3" class="my-2">
      <BFormSelect id="input-3" v-model="chosenColor" :options="colors" />
    </BFormGroup>

    <div class="text-center mt-3">
      <BButton type="submit" variant="primary">Create Column</BButton>
    </div>
  </BForm>
</template>
