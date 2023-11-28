import s from './App.module.scss'
import { Header } from '../Header/Header'
import { SectionAbout } from '../SectionAbout/SectionAbout'
import { SectionOurServices } from '../SectionOurServices/SectionOurServices'
import { SectionEducation } from '../SectionEducation/SectionEducation'
import { SectionNews } from '../SectionNews/SectionNews'
import { SectionReviews } from '../SectionReviews/SectionReviews'
import { SectionForm } from '../SectionForm/SectionForm'
import { SectionFeedback } from '../SectionFeedback/SectionFeedback'
import { SectionContact } from '../SectionContact/SectionContact'
import { MobileMenu } from '../Footer/MobileMenu'

export default function App() {
  return (
    <div className={s.App}>
      <Header />
      <SectionAbout />
      <SectionOurServices />
      <SectionForm />
      <SectionEducation />
      <SectionNews />
      <SectionReviews />
      <SectionFeedback />
      <SectionContact />
      <MobileMenu />
    </div>
  )
}