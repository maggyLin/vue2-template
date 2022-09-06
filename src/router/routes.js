
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
  {
    path: '/excel-ex',
    name: 'excelEx',
    component: () => import('../views/examples/excel-ex'),
  },
  {
    path: '/excelByTable',
    name: 'excelByTable',
    component: () => import('../views/examples/excelByTable'),
  },
  {
    path: '/excelByImport',
    name: 'excelByImport',
    component: () => import('../views/examples/excelByImport'),
  },
]