import {
  BUY_BOOK, GET_PAGE_COUNT, GET_BOOK,
  GET_USER_BOOKS, BOOK_ADD, BOOK_UPDATE, BOOK_DELETE,
  GET_CART, CANCEL_BUY,
  LOGIN, REGISTER
} from './types'

const actions = {
  buyBook: ({commit}, book) => commit('BUY_BOOK', book),
  getPageCount: ({commit}) => commit('GET_PAGE_COUNT'),
  getBook: ({commit}, books) => commit('GET_BOOK', books),

  getUserBooks: ({commit}) => commit('GET_USER_BOOKS'),
  addBook: ({commit}, book) => commit('BOOK_ADD', book),
  updateBook: ({commit}, book) => commit('BOOK_UPDATE', book),
  deleteBook: ({commit}, id) => commit('BOOK_DELETE', id),

  getCart: ({commit}) => commit('GET_CART'),
  cancelBook: ({commit}, id) => commit('CANCEL_BUY', id),

  login: ({commit}, loginInfo) => commit('LOGIN', loginInfo),
  register: ({commit}, userName, password, headImageUrl, college, phoneNumber) => commit('REGISTER', userName, password, headImageUrl, college, phoneNumber)
}
export default actions
