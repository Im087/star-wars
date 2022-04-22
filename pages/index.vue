<template>
  <div class="home-container d-flex flex-column justify-content-around">
    <b-carousel id="home-carousel" :interval="4000" controls indicators>
      <b-carousel-slide img-src="@/assets/img/star-wars-Macbook-Wallpaper.jpg">
      </b-carousel-slide>
      <b-carousel-slide img-src="@/assets/img/star-wars-pc-Wallpaper.jpg">
      </b-carousel-slide>
      <b-carousel-slide img-src="@/assets/img/star-wars-Wallpaper.jpg">
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
