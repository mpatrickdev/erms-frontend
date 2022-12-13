
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
    ]
  },
  {
    path: '/dashboard',
    component: () => import('layouts/DashboardLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'products', name: 'product-list', component: () => import('pages/product/ProductListPage.vue') },
      { path: 'products/:id', name: 'product-edit', component: () => import('pages/product/ProductNewPage.vue') },
      { path: 'products/new', name: 'product-new', component: () => import('pages/product/ProductNewPage.vue') },
      { path: 'settings', component: () => import('pages/SettingsPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
