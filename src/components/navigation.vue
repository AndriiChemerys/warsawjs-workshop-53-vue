<template>
  <nav>
    <RouterLink to="/">home</RouterLink>
    <RouterLink to="/about">about</RouterLink>
  </nav>
</template>
<script>
export default {
  name: 'Navigation'
}
</script>
<style scoped lang="scss">
nav {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
</style>