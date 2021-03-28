// @ts-ignore
const sitemap = require('nextjs-sitemap-generator')

try {
  sitemap({
    baseUrl: 'https://element.fi',
    pagesDirectory: `.next/server/pages`,
    targetDirectory: 'public/',
    nextConfigPath: `${__dirname}/../next.config.js`,
    ignoreIndexFiles: true,
  })

  console.info(`✅ sitemap.xml generated!`)
} catch (err) {
  console.error('Something went wrong while generating sitemap')
}
