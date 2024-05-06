import { useStorage } from '@vueuse/core'

export default (key: string, defaultValue: any) => {
  return useStorage(key, defaultValue, sessionStorage)
}
