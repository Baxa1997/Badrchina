import { Footer } from 'components/UI/Footer/Footer'
import { Main } from 'components/UI/Main/Main'
import SEO from 'seo'
import { fetchMultipleUrls } from 'services/fetchMultipleUrls'
import { data } from '../mock/Singlepage'


export default function Home() {
  return (
    <>
      <SEO />
      <Main data={data}/>
    </>
  )
}

// export async function getServerSideProps(context) {
//   const urls = ['/posts']
//   const data = await fetchMultipleUrls(urls)

//   return {
//     props: {
//       data,
//     },
//   }
// }
