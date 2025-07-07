import '../css/RecipePage.css';
import { useLocation } from 'react-router-dom';
import Rating from '../components/Rating';

function RecipePage() {
    const location = useLocation();
    const recipe = location.state;

    return (
        <div className="recipe-page">
            <h2>{recipe.name}</h2>
            <Rating rating={recipe.rating} count={recipe.reviewCount}/>
            <p>Rating: {recipe.rating}</p>
            <p>Difficulty: {recipe.difficulty}</p>
            <p>Cook Time: {recipe.cookTimeMinutes} minutes</p>
            <p>Servings: {recipe.servings}</p>
            <p>{recipe.caloriesPerServing} Calories per serving</p>
            <img src={recipe.image} alt={recipe.name} />
            <div className="ingredients">
                <h3>Ingredients</h3>
                {
                    recipe.ingredients.map((item, index) => {
                        return (
                            <p key={index}>{item}</p>
                        )
                    })
                }
            </div>
            <div className="instructions">
                <h3>Instructions</h3>
                {
                    recipe.instructions.map((item, index) => {
                        return (
                            <li key={index}>{item}</li>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default RecipePage;