/** @format */

import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

const ItemDetails = ({ items }) => {
	// console.log("👉 Line-5 ▶︎▶︎", items);
  const {id} = useParams();

  const recipe = items.find(recipe => `${recipe.id}${recipe.name}` === id
  )
  if(!recipe){
    return <p>Item not found</p>
  }
	return (
		<article className="item-details__container">
			<header>
				<h1>{recipe.name}</h1>
			</header>
			<figure>
				<img src={recipe.picture} alt={recipe.name} />
				<figcaption>
					{recipe.name} Picture is Free for use under the Pixabay{" "}
					<a href="https://pixabay.com/service/license-summary/" target="_blank" rel="noopener noreferrer">
						Content License
					</a>
				</figcaption>
			</figure>
			<section className="item-details__subsection">
				<p>
					<strong>Category:</strong> {recipe.category}
				</p>
				<p>
					<strong>Origin:</strong> {recipe.origin}
				</p>
				<button>{recipe.isFavorite ? "Unmark as Favorite" : "Mark as Favorite"}</button>
			</section>
			<section className="item-description__section">
				<h3>Description</h3>
				<p>{recipe.description}</p>
			</section>
		</article>
	);
};

ItemDetails.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			isFavorite: PropTypes.bool.isRequired,
			picture: PropTypes.string.isRequired,
			category: PropTypes.string.isRequired,
			origin: PropTypes.string.isRequired,
		}),
	).isRequired,
};
export default ItemDetails;
