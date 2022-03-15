<template>
  <div>
    <h1>Axios Ex Page</h1>
    <a href="https://axios-http.com/docs/intro" target="_blank"> document</a>
    <br><br>

    <b-button variant="primary" @click="getExample">Get EX</b-button>
    <br><br>

    <b-button variant="primary" @click="postExample">POST EX</b-button>
    <br><br>

    <router-link class="fix-top" to="/">Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'axiosex',
  data() {
    return {}
  },
  created() {},
  methods: {
    getExample() {
      this.axios({
        method: 'get',
        url: '',
        headers: {'Content-Type': 'application/json; charset=utf-8'}
      })
        .then(function (response) {
          // handle success
          console.log(response)
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
    },
    postExample() {
      this.axios({
        method: 'post',
        url: '',
        data: {
          userId: 'admin',
          password: '123456',
        },
        headers: {'Content-Type': 'application/json; charset=utf-8'}
      })
        .then(function (response) {
          // handle success
          console.log(response)
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
    },
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
