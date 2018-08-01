<template>
  <Menu mode="horizontal" active-name="3">
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
          <MenuItem name="add">增加图书</MenuItem>
        </router-link>
        <router-link to="/manager/update">
          <MenuItem name="update">更新图书</MenuItem>
        </router-link>
        <router-link to="/manager/delete">
          <MenuItem name="delete">删除图书</MenuItem>
        </router-link>
      </MenuGroup>
    </Submenu>

    <router-link to="/cart">
      <Menu-item name="4">
        <Icon type="ios-cart-outline"></Icon>
        购物车
      </Menu-item>
    </router-link>

    <router-link to="/login">
      <Menu-item name="5">
        <Icon type="ios-contact"></Icon>
        登陆/注册
      </Menu-item>
    </router-link>
  </Menu>
</template>
