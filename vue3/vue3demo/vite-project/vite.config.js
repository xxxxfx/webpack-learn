import { defineConfig } from 'vite'
import vue from '@vitejs/plugi n-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  alias: {
    '@': resolve(__dirname, 'src')
  },
  server: {
    port: 4000, // 设置服务启动端口号
    open: true, // 设置服务启动时是否自动打开浏览器
    cors: true, // 允许跨域
    // host: '0.0.0.0'
}
})
