export default defineNuxtRouteMiddleware((to, from) => {
  const loginStore = useLoginStore()
  if (to.name === 'login')
    return

  if (!loginStore.getToken())
    return navigateTo('/login')
})
