import MealsGrid from "@/components/meals/meals-grid";
import Link from "next/link";
import classes from "./page.module.css";
import { getMeals } from "@/lib/meals";

export default async function MealsPage() {
  // as this is the server component we can directly use data from the server in the component
  //  without using any useEfeect and fetch function we can easily take data from the data base
  const meals = await getMeals();

  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you </span>
        </h1>
        <p>
          Choose you favourite recipe and cook it yourself. It is easy and fun !
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favourite Meal</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}
