import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import actions from './actions'
import mutations from  './mutations'

Vue.use(Vuex)
const state = {
  bookInfo: [{
    id: 1, bookName: 'Vue权威指南',
    imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495629494117&di=5a934908d8cfb3bdb57bed9880ff0d13&imgtype=0&src=http%3A%2F%2Fjiuye-res.jikexueyuan.com%2Fzhiye%2Fshowcase%2Fattach-6ae2b991-803f-4b63-bda9-89434d70d665.jpg',
    price: 10
  }, {
    id: 2, bookName: 'Vue实践揭秘',
    imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495629494117&di=5a934908d8cfb3bdb57bed9880ff0d13&imgtype=0&src=http%3A%2F%2Fjiuye-res.jikexueyuan.com%2Fzhiye%2Fshowcase%2Fattach-6ae2b991-803f-4b63-bda9-89434d70d665.jpg',
    price: 12
  },
    {
      id: 3, bookName: 'Vue深入浅出',
      imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495629494117&di=5a934908d8cfb3bdb57bed9880ff0d13&imgtype=0&src=http%3A%2F%2Fjiuye-res.jikexueyuan.com%2Fzhiye%2Fshowcase%2Fattach-6ae2b991-803f-4b63-bda9-89434d70d665.jpg',
      price: 33
    },
    {
      id: 4, bookName: 'Vue快速入门',
      imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495629494117&di=5a934908d8cfb3bdb57bed9880ff0d13&imgtype=0&src=http%3A%2F%2Fjiuye-res.jikexueyuan.com%2Fzhiye%2Fshowcase%2Fattach-6ae2b991-803f-4b63-bda9-89434d70d665.jpg',
      price: 33
    }],
  added: [],
}


const store =  new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});

export default store;
