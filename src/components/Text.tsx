import { useTranslations } from 'next-intl'

export const Text = ({ page, text }) => {
  const t = useTranslations(page)

  return <>{t(text)}</>
}
