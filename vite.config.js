import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  // 加载环境变量
  const env = loadEnv(mode, process.cwd())
  
  // 确定当前是开发环境还是生产环境
  const isDevelopment = mode === 'development'
  
  console.log(`Building for ${mode} mode, env:`, env)
  
  return {
    plugins: [
      vue(),
      vueDevTools(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    },
    // 定义环境变量
    define: {
      'process.env.NODE_ENV': JSON.stringify(mode),
      'process.env.VUE_APP_ENV': JSON.stringify(env.VUE_APP_ENV || mode),
      // 使用基于环境的变量来决定是否使用代理
      'process.env.VUE_APP_USE_AI_PROXY': isDevelopment ? 'true' : 'false'
    },
    // 构建选项
    build: {
      // 生产环境会压缩，开发环境不压缩以便调试
      minify: mode === 'production',
      outDir: mode === 'development' ? 'dist-dev' : 'dist',
    }
  }
})
