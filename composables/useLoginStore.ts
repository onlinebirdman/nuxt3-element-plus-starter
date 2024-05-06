import { defineStore } from 'pinia'
import { STORAGE_KEY_LOGIN_TOKEN } from '~/constants'
export default defineStore('login', () => {
  const form = reactive({
    username: '',
    password: '',
  })
  const token = useSessionStorage(STORAGE_KEY_LOGIN_TOKEN, '')

  const login = async () => {
    const token = 'test token'
    setToken(token)
    ElMessage.success('登录成功')
    await nextTick()
    useRouter().replace('/')
  }

  const logout = () => {
    token.value = ''
    useRouter().replace('/login')
  }

  function setToken(tk: string) {
    token.value = tk
  }
  function getToken() {
    return token.value
  }
  return {
    form,
    login,
    logout,
    setToken,
    getToken,
  }
})
