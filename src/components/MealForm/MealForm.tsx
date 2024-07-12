import React, { useState} from 'react';
import {Meal} from '../../types';
import {useNavigate} from 'react-router-dom';
import axiosApi from '../../axiosApi';

interface MealFormProps {
  initialMeal: Meal;
}

const MealForm: React.FC<MealFormProps> = ({ initialMeal }) => {
  const [meal, setMeal] = useState<Meal>(initialMeal);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setMeal((prevMeal) => ({
      ...prevMeal,
      [name]: name === 'calories' ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axiosApi.post('/meals.json', meal);
    navigate('/');
  }

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Calorie Tracker</h1>
      <h2 className="mb-4">Add / Edit Meal</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="time" className="form-label">Time:</label>
          <select
            id="time"
            name="time"
            className="form-select"
            value={meal.time}
            onChange={handleChange}
            required
          >
            <option value="Breakfast">Breakfast</option>
            <option value="Snack">Snack</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Meal description:</label>
          <input
            id="description"
            name="description"
            type="text"
            value={meal.description}
            className="form-control"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="calories" className="form-label">Calories:</label>
          <div className="input-group">
            <input
              id="calories"
              name="calories"
              type="number"
              value={meal.calories}
              className="form-control"
              onChange={handleChange}
              required
            />
            <span className="input-group-text">kcal</span>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
    </div>
  );
};

export default MealForm;