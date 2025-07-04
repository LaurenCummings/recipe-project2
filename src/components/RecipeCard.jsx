function RecipeCard( {recipe} ) {
    return (
        <div>
            <h2>{recipe.name}</h2>
            <img src={recipe.image} alt={recipe.name} />
        </div>
    )
}

export default RecipeCard;