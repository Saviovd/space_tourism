import './SectionTitle.scss'

interface ISectionTitle {
    title: string
    number: string
    style?: React.CSSProperties
}

function SectionTitle({title, number, style}: ISectionTitle) {
    return (
        <h2 style={style} className='SectionTitle'><span className='SectionTitle_number'>{number}</span>{title}</h2>
    );
}

export default SectionTitle;