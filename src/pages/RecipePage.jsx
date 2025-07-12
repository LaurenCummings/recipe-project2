import '../css/RecipePage.css';
import { useLocation, Link } from 'react-router-dom';
import Rating from '../components/Rating';
import { FaArrowLeft } from 'react-icons/fa';

function RecipePage() {
    const location = useLocation();
    const recipe = location.state;

    return (
        <div className="recipe-page">
            <Link to="/">
                <FaArrowLeft /> Back to Home
            </Link>
            <div className="overview">
                <div>
                    <h2>{recipe.name}</h2>
                    <Rating rating={recipe.rating} count={recipe.reviewCount}/>
                    <p>Difficulty: {recipe.difficulty}</p>
                    <p>Cook Time: {recipe.cookTimeMinutes} minutes</p>
                    <p>Servings: {recipe.servings}</p>
                    <p>{recipe.caloriesPerServing} Calories per serving</p>
                </div>
                <img src={recipe.image} alt={recipe.name} />
            </div>
            <div className="recipe-details">
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
                    {
                        recipe.instructions.map((item, index) => {
                            return (
                                <li key={index}>{item}</li>
                            )
                        })
                    }
                </div>                
            </div>

        </div>
    )
}

export default RecipePage;