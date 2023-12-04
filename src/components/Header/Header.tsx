import { HeaderBaner } from './HeaderBaner/HeaderBaner'
import { HeaderTop } from './HeaderTop/HeaderTop'

type TypePropsHeader = {
    clossedPopup: boolean
    setClossedPopup: (clossedPopup: boolean) => void
}

export const Header: React.FC<TypePropsHeader> = ({clossedPopup, setClossedPopup}) => {
    
    return (
        <header>
            <HeaderTop />
            <HeaderBaner clossedPopup={clossedPopup} setClossedPopup={setClossedPopup}/>
        </header>
    )
}
