import './App.css'
import PropTypes from "prop-types";
import { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ItemList from "./components/ItemList"
import ItemDetails from './components/ItemDetails';
import Error from './components/Error';

function App() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  
useEffect(() => {
	fetch("/favorite-recipes/recipeData.json")
		.then((response) => {
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			return response.json();
		})
		.then((data) => {
			const formattedData = data.map((recipe) => ({
				...recipe,
				id: Number(recipe.id),
			}));
			setItems(formattedData);
			setIsLoading(false);
		})
		.catch((err) => {
			console.log("👉 Line-24 ▶︎▶︎", err.message);
			setError("Failed to load data.");
			setIsLoading(false);
		});
}, []);

  const updateFavoriteStatus = (id, isFavorite) => {
		setItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, isFavorite } : item)));
	};

  if(error){
    return <Error errorMessage={error}/>
  }
  

  return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<ItemList items={items} isLoading={isLoading} />} />
					<Route path="/item/:id" element={<ItemDetails items={items} updateFavoriteStatus={updateFavoriteStatus} />} />
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
