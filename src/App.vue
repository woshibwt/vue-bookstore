<template>
  <div>
    <nav-bar :style="{position:'fixed',width:'100%',top:'0',height:'60px'}"></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
  import NavBar from './components/NavBar'

  export default {
    name: 'app',
    components: {
      'nav-bar': NavBar,
    }
  }
</script>
<style>
  .bookimg {
    height: 200px;
  }
  .text{
    text-align: center;
  }
  .listContainer {
    padding-top: 30px;
  }
</style>


