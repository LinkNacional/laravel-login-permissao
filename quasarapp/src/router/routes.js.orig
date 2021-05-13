
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'dashboard', component: () => import('src/pages/dashboard.vue') },
      { path: 'users', component: () => import('src/pages/users/user.vue') },
      { path: '/users/permission/:id', component: () => import('src/pages/users/permissions.vue'), props: true },
      { path: '/users/edit/:id', component: () => import('src/pages/users/edit.vue'), props: true },
      { path: 'parts', component: () => import('src/pages/parts/part.vue') },
      { path: '/parts/create', component: () => import('src/pages/parts/create.vue') },
      { path: '/called/new', component: () => import('src/pages/called/new.vue'), props: true }
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
