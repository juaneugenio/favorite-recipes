import './App.css'
import PropTypes from "prop-types";
import data from "./data/recipeData.json"
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemList from "./components/ItemList"
import ItemDetails from './components/ItemDetails';

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
			<Router>
				<h1>Favorite Recipes</h1>
				<Routes>
					<Route path="/" element={<ItemList items={items} />} />
					<Route path="/item/:id" element={<ItemDetails items={items}/>} />
				</Routes>
			</Router>
		</>
	);
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
