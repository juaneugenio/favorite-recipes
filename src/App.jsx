import './App.css'
import PropTypes from "prop-types";
import ItemList from "./components/ItemList"
import data from "./data/recipeData.json"
import { useState, useEffect } from 'react';

function App() {
  const [items, setItems] = useState([]);

  
  useEffect(() => {
    // Converting recipe.id to Number
    const formattedData = data.map((recipe) => ({
			...recipe,
			id: Number(recipe.id),
		}));
		setItems(formattedData);
	}, []);
  

  return (
    <>
      <h1>Favorite Recipes</h1>
      <ItemList items={items}/>
    </>
  )
}

App.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			isFavorite: PropTypes.bool.isRequired,
      picture: PropTypes.string.isRequired
		}),
	),
};

export default App
