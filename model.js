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

    const movingCard = this.getCardById(cardId)

    const currentIndex = this.columns.indexOf(currentColumn)
    if (currentIndex === this.columns.length - 1) {
      currentColumn.isPushable = false
      console.log('Последняя колонка')
      return
    }

    const nextColumn = this.columns[currentColumn + 1]
    currentColumn.cards = currentColumn.cards.filter(c => c.id !== card.id)
    nextColumn.cards.push(movingCard)
  },

  addCard(text, author) {
    const card = createCard(text, author)
    if (this.columns.length > 0) this.columns[0].cards.push(card)
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

console.log(kanbanBoard.columns)
kanbanBoard.addColumn('plan', 4)
console.log(kanbanBoard.columns)
kanbanBoard.addColumn('discussion', 3)
console.log(kanbanBoard.columns)
kanbanBoard.addCard('write function 2+2 sum')
console.log(kanbanBoard.columns[0].cards)

kanbanBoard.columns[0].moveRight()

// надо ли ??
// getCardByIdx
// getColumntByIdx

// добавление колонки
// редактирование колонки
// удаление колонки
// менять местами колонки // смысла 0, но будет прикольная анимация

// добавление карточки, в самый левый столбец с учётом лимита

// функция set говорит о том, что мы в этой функции делаем присвоение.
