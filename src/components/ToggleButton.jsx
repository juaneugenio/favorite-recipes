
import PropTypes from "prop-types";

const ToggleButton = ({isOn, onToggle}) => {

	
  return (
		<>
			<div className="button__container">
				<span>Show Favorites</span>
				<div className={`switch ${isOn ? "active" : ""}`} onClick={onToggle}>
					<div className="switch-handle"></div>
				</div>
			</div>
		</>
	);
}


ToggleButton.propTypes = {
	isOn: PropTypes.bool.isRequired,
	onToggle: PropTypes.func.isRequired,
};
export default ToggleButton