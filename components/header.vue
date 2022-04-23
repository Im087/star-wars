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
          <b-nav-item class="header-nav-item" to="/characters" exact-active-class="active">
            Characters
          </b-nav-item>
          <b-nav-item class="header-nav-item" :to="item.path" exact-active-class="active" v-for="item in recentLinks" :key="item.path">
            {{item.name}}
          </b-nav-item>
        </b-navbar-nav>
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
  computed: {
    recentLinks() {
      return this.$nuxt.$store.getters['recentLinks/getRecentLinks'];
    }
  },
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

  & /deep/ .navbar-toggler {

    .navbar-toggler-icon {
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28238, 180, 0, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
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