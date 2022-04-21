<template>
  <header class="header-container">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand class="header-logo">
        <nuxt-link to="/" active-class="header-active">
          <img src="@/assets/img/star-wars-logo-3-1.png" alt="logo">
        </nuxt-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item class="header-nav-item" to="/characters" active-class="active">
            Characters
          </b-nav-item>
          <b-nav-item class="header-nav-item" to="/person" active-class="active">
            Person
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="header-filter mr-sm-2" placeholder="Filter by name" @input="setKeyword"></b-form-input>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
export default {
  methods: {
    setKeyword(value) {
      this.$nuxt.$store.dispatch('keyword/setKeyword', value);
    }
  }

}
</script>

<style lang="scss" scoped>
.header-container {

  .header-logo {

    img {
      height: 27px;
    }
  }

  .header-nav-item {

    a {
      color: #FFFFFF;

      &.active {
        color:#eeb400;
        font-weight: bold;
      }

      &:hover {
        color:#eeb400;
      }
    }
    
  }

  .header-filter {
    color: #eeb400;
  }
}
</style>