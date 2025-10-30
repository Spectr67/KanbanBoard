<script>
const randId = () => window.crypto.randomUUID().split('-').at(0)

export default {
  data() {
    return {
      title: 'SimpleBoard',
      columnCaption: '',
      cardText: '',
      columns: [
        {
          id: 1,
          caption: 'Запланировано',
          cards: [
            { id: 1, text: 'Придумать задачи' },
            { id: 2, text: 'Добавить задачи на доску' },
          ],
        },
      ],
    }
  },

  methods: {
    handleColumnSubmit() {
      const column = this.createColumn(this.columnCaption)
      this.columns.push(column)
    },

    handleCardSubmit() {
      const card = this.createCard(this.cardText)
      this.columns.at(0).cards.push(card)
    },

    createColumn(caption) {
      return {
        id: randId(),
        caption,
        cards: [],
      }
    },

    createCard(text) {
      return {
        id: randId(),
        text,
      }
    },
    getColumnById(id) {
      return this.columns.find(column => column.id == id)
    },

    getCardById(column, cardId) {
      return column.cards.find(card => card.id == cardId)
    },

    moveRight(columnId, cardId) {
      const currentColumn = this.getColumnById(columnId)
      if (!currentColumn) return

      const movingCard = this.getCardById(currentColumn, cardId)
      const currentIndex = this.columns.indexOf(currentColumn)
      const nextColumn = this.columns[currentIndex + 1]
      const isLastColumn = currentIndex === this.columns.length - 1

      if (isLastColumn || !movingCard) return

      currentColumn.cards = currentColumn.cards.filter(c => c.id !== cardId)
      nextColumn.cards.push(movingCard)
    },
  },
}
</script>

<template>
  <main>
    <h1>{{ title }}</h1>
    <form
      id="dd"
      @submit.prevent="handleColumnSubmit"
      class="columns-submitter"
    >
      <input v-model="columnCaption" type="text" name="columnCaption" />
      <button form="dd" type="submit">Создать колонку</button>
    </form>
    <form @submit.prevent="handleCardSubmit" class="cards-submitter">
      <input v-model="cardText" type="text" name="cardText" />
      <button type="submit">Создать карточку</button>
    </form>
    <section class="columns">
      <article v-for="column of columns" :key="column.id" class="column">
        <h2>
          <u>{{ column.id }}</u>
          <span> - </span>
          <i>{{ column.caption }}</i>
        </h2>
        <ul class="cards">
          <li v-for="card of column.cards" :key="card.id" class="card">
            <u>{{ card.id }}</u>
            <span> - </span>
            <i>{{ card.text }}</i>
            <button @click="moveRight(column.id, card.id)">next</button>
          </li>
        </ul>
      </article>
    </section>
  </main>
</template>

<style scoped>
button {
  width: 100px;
}
</style>
