import {
  BUY_BOOK, GET_PAGE_COUNT, GET_BOOK,
  GET_USER_BOOKS, BOOK_ADD, BOOK_UPDATE, BOOK_DELETE,
  GET_CART, CANCEL_BUY,
  LOGIN, REGISTER
} from './types'
import axios from 'axios';

axios.baseUrl = 'http://localhost:8080';
const mutations = {
  [BUY_BOOK](state, book) { //1(成功），2（失败），3（添加了自己的书）
    axios.post('/list/buyBook', {userId: state.userInfo.id, bookId: book.id})
      .then(response => {
        if (response.data == 1) {
          state.cart.push(book);
          state.bookInfo.remove(book);
        } else if (response.data == 2) {
          alert('加入购物车失败，请重试！');
        } else if (response.data == 3) {
          alert('这是你自己的书！');
        }
        return response.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  [GET_PAGE_COUNT](state) {
    axios.post('/list/getPageCount')
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  [GET_BOOK](state, pageNum) {
    axios.post('/list/getBook', {pageNum: pageNum})
      .then(response => {
        if (response.data != null) {
          state.bookInfo = response.data;
        } else {
          alert('获取失败，请重新获取！');
        }
      })
      .catch(error => {
        console.log(error);
      });
  },

  [GET_USER_BOOKS](state) {
    axios.post('/list/getBook', {userId: state.userInfo.id})
      .then(response => {
        if (response.data != null) {
          state.userBooks = response.data;
        }
        else {
          alert('请重新获取');
        }
      })
      .catch(error => {
        console.log(error);
      });
  },
  [BOOK_ADD](state, book) {
    axios.post('/manager/addBook',
      {
        userId: state.userInfo.id,
        bookId: book.id,
        intro: book.intro,
        name: book.name,
        publication: book.publication,
        howNew: book.howNew,
        bookImageUrl: book.bookImageUrl,
        price: book.price
      })
      .then(response => {
        if (response.data == true) {
          state.userBooks.push(book);
          alert('添加成功！');
        }
        else {
          alert('请重新添加！');
        }
      })
      .catch(error => {
        console.log(error);
      });
  },
  [BOOK_UPDATE](state, book) {
    axios.post('/manager/updateBook',
      {
        id: book.id,
        intro: book.intro,
        name: book.name,
        publication: book.publication,
        howNew: book.howNew,
        bookImageUrl: book.bookImageUrl,
        price: book.price
      })
      .then(response => {
        if (response.data == true) {
          for (let j = 0; j < state.userBooks.length; j++) {
            if (state.userBooks[j].id == book.id) {
              state.userBooks[j] = book;
            }
          }
          alert('修改成功');
        }
        else {
          alert('修改失败');
        }
      })
      .catch(error => {
        console.log(error);
      });
    state.bookInfo.map(item => {
      if (item.id == book.id) {
        return book
      }
    })
  },
  [BOOK_DELETE](state, bookId) {
    axios.post('/manager/deleteBook',
      {
        bookId: bookId,
      })
      .then(response => {
        if (response.data == true) {
          for (let j = 0; j < state.userBooks.length; j++) {
            if (state.userBooks[j].id == book.id) {
              state.userBooks.remove(j);
            }
          }
          alert('删除成功');
        }
        else {
          alert('删除失败');
        }
      })
      .catch(error => {
        console.log(error);
      });
    state.bookInfo = state.bookInfo.filter(item => {
      return item.id != bookId;
    })
  },

  [GET_CART](state) {
    axios.post('/cart/getCart', {userId: state.userInfo.id})
      .then(response => {
        if (response.data == true) {
          state.cart = state.cart.filter(item => {
            if (item.id == id)
              item.num = 0;
            return item.id != id;
          })
        }
        else {
          alert('取消失败，请重试！');
        }
      })
      .catch(error => {
        console.log(error);
      });
  },
  [CANCEL_BUY](state, bookId) {
    axios.post('/cart/cancelBook', {userId: state.userInfo.id, bookId: bookId})
      .then(response => {
        if (response.data != null) {
          state.cart = response.data;
        }
        else {
          alert('取消失败，请重试！');
        }
      })
      .catch(error => {
        console.log(error);
      });
  },

  [LOGIN](state, loginInfo) {
    axios.post('/login',
      {
        userName: loginInfo.userName,
        password: loginInfo.password
      })
      .then(response => {
        if (response.data != null) {
          console.log(response.data.id);
          state.userInfo.userName = response.data.userName; //TODO 等待后端提供变量名
          alert('登录成功');
        } else {
          alert('密码或用户名错误，请重新输入!');
        }
      })
      .catch(error => {
        console.log(error);
      });
  },
  [REGISTER](state, registerInfo) {
    console.log(registerInfo);
    axios.post('/register',
      {
        userName: registerInfo.userName,
        password: registerInfo.password,
        headImageUrl: registerInfo.headImageUrl,
        college: registerInfo.college,
        phoneNumber: registerInfo.phoneNumber
      })
      .then(response => {
        if (response.data != null) {
          console.log(response.data.id);
          state.userInfo = response.data; //TODO 等待后端提供变量名
          alert('注册成功！');
        } else {
          alert('用户名已被使用，请更换用户名！');
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
}
export default mutations
