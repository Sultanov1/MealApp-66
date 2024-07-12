import {useEffect, useState} from 'react';
import {Meal} from '../../types';
import MealList from '../../components/MealList/MealList';
import axiosApi from '../../axiosApi';


const Home = () => {
  const [meals, setMeals] = useState<Meal[]>([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await axiosApi.get<{ [key: string]: Meal }>('/meals.json');
      const meals = Object.keys(response.data).map((key) => ({
        ...response.data[key],
        id: key,
      }));
      setMeals(meals);
    };
    fetchMeals();
  }, []);

  return (
    <>
      <MealList meals={meals} setMeals={setMeals}/>
    </>
  );
};

export default Home;