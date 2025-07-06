import '../css/RecipePage.css';
import { useLocation } from 'react-router-dom';

function RecipePage() {
    const location = useLocation();
    const recipe = location.state;

    return (
        <div className="recipe-page">
            <h2>{recipe.name}</h2>
            <img src={recipe.image} alt={recipe.name} />
        </div>
    )
}

export default RecipePage;