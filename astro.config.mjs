import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // 改成你的 GitHub 帳號，例如 https://eric741216.github.io
  site: 'https://Shiauka.github.io',
  // 如果 repo 名稱不是 <帳號>.github.io，取消下面的註解並填入 repo 名稱
  // base: '/repo-name',
  vite: {
    plugins: [tailwindcss()],
  },
})
