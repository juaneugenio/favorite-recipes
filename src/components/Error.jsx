/** @format */
import PropTypes from "prop-types";
import { TbFaceIdError } from "react-icons/tb";


const Error = ({errorMessage}) => {
	return (
		<>
			<div className="error__container">
				<TbFaceIdError className="error-icon"/>
        <p>ERROR:</p>
        <p>{errorMessage}</p>
			</div>
		</>
	);
};

Error.propTypes = {
	errorMessage: PropTypes.string.isRequired,
};
export default Error;
