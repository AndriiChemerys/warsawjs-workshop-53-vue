<template>
    This is country
</template>

<script >
    import {getCountryDetails} from '@/api'

    export default {
        name: 'CountryView',
        data(){
            return {
                details: {

                }
            }
        },
        async created() {
            console.log(this.$route.params.country_code)
            this.details = await getCountryDetails(this.$route.params.country_code)
        }
    }
</script>

<style lang="scss" scoped>

</style>