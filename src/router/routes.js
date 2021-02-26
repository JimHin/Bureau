
const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      { 
        path: '', 
        component: () => import('pages/PageTodo.vue') 
      },
      { 
        path: '/settings', 
        component: () => import('pages/PageSettings.vue') 
      },
      { 
        path: '/notes', 
        component: () => import('pages/PageNote.vue') 
      },
      { 
        path: '/projects', 
        component: () => import('pages/PageProject.vue') 
      },
      { 
        path: '/meets', 
        component: () => import('pages/PageMeet.vue') 
      }
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
