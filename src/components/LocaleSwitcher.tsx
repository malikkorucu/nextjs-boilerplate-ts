import { useLocale, useTranslations } from 'next-intl'
import NamedLink from './NamedLink'

export default function LocaleSwitcher() {
  const t = useTranslations('Index')

  const locale = useLocale()
  const otherLocale = locale === 'en' ? 'tr' : 'en'

  return (
    <NamedLink locale={otherLocale} name="home">
      {t('change', { locale: otherLocale })}
    </NamedLink>
  )
}
