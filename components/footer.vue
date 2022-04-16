<template>
  <footer class="footer-container">
    <b-navbar class="d-flex flex-column" type="dark" variant="dark">
      <b-navbar-brand class="footer-logo">
        <nuxt-link to="/" active-class="header-active">
          <img src="@/assets/img/star-wars-logo-3-1.png" alt="logo">
        </nuxt-link>
      </b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item disabled>
          ©Copyright
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer-container {

  .footer-logo {

    img {
      height: 50px;
    }
  }
}
</style>