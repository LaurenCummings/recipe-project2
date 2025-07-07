import '../css/RecipePage.css';
import { useLocation } from 'react-router-dom';
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from 'react-icons/io';

function RecipePage() {
    const location = useLocation();
    const recipe = location.state;

    return (
        <div className="recipe-page">
            <h2>{recipe.name}</h2>
            <p>Difficulty: {recipe.difficulty}</p>
            <p>Rating: {recipe.rating}</p>
            <p>Review Count: {recipe.reviewCount}</p>
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