/** @format */
import PropTypes from "prop-types";

import { HiChevronRight } from "react-icons/hi";

const Item = ({item}) => {
	return (
		<>
			<div className="item__container">
        <img src={item.picture} alt={item.name} />
        <span>{item.name}</span>
        <HiChevronRight className="icon-chevron-item"/>
      </div>
		</>
	);
};
Item.propTypes = {
	item: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		isFavorite: PropTypes.bool.isRequired,
    picture:PropTypes.string.isRequired
	}).isRequired,
};
export default Item;
