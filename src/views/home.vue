<template>
  <h1>🌎 World Records 🌏</h1>
  <input type="text" v-model="filterInput" name="" id="">
  <ul v-if="countryList.length">
    <li v-for="el in filteredList" v-bind:key="el">
      <RouterLink v-bind:to="getCountryCode(el.href)">{{el.name}}</RouterLink>
    </li>
  </ul>
  <h2 v-else>Loading...</h2>
</template>
<script>
import {getCountryList, extractAlphaCode} from '@/api'
export default {
  name: 'HomeView',
  data() {
    return {
      countryList: [],
      filterInput: ''
    }
  },
  async created() {
    this.countryList = await getCountryList()
    console.log(this.$router)
  },
  methods: {
    getCountryCode(href) {
      return extractAlphaCode(href)
    }
  },
  computed: {
    filteredList() {
      return this.countryList
        .filter((country) => country.name.toLowerCase()
        .includes(this.filterInput.toLocaleLowerCase()))
    }
  }
}
</script>
<style>
</style>