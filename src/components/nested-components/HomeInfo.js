import { Link } from 'react-router-dom';

const HomeContent = () => {
    return (
        <article className="home-content">
            <h1>A <span>healthy</span></h1>
            <h1>body begins</h1>
            <h1>from within</h1>

            <p>
                Discover the best foods for your body and track the perfect calorie intake for balanced meals.
            </p>
            <div className="home-buttons">
                <Link to="Calories" className="calories-btn">Calorie Calculator</Link>
                <Link to="Recipes" className="recipes-btn">
                    <svg className="fa-solid fa-magnifying-glass"></svg>
                    <span>Recipes</span>
                </Link>
            </div>
        </article>
    )
}

export default HomeContent;