<template>
  <div class="container" id="update">
    <Col span="5" align="center" v-for="(book,index) in books">
      <div v-bind:class="{'element-card' : true,'open' : rotaIndex == index}">
        <div class="front-facing">
          <p slot="title">{{book.name}}</p>
          <img class="bookimg" :src="book.bookImageUrl" alt="">
          <p>售价：{{book.price}}</p>
          <Button type="info" long @click="clickCard(index)">修改</Button>
          <!--<router-link :to="{ name:'detail',params:{id:book.id}}">详情</router-link>-->
        </div>
        <div class="back-facing">
          <Form :label-width="80">
            <FormItem label="书名" style="margin: 0">
              <!--单向绑定-->
              <label>
                <Input type="text" v-model="book.name"/>
              </label>
            </FormItem>
            <FormItem label="出版时间" style="margin: 0">
              <Input type="text" v-model="book.publication"/>
            </FormItem>
            <FormItem label="新旧程度" style="margin: 0">
              <Input type="text" v-model="book.howNew"/>
            </FormItem>
            <FormItem label="价格" style="margin: 0">
              <Input type="text" v-model="book.price"/>
            </FormItem>
            <FormItem label="简介" style="margin: 0">
              <Input type="text" v-model="book.intro"/>
            </FormItem>
          </Form>
          <br><br>
          <Button type="success" style="margin-top: 10px" @click="update(index)">完成</Button>
        </div>
      </div>
    </Col>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex';

  export default {

    name: 'update',
    computed: {
      ...mapGetters({
        books: 'books'  //TODO 需要修改
      })
    },
    data() {
      return {
        isActive: true,
        rotaIndex: -1,
        pageCount: 1,
        pageIndex: 1,
        indexBook: {
          id: -1,
          intro: '',
          name: '',
          howNew: 1.1,
          price: 1.1,
          publication: '',
          bookImageUrl: '',
        },
      }
    },
    methods: {
      clickCard: function (index) {
        this.rotaIndex = this.rotaIndex == index ? -1 : index;
        this.indexBook = {
          id: this.books[index].id,
          intro: this.books[index].intro,
          name: this.books[index].name,
          publication: this.books[index].publication,
          howNew: this.books[index].howNew,
          bookImageUrl: this.books[index].bookImageUrl,
          price: this.books[index].price
        }
      },
      update: function (index) {
        this.rotaIndex = this.rotaIndex == index ? -1 : index;
        this.$store.dispatch('updateBook', {
          oldBook: this.indexBook,
          bookId: this.books[index].id,
          intro: this.books[index].intro,
          name: this.books[index].name,
          publication: this.books[index].publication,
          howNew: this.books[index].howNew,
          bookImageUrl: this.books[index].bookImageUrl,
          price: this.books[index].price
        });
      },
    },
  }
</script>
