import classes from "./meals-grid.module.css";
import MealItem from "./meal-item";

export default function MealsGrid({ meals = [] }) {
  return (
    <ul className={classes.meals}>
      {meals && meals.length > 0 ? (
        meals.map((meal) => (
          <li key={meal.id}>
            <MealItem {...meal} />
          </li>
        ))
      ) : (
        <li>No meals found.</li>
      )}
    </ul>
  );
}
