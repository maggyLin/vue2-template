<template>
  <div>
    <h1>Home Page</h1>
    <h3>Views</h3>
    <div>
      <router-link to="meta-test">go to vue meta test</router-link>
    </div>
    <div>
      <router-link to="axios-ex">go to axios example</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
