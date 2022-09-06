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
import { apiUserGetToken, apiUserLoging } from '../../api/user-service'

export default {
  name: 'axiosex',
  data() {
    return {
      test: 1,
    }
  },
  created() {},
  methods: {
    getExample() {
      //不封裝
      // this.axios({
      //   method: 'get',
      //   url: '',
      //   headers: {'Content-Type': 'application/json; charset=utf-8'}
      // })
      //   .then(function (response) {
      //     // handle success
      //     console.log(response)
      //   })
      //   .catch(function (error) {
      //     // handle error
      //     console.log(error)
      //   })

      //封裝
      apiUserGetToken().then(function (response) {
        console.log(response)
      })
    },
    postExample() {
      //不封裝
      // this.axios({
      //   method: 'post',
      //   url: '',
      //   data: {
      //     userId: '',
      //     password: '',
      //   },
      //   headers: { 'Content-Type': 'application/json; charset=utf-8' },
      // })
      //   .then(function (response) {
      //     // handle success
      //     console.log(response)
      //   })
      //   .catch(function (error) {
      //     // handle error
      //     console.log(error)
      //   })

      //封裝
      apiUserLoging({ userId: 'admin', password: '123456' }).then(function (
        response
      ) {
        console.log(response)
      })

      //可以直接使用this,不用轉換self
      apiUserLoging({ userId: 'admin', password: '123456' }).then(
        (data) => {
          console.log(data)
          console.log(this.test)
        },
        (error) => {
          console.log(error)
        }
      )
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
