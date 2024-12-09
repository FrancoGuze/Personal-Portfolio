import PropTypes from 'prop-types'

export const SectionComp = ({ zone,innerText, cant, children }) => {

    const drawText = () => {
        let text = <div>&lt; {innerText} /&gt;</div>;
        let finalText = []
        for (let i = 0; i < Number(cant); i++) {
            console.log('bucle ', i)
            finalText.push(text)
        }
        console.log(finalText)
        return finalText
    }

    return (
    <section id={zone} className={`${zone} container`}>
        
        <div className='heading-bg'>
            <div className="slide-rail">
        <h3 id='background-heading' className="background-heading">{drawText()}</h3>
        </div>
        <div className="slide-rail">
        <h3 id='background-heading' className="background-heading">{drawText()}</h3>
        </div>
        </div>
        {children}
    </section>)
}
SectionComp.propTypes = {
    zone:PropTypes.string.isRequired,
    innerText: PropTypes.string.isRequired,
    cant: PropTypes.number.isRequired,
    children:PropTypes.children
}