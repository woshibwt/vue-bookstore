<template>
  <div class="container">
    <Col span="5" align="center" v-for="(book,index) in books">
      <div v-bind:class="{'element-card' : true,'open' : rotaIndex == index}" v-on:click="clickCard(index)">
        <div class="front-facing">
          <p slot="title">{{book.name}}</p>
          <img class="bookimg" :src="book.bookImageUrl" alt="">
          <p>售价：{{book.price}}</p>
          <!--<router-link :to="{ name:'detail',params:{id:book.id}}">详情</router-link>-->
        </div>
        <div class="back-facing">
          <p>{{book.intro}}</p>
          <button @click="buy(book)">加入购物车</button>
        </div>
      </div>
    </Col>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex';

  export default {

    name: 'List',
    computed: {
      ...mapGetters({
        books: 'books'
      })
    },
    data() {
      return {
        isActive: true,
        rotaIndex: -1,
        pageCount: 1,
        pageIndex: 1
      }
    },
    created: function () {
      this.pageCount = this.$store.dispatch('getPageCount');
    },
    methods: {
      clickCard: function (index) {
        this.rotaIndex = this.rotaIndex == index ? -1 : index;
        console.log(this.books[index].bookName);
      },
      buy(book) {
        console.log(book.bookName);
        if (this.$store.dispatch('buyBook', book) == true) {
          this.$store.dispatch('deleteBook', book.id);
        }
      }
    }
  }
</script>
<style>
  body {
    width: 1800px;
  }

  .bookimg {
    height: 200px;
  }

  .element-card {
    position: relative;
    width: 300px;
    height: 300px;
    padding: auto;
    -webkit-transform-origin: center top;
    transform-origin: center top;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    transition: all 0.6s linear;
    -webkit-transition: all 0.6s linear;
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.4);
    cursor: pointer;
    margin: 5px;
    z-index: 50;
  }

  .element-card:hover {
    -webkit-transform-origin: center top;
    transform-origin: center top;
    transform: rotateY(30deg) translateX(0px) translateY(0px);
  }

  .element-card.open {
    -webkit-transform: rotateY(-180deg) scale(1.5);
    transform: rotateY(-180deg) scale(1.5);
    z-index: 99;
  }

  .element-card .front-facing {
    -webkit-transform: rotateY(0deg) translateZ(2px);
    transform: rotateY(0deg) translateZ(2px);
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #ecf0f1;
    border: 2px white solid;
    border-radius: 5px;
    z-index: 1;
  }

  .element-card .back-facing {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #ecf0f1;
    border: 2px white solid;
    border-radius: 5px;
    padding: 20px;
    text-align: center;
    overflow: hidden;
  }

  .element-card .back-facing p {
    color: #666;
    text-align: justify;
    text-indent: 2em;
    line-height: 22px;
    font-size: 13px;
    margin: 0;
  }

  .container {
    margin-top: 60px;
    left: 0;
    right: 0;
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
</style>

