import { useState } from "react";
import PropTypes from "prop-types";
import Item from "./Item"
import ToggleButton from "./ToggleButton";



const ItemList = ({items}) => {
  const [showFavorites, setShowFavorites] = useState(false)


  const handleToggle= (  ) => {
     setShowFavorites(!showFavorites)
  }

  const filteredList = showFavorites ? items.filter(item => item.isFavorite): items;
  
  
  return (
		<>
			<ToggleButton onToggle={handleToggle} isOn={showFavorites} />
			{filteredList.map((item) => (
				<Item key={item.id} item={item} />
			))}
		</>
	);
}
ItemList.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			isFavorite: PropTypes.bool.isRequired,
      picture: PropTypes.string.isRequired
		}),
	).isRequired,
};
export default ItemList