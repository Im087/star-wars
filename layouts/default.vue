<template>
  <div class="layout-container d-flex flex-column justify-content-between">
    <Header />
    <transition name="fade">
      <Nuxt class="flex-fill" keep-alive />
    </transition>
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
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>