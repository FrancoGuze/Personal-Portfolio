import PropTypes from 'prop-types'

export const Project = ({ name, img, link,techs }) => {

console.log(techs)
  


return (
  
    <a href={link} style={{
      background: `url(${img})`, backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }} className="project">
      <img src='./Images/angle-down-solid.svg' />
      <h3>{name}</h3>

{techs ? 
  <ul className="techs">
        {techs.map(element => <li key={element}> 
          <img src={`./Images/${element + '.png'}`}  alt={element} />
        </li>
        )}
      </ul>
      :''}
      
    </a>
    
   
  )
}


Project.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string,
  link: PropTypes.string,
  techs: PropTypes.array


}