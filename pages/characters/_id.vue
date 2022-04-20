<template>
  <div class="character-container">
    <b-container class="character-box d-flex flex-column py-5 h-100">
      <div class="character-info flex-fill">
        <h1 class="character-name">{{this.character.name}}</h1>
        <ul class="character-detail">
          <li><span class="character-detail-key">Birth year:</span> {{this.character.birthYear}}</li>
          <li><span class="character-detail-key">Height:</span> {{this.character.height || '?'}} cm</li>
          <li><span class="character-detail-key">Mass:</span> {{this.character.mass || '?'}} kg</li>
          <li><span class="character-detail-key">Hair color:</span> {{this.character.hairColor || '?'}}</li>
          <li><span class="character-detail-key">Skin color:</span> {{this.character.skinColor || '?'}}</li>
          <li><span class="character-detail-key">Eye color:</span> {{this.character.eyeColor || '?'}}</li>
          <li><span class="character-detail-key">Gender:</span> {{this.character.gender || '?'}}</li>
          <li><span class="character-detail-key">Home world:</span> {{this.planet.name || '?'}}</li>
          <li><span class="character-detail-key">Species:</span> {{this.species.name || '?'}}</li>
          <li><span class="character-detail-key">Vehicles:</span> 
            <ul>
              <li v-for="item in vehicles" :key="item.id">{{item.name}}</li>
            </ul>
          </li>
          <li><span class="character-detail-key">Starships:</span> 
            <ul>
              <li v-for="item in starships" :key="item.id">{{item.name}}</li>
            </ul>
          </li>
          <li><span class="character-detail-key">Films:</span> 
            <ul>
              <li v-for="item in films" :key="item.id">{{item.title}}</li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="d-flex flex-column align-items-center">
        <b-button class="btn-back px-5" @click="goPrevious">Back</b-button>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      character: {},
      planet: {},
      species: {},
      vehicles: [],
      starships: [],
      films: []
    }
  },
  async created() {
    console.log(this.$route.params.id);
    let characterData = await this.$axios.$get(`/?query={person(id:"${this.$route.params.id}"){id name height mass hairColor skinColor eyeColor birthYear gender homeworld { id } species { id } vehicleConnection { edges { node { id } } } starshipConnection { edges { node { id } } } filmConnection { edges { node { id } } } } }`)
    this.character = characterData.data.person;
    console.log(this.character);

    if(this.character.homeworld) {
      let planetData = await this.$axios.$get(`/?query={planet(id:"${this.character.homeworld.id}"){name}}`);
      this.planet = planetData.data.planet;
    }
    
    if(this.character.species) {
      let speciesData = await this.$axios.$get(`/?query={species(id:"${this.character.species.id}"){name}}`);
      this.species = speciesData.data.species;
    }
    
    this.character.vehicleConnection.edges.forEach(el => {
      this.$axios.$get(`/?query={vehicle(id:"${el.node.id}"){id name}}`).then(data => {
        this.vehicles.push(data.data.vehicle);
      }).catch(err => {
        console.log(err);
      })
    })

    this.character.starshipConnection.edges.forEach(el => {
      this.$axios.$get(`/?query={starship(id:"${el.node.id}"){id name}}`).then(data => {
        this.starships.push(data.data.starship);
      }).catch(err => {
        console.log(err);
      })
    })

    this.character.filmConnection.edges.forEach(el => {
      this.$axios.$get(`/?query={film(id:"${el.node.id}"){id title}}`).then(data => {
        this.films.push(data.data.film);
      }).catch(err => {
        console.log(err);
      })
    })
  },
  methods: {
    goPrevious() {
      this.$router.go(-1);
    }
  }

}
</script>

<style lang="scss" scoped>
.character-container {

  .character-box {
    background-color: #f8f9fa;

    .character-info {

      .character-name {
        color: #eeb400;
        font-weight: bold;
      }

      .character-detail {
        list-style-type: none;

        ul{
          list-style-type: none;
        }

        li {
          margin-left: 20px;
          color: #6c757d;
        }

        .character-detail-key {
          color: #eeb400;
          font-weight: bold;
        }
      }
    }

    .btn-back {
      background-color: #FFFFFF;
      color: #eeb400;
      border-color: #eeb400;

      &:hover {
        background-color: #eeb400;
        color: #FFFFFF;
      }
    }
  }
}


</style>