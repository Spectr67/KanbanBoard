const makeId = () => ((Math.random() * 0xffff_ffff) >>> 0).toString(16)

function createColumn(title, cardsLimit = 3) {
  return {
    id: makeId(),
    cards: [],
    cardsCount: 0,
    title: title,
    role: 'admin',
    cardsLimit: cardsLimit,
    isPushable: true,
    canEditCard: false,
    color: '#ff0077',

    getCardById(id) {
      return this.cards.find(card => card.id === id)
    },

    editCardById(id, editCardDto) {
      const card = this.getCardById(id)
      delete card.id
      Object.assign(card, editCardDto)
    },
  }
}

function createCard(text, author = 'anonymous') {
  return {
    id: makeId(),
    text: text,
    author: author,
    timestamp: 0,
  }
}

export { createCard, createColumn }
