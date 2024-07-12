import MealForm from '../../components/MealForm/MealForm';
import {useLocation} from 'react-router-dom';
import {Meal} from '../../types';

const MealPage = () => {

  const { state } = useLocation();
  const initialMeal: Meal = state || { time: 'Breakfast', description: '', calories: '' };

  return (
    <>
      <MealForm initialMeal={initialMeal}/>
    </>
  );
};

export default MealPage;