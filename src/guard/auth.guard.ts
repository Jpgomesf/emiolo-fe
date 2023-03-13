import { useAuthStore } from '@/stores/auth.store'
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

export const authGuard = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext): void => {
  const isAuthenticated = useAuthStore().isAuthenticated
  if (!isAuthenticated) {
    next({ name: 'Login' })
  } else {
    next()
  }
}