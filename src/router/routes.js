
const routes = [
  // Auth
  {
    alias: '/login',
    path: '/signin',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Auth/Signin.vue') }
    ]
  },
  {
    alias: '/cadastro',
    path: '/signup',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Auth/Signup.vue') }
    ]
  },
  {
    alias: '/recuperar-senha',
    path: '/recover',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Auth/Recover.vue') }
    ]
  },
  // Dashboard
  {
    path: '/',
    component: () => import('layouts/DashBoardLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Dashboard/Index.vue') }
    ]
  },
  {
    alias: '/clientes',
    path: '/customers',
    component: () => import('layouts/DashBoardLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Dashboard/Customers.list.vue') }
    ]
  },
  {
    alias: '/clientes/editar/:id(\\d+)',
    path: '/customers/edit/:id(\\d+)',
    component: () => import('layouts/DashBoardLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Dashboard/Customers.edit.vue') }
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
