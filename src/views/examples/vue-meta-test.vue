<template>
  <div>
    <h1>Vue Meta Page</h1>
    <h3>修改 title 與 head meta等</h3>
    <a href="https://vue-meta.nuxtjs.org/api/#plugin-options" target="_blank"> api document</a>
    <br><br>
    <a href="https://github.com/nuxt/vue-meta" target="_blank"> gitHub </a>

    <router-link class="fix-top" to="/">Home</router-link>
  </div>
</template>

<script>

export default {
  name: 'metaTest',
  metaInfo: {
    title: 'meta', //不指定會使用vue預設file name
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { name: 'description', content: 'home description' },
      { charset: 'utf-8' },
    ],
    link: [{ rel: 'favicon', href: 'favicon.ico' }],
  },
}
</script>

<style scoped>
a {
  color: #42b983;
}
.fix-top {
  position: fixed !important;
  top: 20px;
  right: 50px;
}
</style>
