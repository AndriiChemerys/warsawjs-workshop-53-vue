<template>
  <Navigation/>
  <RouterView/>
</template>

<script>
  import Navigation from '@/components/navigation.vue'

  export default {
    name: 'World Records',
    components: {
      Navigation
    }
  }
</script>

<style lang="scss">

</style>