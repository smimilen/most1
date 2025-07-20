/** @type {import('next-sitemap').IConfig} */
module.exports = {
  // базовый URL сайта (ставь production-домен)
  siteUrl: 'https://kamchatka-china-bridge.ru',

  // файл robots.txt сгенерируется автоматически
  generateRobotsTxt: true,

  // куда класть sitemap-ы (по-умолчанию в public/)
  outDir: 'public',

  // при необходимости — включает карты изображений <image>
  generateIndexSitemap: true,

  // если страницы рендерятся динамически и ты не хочешь, чтобы они попали в sitemap
  exclude: ['/admin/**', '/api/**'],

  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      // { userAgent: '*', disallow: '/private' },
    ],
    additionalSitemaps: [
      'https://kamchatka-china-bridge.ru/api/server-sitemap.xml',
    ],
  },
};
