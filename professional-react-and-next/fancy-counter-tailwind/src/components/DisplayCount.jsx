import PropTypes from "prop-types";

function DisplayCount({ count }) {
  return <p className="text-[#1d2507] text-[200px] font-bold">{count}</p>;
}

DisplayCount.propTypes = {
  count: PropTypes.number.isRequired,
};

export default DisplayCount;
