<template>
      <router-view></router-view>
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
  }
</script>
<style>
</style>

