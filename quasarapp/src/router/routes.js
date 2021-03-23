
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'dashboard', component: () => import('src/pages/dashboard.vue') },
      { path: 'users', component: () => import('src/pages/user.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('src/pages/login.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
