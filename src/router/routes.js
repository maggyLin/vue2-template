
export default [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/examples/home'),
  },
  {
    path: '/meta-test',
    name: 'metaTest',
    component: () => import('../views/examples/vue-meta-test'),
  },
  {
    path: '/axios-ex',
    name: 'axiosEx',
    component: () => import('../views/examples/axios-ex'),
  },
]