<template>
  <div class="layout-container d-flex flex-column justify-content-between">
    <Header />
    <Nuxt class="content-container" />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';

export default {
  components: {
    Header,
    Footer
  }

}
</script>

<style lang="scss" scoped>
.layout-container {
  height: 100%;

  .content-container {
    flex: 1 1 auto;
  }
}
</style>