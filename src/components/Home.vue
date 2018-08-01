<template>
  <Carousel autoplay style="margin: 60px;">
    <Carousel-item>
      <div class="carousel">
        <img src="../../static/hy.jpg" alt="">
      </div>
    </Carousel-item>
    <Carousel-item>
      <div class="carousel">欢迎来到Vue书店</div>
    </Carousel-item>
  </Carousel>
</template>
<script>
  export default {name: 'Home'}
</script>
<style>
  .carousel {
    width: 100%;
    height: 600px;
    font-size: 40px;
  }

  img {
    width: 100%;
    height: 600px;
  }
</style>

