<template>
  <Col>
    <router-link to="add">
      <Tabs type="card" @click.native="bwt('dsa')">
        <TabPane label="标签一" name="1"></TabPane>
        <TabPane label="标签二" name="2"></TabPane>
        <TabPane label="标签三" name="3"></TabPane>
      </Tabs>
    </router-link>
    <div>
      <router-view></router-view>
    </div>
  </Col>
</template>
<script>
  import {mapGetters} from 'vuex';

  export default {
    name: 'Manager',
    computed: {
      ...mapGetters({
        books: 'books'
      }),
      bookDetail() {
        let bId = this.$route.params.id;
        return this.books.find(function (item) {
          return item.id == bId;
        })
      }
    },
    methods: {
      bwt(name) {
        console.log("djsajhd");
      }
    }
  }
</script>
<style>
  body {
    background-color: #eeeeee;
    font-family: 'Microsoft YaHei', 'Lantinghei SC', 'Open Sans', Arial, 'Hiragino Sans GB', 'STHeiti', 'WenQuanYi Micro Hei', 'SimSun', sans-serif;
    font-size: 16px;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    background: -webkit-linear-gradient(315deg, #2980b9 0%, #9b59b6 100%);
    background: linear-gradient(135deg, #2980b9 0%, #9b59b6 100%);
  }
</style>

