export default defineNuxtRouteMiddleware((to) => {
  if (to.path.startsWith('/auth')) {
    to.meta.layout = 'auth'
  }
})
