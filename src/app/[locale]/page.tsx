import LocaleSwitcher from '@/components/LocaleSwitcher'
import NamedLink from '@/components/NamedLink'
import { useTranslations } from 'next-intl'

export default function Index() {
  const t = useTranslations('Index')

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <NamedLink className="border px-5 py-2" name="detail">
        {t('title')}
      </NamedLink>
      <LocaleSwitcher />
    </main>
  )
}
