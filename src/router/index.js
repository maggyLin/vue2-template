import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import VueMeta from 'vue-meta'

Vue.use(VueRouter)

Vue.use(VueMeta, {
  refreshOnceOnNavigation: true,
  // keyName: 'meta', //在template中對應名稱,預設metaInfo 
})

const router = new VueRouter({
  routes,
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
});

// router.beforeEach((routeTo, routeFrom, next) => {
//   // get url para : routeTo.query.{name}
//   // enter url : routeTo.name
//   // if (routeTo.name != "login") router.push('/login');

//   next();
// });

export default router