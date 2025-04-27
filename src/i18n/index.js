import { createI18n } from 'vue-i18n'
import en from './en'
import zh from './zh'
import es from './es'
// 导入其他语言
// 注意：实际项目中应该添加所有语言的翻译文件，这里暂时只添加西班牙语作为示例
// 其他语言可以在实际项目中逐步添加完整翻译

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    zh,
    es,
    // 其他语言暂时使用英语，可以在未来添加专门的翻译
    fr: en,
    de: en,
    ja: en,
    ko: en,
    ru: en,
    ar: en,
    pt: en,
    it: en,
    hi: en
  }
})

export default i18n 