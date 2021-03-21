<template>
  <h1>🌎 World Records 🌏</h1>
  <input type="text" v-model="filterInput" name="" id="">
  <ul>
    <li v-for="el in filteredList" v-bind:key="el">{{el.name}}</li>
  </ul>
</template>

<script>
    import {getCountryList} from '@/api'
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