import PropTypes from 'prop-types'

export const Project = ({ name, img, link, techs, position, show }) => {



  const bgPos = position ? position : 'center'
  const display = show ? 'flex' : 'none'
  return (

    <a href={link} style={{
      background: `url(${img})`, backgroundPosition: bgPos, display: display

    }} className={'project'}>
      <img src='./Images/angle-down-solid.svg' alt='arrow' />
      <h3>{name}</h3>

      {techs ?
        <ul className="techs">
          {techs.map(element => <li key={element}>
            <img src={`./Images/${element + '.png'}`} alt={element} loading='lazy' />
          </li>
          )}
        </ul>
        : ''}

    </a>


  )
}


Project.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string,
  link: PropTypes.string,
  techs: PropTypes.array,
  position: PropTypes.string,
  show: PropTypes.bool

}