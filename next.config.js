const routesByLocale = require('./routes.json')

const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './i18n.ts',
)

/** @type {import('next').NextConfig} */

module.exports = withNextIntl({
  rewrites() {
    const locales = Object.keys(routesByLocale).filter(
      (locale) => locale !== 'en',
    )

    return locales.flatMap((locale) =>
      Object.entries(routesByLocale[locale])

        // No need to rewrite the root route
        .filter(([, routePath]) => routePath !== '/')

        // Rewrite the localized pathname to the equivalent route from "en"
        .map(([routeName, routePath]) => ({
          source: `/${locale}${routePath}`,
          destination: `/${locale}${routesByLocale.en[routeName]}`,
        })),
    )
  },
})
