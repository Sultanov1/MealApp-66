const MealForm = () => {
  return (
    <div className='contianer m-4'>
      <h1 className='mb-4'>Colorie Tracker</h1>
      <form>
        <div className='mb-3'>
          <label className='form-label'>Meal Time:</label>
          <select className='form-select'>
            <option value="Breakfast">Breakfast</option>
            <option value="Snack">Snack</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
          </select>
        </div>
        <div className='mb-3'>
          <label className='form-label'>Meal Description:</label>
          <input
            type="text"
            className='form-control'
            placeholder='Enter Meal Description'
            required
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>kcal number:</label>
          <div className='input-group'>
            <input
              type="number"
              className='form-control'
              placeholder='Enter number of kcal'
              required
            />
            <span className='input-group-text'>kcal</span>
          </div>
        </div>
        <button type='submit' className='btn btn-success'>Save</button>
      </form>
    </div>
  );
};

export default MealForm;