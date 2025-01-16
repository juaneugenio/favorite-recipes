import { useState } from "react";
import PropTypes from "prop-types";
import Item from "./Item"
import ToggleButton from "./ToggleButton";
import Error from "./Error";



const ItemList = ({items, isLoading}) => {
  const [showFavorites, setShowFavorites] = useState(false)


  const handleToggle= (  ) => {
     setShowFavorites(!showFavorites)
  }

  const filteredList = showFavorites ? items.filter(item => item.isFavorite): items;
// console.log("👉 items:", items);
// console.log("👉 showFavorites:", showFavorites);
// console.log("👉 filteredList:", filteredList);

 if (isLoading) {
		return <p className="is-loading">Loading...</p>;
 }

if (filteredList.length === 0) {
	console.log("👉 Line-24 ▶︎▶︎", "No items found in the filtered list");
	return <Error errorMessage="No items found" />;
}
  
  return (
		<>
			<h1>Favorite Recipes</h1>
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
			picture: PropTypes.string.isRequired,
		}),
	).isRequired,
	isLoading: PropTypes.bool.isRequired,
};
export default ItemList