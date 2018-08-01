import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)
const state = {
  bookInfo: [{
    id: -1,
    intro: 'mdksandhjkashdhjska',
    name: '',
    howNew: 1.1,
    price: 1.1,
    publication: '',
    bookImageUrl: '',
  },
    {
      id: -1,
      intro: '',
      name: '',
      howNew: 1.1,
      price: 1.1,
      publication: '',
      bookImageUrl: '',
    }
    ,
    {
      id: -1,
      intro: '',
      name: '',
      howNew: 1.1,
      price: 1.1,
      publication: '',
      bookImageUrl: '',
    }
    ,
    {
      id: -1,
      intro: '',
      name: '',
      howNew: 1.1,
      price: 1.1,
      publication: '',
      bookImageUrl: '',
    },
    {
      id: -1,
      intro: '',
      name: '',
      howNew: 1.1,
      price: 1.1,
      publication: '',
      bookImageUrl: '',
    },
    {
      id: -1,
      intro: '',
      name: '',
      howNew: 1.1,
      price: 1.1,
      publication: '',
      bookImageUrl: '',
    },
    {
      id: -1,
      intro: '',
      name: '',
      howNew: 1.1,
      price: 1.1,
      publication: '',
      bookImageUrl: '',
    },
    {
      id: -1,
      intro: '',
      name: '',
      howNew: 1.1,
      price: 1.1,
      publication: '',
      bookImageUrl: '',
    },
    {
      id: -1,
      intro: '',
      name: '',
      howNew: 1.1,
      price: 1.1,
      publication: '',
      bookImageUrl: '',
    },
    {
      id: -1,
      intro: '',
      name: '',
      howNew: 1.1,
      price: 1.1,
      publication: '',
      bookImageUrl: '',
    },
    {
      id: -1,
      intro: '',
      name: '',
      howNew: 1.1,
      price: 1.1,
      publication: '',
      bookImageUrl: '',
    },
    {
      id: -1,
      intro: '',
      name: '',
      howNew: 1.1,
      price: 1.1,
      publication: '',
      bookImageUrl: '',
    },
    {
      id: -1,
      intro: '',
      name: '',
      howNew: 1.1,
      price: 1.1,
      publication: '',
      bookImageUrl: '',
    },
    {
      id: -1,
      intro: '',
      name: '',
      howNew: 1.1,
      price: 1.1,
      publication: '',
      bookImageUrl: '',
    },
    {
      id: -1,
      intro: '',
      name: '',
      howNew: 1.1,
      price: 1.1,
      publication: '',
      bookImageUrl: '',
    }
  ],
  cart: [],
  userInfo: {
    id: -1,
    userName: '',
    headImageUrl: '',
    college: '',
    phoneNumber: -1
  },
  userBooks:[],
}


const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});

export default store;
