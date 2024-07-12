import {NavLink} from 'react-router-dom';
import {Meal} from '../../types';
import React from 'react';
import axiosApi from '../../axiosApi';

interface Props {
  meals: Meal[];
  setMeals: React.Dispatch<React.SetStateAction<Meal[]>>;}

const MealList: React.FC<Props> = ({meals, setMeals}) => {

  const handleDelete = async (id: string) => {
    await axiosApi.delete(`/meals/${id}.json`);
    setMeals((prevMeals) => prevMeals.filter((meal) => meal.id !== id));
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4 border-bottom">Calories Tracker</h1>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4>Total calories: kcal</h4>
        <NavLink to="/meal-form" className="btn btn-primary">Add new meal</NavLink>
      </div>
      <ul className="list-group">
        {meals.map((meal) => (
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{meal.time}</strong>
              <p>{meal.description}</p>
            </div>
            <div className="d-flex align-items-center">
              <span className="me-3">{meal.calories} kcal</span>
              <NavLink to={`/meal-form/${meal.id}`} className="btn btn-sm btn-outline-secondary me-2">
                Edit
              </NavLink>
              <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(meal.id!)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealList;