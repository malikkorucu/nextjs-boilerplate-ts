import { useLocale } from 'next-intl'
import Link from 'next-intl/link'
import { ComponentProps } from 'react'
import routesByLocale from '../../routes.json'

type Routes = {
  name: string
  params?: never
}

type Props = Omit<ComponentProps<typeof Link>, 'href'> & Routes

export default function NamedLink({ name, params, ...rest }: Props) {
  const locale = useLocale()

  const localeRoutes = (routesByLocale as any)[locale]
  if (!localeRoutes) {
    throw new Error(`No routes found for locale "${locale}"`)
  }

  const routePath = (localeRoutes as any)[name]
  if (!routePath) {
    throw new Error(`No route found for name "${name}"`)
  }

  let href = routePath
  if (params) {
    Object.keys(params).forEach((param) => {
      href = href.replace(new RegExp(':' + param, 'g'), (params as any)[param])
    })
  }

  return <Link href={href} {...rest} />
}
