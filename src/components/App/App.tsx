import './App.scss'
import { Header } from '../Header/Header'
import { SectionReviews } from '../SectionReviews/SectionReviews'
import { SectionContact } from '../SectionContact/SectionContact'
import { MobileMenu } from '../Footer/MobileMenu'
import { Popup } from '../Popup/Popup'
import { useState } from 'react'
import { Title } from '../Title/Title'
import { SectionDocument } from '../SectionDocument/SectionDocument'
import { SectionLicense } from '../SectionLicense/SectionLicense'
import { SectionTeacher } from '../SectionTeacher/SectionTeacher'
import { SectionManager } from '../SectionManager/SectionManager'
import { Button } from '../Button/Button'
import { SectionProfession } from '../SectionProfession/SectionProfession'
import { SectionBonus } from '../SectionBonus/SectionBonus'
import { SectionMassag } from '../SectionMassag/SectionMassag'
import { SectionFestival } from '../SectionFestival/SectionFestival'
import { SectionCosmetic } from '../SectionCosmetic/SectionCosmetic'
import { SectionCourse } from '../SectionCourse/SectionCourse'
import { SectionConditions } from '../SectionConditions/SectionConditions'
import { SectionDiscounts } from '../SectionDiscounts/SectionDiscounts'
import { SectionRelation } from '../SectionRelation/SectionRelation'

export default function App() {

  const [clossedPopup, setClossedPopup] = useState(true)

  const handlerClossed = () => {
    setClossedPopup(false)
  }

  return (
    <div className='App'>
      {!clossedPopup && <Popup clossedPopup={clossedPopup} setClossedPopup={setClossedPopup} />}
      <Header clossedPopup={clossedPopup} setClossedPopup={setClossedPopup} />
      <Title titleh2={'Наши преимущества для вас:'} />
      <SectionDocument />
      <SectionLicense />
      <SectionTeacher />
      <SectionManager />
      <SectionProfession />
      <Button callBack={handlerClossed}>Узнать подробнее</Button>
      <SectionBonus />
      <Button callBack={handlerClossed}>Узнать подробнее</Button>
      <SectionMassag />
      <SectionFestival />
      <SectionCosmetic />
      <Button callBack={handlerClossed}>Узнать подробнее</Button>
      <SectionCourse />
      <SectionConditions />
      <SectionDiscounts />
      <Button callBack={handlerClossed}>Узнать подробнее</Button>
      <SectionRelation />
      <Button callBack={handlerClossed}>Узнать подробнее</Button>
      <SectionContact />
      <MobileMenu />
    </div>
  )
}