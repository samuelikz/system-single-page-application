
const routes = [
  {
    path: '/',
    component: () => import('layouts/Controle.vue'),
    children: [
      { path: '', component: () => import('pages/Controle.vue') }
    ]
  },
  {
    path: '/index',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/index.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
