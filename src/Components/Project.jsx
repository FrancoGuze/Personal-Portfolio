import PropTypes from "prop-types";

export const Project = ({
  dialogHandler,
  dialogDataHandler,
  description,
  name,
  img,
  link,
  techs,
  position,
  show,
}) => {
  const bgPos = position ? position : "center";
  const display = show ? "flex" : "none";
  return (
    <button
      onClick={() => {
        dialogDataHandler({
          title: name,
          description: description,
          techs: techs,
          link: link,
        });
        setTimeout(() => dialogHandler(true), 50);
      }}
      style={{
        background: `url(${img})`,
        backgroundPosition: bgPos,
        display: display,
      }}
      className={"project"}
      target="_blank"
    >
      <img src="./Images/angle-down-solid.svg" alt="arrow" />
      <h3>{name}</h3>

      {techs ? (
        <ul className="techs">
          {techs.map((element) => (
            <li key={element}>
              <img
                key={element}
                src={`./Images/${element + ".png"}`}
                alt={element}
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </button>
  );
};

Project.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string,
  link: PropTypes.string,
  techs: PropTypes.array,
  position: PropTypes.string,
  show: PropTypes.bool,
};
