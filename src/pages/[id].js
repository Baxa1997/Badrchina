import Single from 'components/pages/Single/Single'
import { data } from '../mock/Singlepage'
import { useRouter } from 'next/router'
import SEO from 'seo'

function Id() {
  const router = useRouter()
  const major = data.find((item) => item.slug === router.query.id)

  return (
    <div>
      <SEO />
      <Single major={major} />
    </div>
  )
}

export default Id
