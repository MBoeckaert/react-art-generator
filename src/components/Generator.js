// import PropTypes from "prop-types";
const generatorStyling = {
  general: {
    minWidth: '60vw',
    height: '80vh',
    backgroundColor: '#262424',
    color: "red",
  }, input: {
    margin: "2px",
    padding: "5px"
  }
}

const Generator = () => {
  return (
      <article style={generatorStyling.general}>
          <p style={generatorStyling}>Here comes the art Generator</p>
      </article>
  );
};

// Inputs.propTypes = {
//   item: PropTypes.object.isRequired,
// };

export default Generator;