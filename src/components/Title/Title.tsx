import './Title.scss'

type TypePropsTitle = {
    titleh2?: string
    span?: string
    titleh4?: string
    textCentr?: boolean
}

export const Title: React.FC<TypePropsTitle> = ({titleh2, span, titleh4, textCentr}) => {

    const className = `${'title'} ${textCentr ? 'textCenter' : ''}`

    return (
        <div className={className}>
            <h2>{titleh2} <span>{span}</span></h2>
            {titleh4 && <h4>{titleh4}</h4>}
            <div className='line'></div>
        </div>
    )
}
