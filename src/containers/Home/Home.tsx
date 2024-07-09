import {useState} from 'react';
import {Meal} from '../../types';
import MealList from '../../components/MealList/MealList';

const Home = () => {
  const [meals, setMeals] = useState<Meal[]>([]);

  return (
    <>
      <MealList meals={meals} setMeals={setMeals}/>
    </>
  );
};

export default Home;