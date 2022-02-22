// import PropTypes from "prop-types";
const inputStyling = {
  alignSelf: 'flex-start',
  general: {
    maxWidth: '40vw',
    color: "red",
    backgroundColor: '#262424',
    borderRadius: '.2rem',
    margin: '1rem',
    padding: '1rem',
  }, input: {
    margin: "2px",
    paddingTop: ".5rem"
  }
}

const Inputs = () => {

  return (
      <article style={inputStyling}>
          <form style={inputStyling.general}>
            <div style={inputStyling.input}>
                {/* Make this a slider */}
                <label for="pick-circles">Amount of Objects:</label>
                <input type="number" style={inputStyling} name="pick-number" id="pick-number" min="1" max="100" required
                    autofocus placeholder="50"/>
                {/* <span style={inputStyling.input}></span> */}
            </div>
            <div style={inputStyling.input}>
                <label style={inputStyling}>Dominant color:</label>
                <select name="colors" style={inputStyling}>
                    <option value="1">Red</option>
                    <option value="2">Green</option>
                    <option value="3">Blue</option>
                </select>
            </div>
            <div style={inputStyling.input}>
                <label style={inputStyling.input}>Choose Offset</label>
                <div style={inputStyling.input}>
                    <p></p>
                </div>
            </div>
        </form>
      </article>
  );
};

// Inputs.propTypes = {
//   item: PropTypes.object.isRequired,
// };

export default Inputs;