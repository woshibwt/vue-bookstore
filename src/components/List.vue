<template>
  <div class="container">
  <Col span="5" align="center" v-for="(book,index) in books" class="text">
    <div v-bind:class="{'element-card' : true,'open' : rotaIndex == index}" v-on:click="clickCard(index)">
      <div class="front-facing">
        <p slot="title">{{book.bookName}}</p>
        <img class="bookimg" :src="book.imgUrl" alt="">
        <p>售价：{{book.price}}</p>
        <!--<router-link :to="{ name:'detail',params:{id:book.id}}">详情</router-link>-->
      </div>
      <div class="back-facing">
        <p>纯铜是柔软的金属，表面刚切开时为红橙色带金属光泽，单质呈紫红色。延展性好，导热性和导电性高，因此在电缆和电气、电子元件是最常用的材料，也可用作建筑材料，可以组成众多种合金。</p>
        <Button type="success" long @click="buy(book)">加入购物车</Button>
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
        rotaIndex: -1
      }
    },
    created:function(){
      console.log("creat");
    },
    methods: {
      clickCard: function (index) {
        this.rotaIndex = this.rotaIndex == index ? -1 : index;
        console.log(this.books[index].bookName);
      },
      buy(book){
        console.log(book.bookName);
        if(this.$store.dispatch('buyBook',book).data == true)
        {
          this.$store.dispatch('deleteBook',book.id);
        }
      }
    }
  }
</script>
<style>
  .bookimg {
    height: 200px;
  }

  .rota-enter-active {
    transform: rotateY(-180deg);
  }

  .element-card {
    position: relative;
    width:  300px;
    height: 300px;
    padding: auto;
    -webkit-transform-origin: center top;
    transform-origin: center top;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transform: rotatey(0deg) translatex(0px) translatey(0px);
    transform: rotatey(0deg) translatex(0px) translatey(0px);
    /*-webkit-transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);*/
    /*transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);*/
    transition: all 0.6s linear;
    -webkit-transition: all 0.6s linear;
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.4);
    cursor: pointer;
    margin:5px;
    z-index: 50;
  }

  .element-card:hover {
    -webkit-transform-origin: center top;
    transform-origin: center top;
    -webkit-transform: rotatey(30deg) translatex(0px) translatey(0px);
    transform: rotatey(30deg) translatex(0px) translatey(0px);
  }

  .element-card.open {
    -webkit-transform: rotatey(-180deg) scale(1.5);
    transform: rotatey(-180deg) scale(1.5);
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
    z-index: -1;
  }

  .element-card .back-facing {
    -webkit-transform: rotateY(180deg) translateZ(0px);
    transform: rotateY(180deg) translateZ(0px);
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
    margin: 0px;
  }

  html,body {
    position:relative;
    height:100%;
    margin:0;
    padding:0;
  }
  body {
    background-color:#eeeeee;
    font-family:'Microsoft YaHei','Lantinghei SC','Open Sans',Arial,'Hiragino Sans GB','STHeiti','WenQuanYi Micro Hei','SimSun',sans-serif;
    font-size:16px;
    -webkit-transform:translate3d(0,0,0);
    transform:translate3d(0,0,0);
    /*background:-webkit-linear-gradient(315deg,#2980b9 0%,#9b59b6 100%);*/
    /*background:linear-gradient(135deg,#2980b9 0%,#9b59b6 100%);*/
    filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e5799',endColorstr='#7db9e8',GradientType=1 );
  }

  .container {
    position:relative;
    width:100%;
    min-width: 100%;
    max-width:300px;
    min-height:100%;
    margin:10px auto;
    padding:-100px;
    box-sizing:border-box;
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-orient:horizontal;
    -webkit-box-direction:normal;
    -ms-flex-direction:row;
    flex-direction:row;
    -ms-flex-wrap:wrap;
    flex-wrap:wrap;
    -webkit-box-pack:center;
    -ms-flex-pack:center;
    justify-content:center;
    -webkit-box-align:center;
    -ms-flex-align:center;
    align-items:center;
  }
</style>

