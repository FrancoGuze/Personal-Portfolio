import PropTypes from 'prop-types'

export const Card = ( { name, imgSrc,details }) =>{

return(
    <div className='card' title={details}>
<img src={imgSrc} alt="" className="card-img" loading='lazy' />
    <h4 style={{whiteSpace:'nowrap'}} className="card-text">{name}</h4>
    
    {details && <img style={{opacity:'0.1', marginLeft:'auto',rotate:'225deg'}} src='./Images/angle-down-solid.svg' />}
    </div>
)
}
Card.propTypes = {name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    details:PropTypes.string
}
