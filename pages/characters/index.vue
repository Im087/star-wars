<template>
  <div class="characters-container">
    <b-container class="h-100">
      <b-row class="h-100">
        <b-col class="d-flex flex-column justify-content-between">
          <ul id="characters-list" class="characters-list">
            <li class="mt-3" v-for="item in currentCharacters" :key="item.id">
              <nuxt-link :to="{name:'characters-id', params: {id: item.id}}">
                <b-card :title="item.name">
                  <div class="d-flex justify-content-between flex-wrap">
                    <b-card-text>Birth year: {{item.birthYear}}</b-card-text>
                    <b-card-text>Height: {{item.height || '?'}} cm</b-card-text>
                    <b-card-text>Mass: {{item.mass || '?'}} kg</b-card-text>
                  </div>
                </b-card>
              </nuxt-link>
            </li>
          </ul>

          <b-pagination class="characters-pagination" v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="characters-list" align="center">
          </b-pagination>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      characters: [],
      filteredCharacters: [],
      perPage: 10,
      currentPage: 1
    }
  },
  computed: {
    rows() {
      if(this.keyword) {
        return this.filteredCharacters.length;
      } else {
        return this.characters.length;
      }
    },
    currentCharacters() {
      if(this.keyword) {
        this.filteredCharacters = this.characters.filter(el => {
          return el.name.toLowerCase().includes(this.keyword.toLowerCase());
        })

        return this.filteredCharacters.slice((this.currentPage - 1) * this.perPage, this.currentPage * this.perPage);
      } else {
        return this.characters.slice((this.currentPage - 1) * this.perPage, this.currentPage * this.perPage);
      }
    },
    keyword() {
      return this.$nuxt.$store.getters['keyword/getKeyword'];
    }
  },
  created() {
    this.getDataFromGrapgQL();
  },
  methods: {
    async getDataFromGrapgQL() {
      let allPeopleData = await this.$axios.$get('/?query={allPeople{edges{node{id}}}}');
      allPeopleData.data.allPeople.edges.forEach(async (el) => {
        let characterData = await this.$axios.$get(`/?query={person(id:"${el.node.id}"){id name height mass hairColor skinColor eyeColor birthYear gender homeworld { id } species { id } vehicleConnection { edges { node { id } } } starshipConnection { edges { node { id } } } filmConnection { edges { node { id } } } } }`);
        this.characters.push(characterData.data.person);
      });
    }
  }

}
</script>

<style lang="scss" scoped>
.characters-container {

  .characters-list {
    list-style-type: none;

    li {

      a {
        color: #eeb400;
        text-decoration: none;

        p {
          color: #6c757d;
        }
      }

      &:hover {
        
        a .card {
          background-color: #eeb400;
          color: #FFFFFF;
          border: 1px solid #eeb400;

          p {
            color: #FFFFFF;
          }
        }
      }
    }
  }

  .characters-pagination {

      & /deep/ .page-link {
        color:#eeb400;
      }

      & /deep/ .active .page-link{
        background-color: #eeb400;
        color:#FFFFFF;
        border-color: #eeb400;
      }
  }
}
</style>