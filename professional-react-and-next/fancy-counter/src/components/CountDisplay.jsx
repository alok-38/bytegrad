import PropTypes from "prop-types";

function CountDisplay({ count }) {
  return <p>{count}</p>;
}

CountDisplay.propTypes = {
  count: PropTypes.number.isRequired, // Assuming count should be a number and is required
};

export default CountDisplay;
