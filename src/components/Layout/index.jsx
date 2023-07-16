import { Footer } from 'components/UI/Footer/Footer'
import { Header } from 'components/UI/Header/Header'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer/>
    </>
  )
} 
