## close eslint
* package.json -* eslintConfig -* root : false 不啟用

## 部屬url設定
* 進入點非根目錄,需要再vue.config.js指定資料夾

## vue router
* install : yarn add vue-router@3
* 建立 router file 
* 建立 @/router/index.js : 進入點 (匯入route.js)
* 建立 @/router/route.js : route 整理 (ps.name要/)
* 註冊 : @/main.js (router)

## vue meta 
* info : https://www.npmjs.com/package/vue-meta
* api :　https://vue-meta.nuxtjs.org/api/#plugin-options
* install : yarn add vue-meta
* 註冊 : @/router/index.js (VueMeta)
* 使用參考 : @/views/example/vue-meta-test.vue

## vue bootsrap
* info : https://bootstrap-vue.org/docs
* install : yarn add bootstrap@v4.5.3 bootstrap-vue
* 註冊 : @/main.js (BootstrapVue)

## axios
* info : https://axios-http.com/docs/intro
* install : yarn add axios vue-axios
* 註冊 : @/main.js (VueAxios, axios)
* 使用參考 : @/views/example/axios-ex.vue