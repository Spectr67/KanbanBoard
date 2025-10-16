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

const kanbanBoard = {
  caption: 'Канбан доска',
  columnsCount: 0,
  columns: [],

  moveRight(columnId, cardId) {
    const currentColumn = this.getColumnById(columnId)
    const movingCard = currentColumn.getCardById(cardId)
    const currentIndex = this.columns.indexOf(currentColumn)
    const nextColumn = this.columns[currentIndex + 1]
    const isLastColumn = currentIndex === this.columns.length - 1

    if (isLastColumn) {
      return
    }

    nextColumn.cards.push(movingCard)
    currentColumn.cards = currentColumn.cards.filter(
      c => movingCard.id !== movingCard.id
    )
    currentColumn.cardsCount = currentColumn.cards.length
    nextColumn.cardsCount = nextColumn.cards.length
  },

  addCard(text, author) {
    const card = createCard(text, author)
    if (this.columns.length > 0) this.columns[0].cards.push(card)
    this.columns[0].cardsCount = this.columns[0].cards.length
  },

  addColumn(title, cardsLimit) {
    const column = createColumn(title, cardsLimit)
    this.columns.push(column)
  },

  getColumnById(id) {
    return this.columns.find(column => column.id === id)
  },

  editColumnById(id, editColumnDto) {
    const column = this.getColumnById(id)
    delete editColumnDto.id
    Object.assign(column, editColumnDto)
  },

  removeColumnById(id) {
    const columnIndex = this.columns.findIndex(c => c.id === id)
    this.columns.splice(columnIndex, 1)
  },
}

// console.log(kanbanBoard.columns)
kanbanBoard.addColumn('plan', 4)
// console.log(kanbanBoard.columns)
kanbanBoard.addColumn('discussion', 3)
// console.log(kanbanBoard.columns)
kanbanBoard.addCard('write function 2+2 sum')
// console.log(kanbanBoard.columns[0])
// console.log(kanbanBoard.columns[0].cards)
const cardId = kanbanBoard.columns[0].cards[0].id
// console.log(cardId)
const columnId = kanbanBoard.columns[0].id
// console.log(columnId)

kanbanBoard.moveRight(columnId, cardId)
console.log(kanbanBoard.columns[0].cards)
console.log(kanbanBoard.columns[0].cardsCount)
console.log(kanbanBoard.columns[1].cards)
console.log(kanbanBoard.columns[1].cardsCount)

// надо ли ??
// getCardByIdx
// getColumntByIdx

// добавление колонки
// редактирование колонки
// удаление колонки
// менять местами колонки // смысла 0, но будет прикольная анимация

// добавление карточки, в самый левый столбец с учётом лимита

// функция set говорит о том, что мы в этой функции делаем присвоение.
