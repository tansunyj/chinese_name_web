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
    base: '/', // 确保基础路径正确
    publicDir: 'public', // 明确指定 public 目录
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
      'process.env.VUE_APP_USE_AI_PROXY': isDevelopment ? 'true' : 'false'
    },
    // 构建选项
    build: {
      // 生产环境会压缩，开发环境不压缩以便调试
      minify: mode === 'production',
      outDir: 'dist',
      assetsDir: 'assets',
      // 确保生成 source map
      sourcemap: true,
      // 确保复制 public 目录下的文件
      copyPublicDir: true,
      // 优化构建选项
      rollupOptions: {
        output: {
          manualChunks: {
            'vue-vendor': ['vue', 'vue-router', 'vue-i18n'],
            'ant-design': ['ant-design-vue'],
          },
          // 确保静态资源使用正确的命名
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
        }
      },
      // 确保正确处理 CSS
      cssCodeSplit: true,
      // 添加预加载指令
      modulePreload: {
        polyfill: true
      },
      // 添加 SPA 回退配置
      target: 'esnext',
      ssrManifest: false,
      emptyOutDir: true
    },
    // 添加 CSS 相关配置
    css: {
      // 启用 CSS source maps
      devSourcemap: true,
      // 添加 PostCSS 配置
      postcss: {
        plugins: []
      }
    },
    // 优化开发服务器配置
    server: {
      host: true,
      port: 5173,
      strictPort: true,
      // 添加 CORS 头
      cors: true,
      // 添加 SPA 回退
      historyApiFallback: {
        rewrites: [
          // SEO URL 重定向规则
          { from: /^\/translate$/, to: '/english-to-chinese-translator' },
          { from: /^\/chinese-to-english$/, to: '/chinese-to-english-translator' },
          { from: /^\/fantasy-chinese-name-generator$/, to: '/fantasy-chinese-name-generator' },
          { from: /^\/custom$/, to: '/custom-chinese-name-generator' },
          { from: /^\/knowledge$/, to: '/blog' },
          { from: /^\/ai-chinese-name$/, to: '/ai-chinese-name-generator' },

                    // Blog文章重定向规则
          { from: /^\/popular-chinese-names$/, to: '/blog/popular-chinese-names' },
          { from: /^\/chinese-surnames$/, to: '/blog/chinese-surnames' },
          { from: /^\/baijiaxing$/, to: '/blog/baijiaxing' },
          { from: /^\/naming-traditions$/, to: '/blog/naming-traditions' },
          { from: /^\/historical-names$/, to: '/blog/historical-names' },
          { from: /^\/regional-naming-differences$/, to: '/blog/regional-naming-differences' },
          { from: /^\/naming-taboos$/, to: '/blog/naming-taboos' },
          { from: /^\/wuxing-bazi$/, to: '/blog/wuxing-bazi' },
          { from: /^\/name-numerology$/, to: '/blog/name-numerology' },
          { from: /^\/sound-harmony$/, to: '/blog/sound-harmony' },
          { from: /^\/seasonal-characters$/, to: '/blog/seasonal-characters' },
          { from: /^\/form-meaning$/, to: '/blog/form-meaning' },
          { from: /^\/classical-characters$/, to: '/blog/classical-characters' },
          { from: /^\/family-naming-rules$/, to: '/blog/family-naming-rules' },
          { from: /^\/zodiac-naming$/, to: '/blog/zodiac-naming' },
          { from: /^\/naming-sound-form-taboos$/, to: '/blog/naming-sound-form-taboos' },
          { from: /^\/modern-traditional$/, to: '/blog/modern-traditional' },
          { from: /^\/era-naming-styles$/, to: '/blog/era-naming-styles' },
          { from: /^\/professional-considerations$/, to: '/blog/professional-considerations' },
          { from: /^\/constellation$/, to: '/blog/constellation-analysis' },
          { from: /^\/character-strokes$/, to: '/blog/character-strokes' },
          { from: /^\/fantasy-chinese-names-guide$/, to: '/blog/fantasy-chinese-names-guide' },
          
          // 默认SPA回退
          { from: /.*/, to: '/index.html' }
        ]
      }
    }
  }
})
