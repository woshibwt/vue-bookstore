<template>
  <Row>
    <Col span="18" offset="3">
      <Menu mode="horizontal" active-name="1">
        <router-link to="/home">
          <Menu-item name="1">
            <Icon type="ios-paper"></Icon>
            首页
          </Menu-item>
        </router-link>
        <router-link to="/list">
          <Menu-item name="2">
            <Icon type="ios-people"></Icon>
            书单
          </Menu-item>
        </router-link>
        <Submenu name="3">
          <template slot="title">
            <Icon type="ios-people"></Icon>
            管理图书
          </template>
          <MenuGroup title="操作">
            <router-link to="/manager/add">
              <MenuItem name="3-1">增加图书</MenuItem>
            </router-link>
            <router-link to="/manager/update">
              <MenuItem name="3-2">更新图书</MenuItem>
            </router-link>
            <router-link to="/manager/delete">
              <MenuItem name="3-3">删除图书</MenuItem>
            </router-link>
          </MenuGroup>
        </Submenu>

        <router-link to="/cart">
          <Menu-item name="4">
            <Icon type="ios-cart-outline"></Icon>
            购物车
            <Badge :count="num" class-name="demo-badge-alone"></Badge>
          </Menu-item>
        </router-link>
      </Menu>
      <br>
      <router-view></router-view>
    </Col>
  </Row>
</template>

<script>
  import {mapGetters} from 'vuex'
  import Home from './components/Home.vue';

  export default {
    name: 'app',
    computed: {
      ...mapGetters({
        buyBooks: 'buyBooks'
      }),
      num() {
        return this.buyBooks.length
      }
    },
    components: {
      [Home.name]: Home
    }
  }
</script>


