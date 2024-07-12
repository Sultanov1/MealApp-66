import {Route, Routes} from 'react-router-dom';
import Home from './containers/Home/Home';
import MealPage from './containers/MealPage/MealPage';


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/meal-form" element={<MealPage/>}/>
        <Route path="*" element={<h1>Not found!</h1>}/>
      </Routes>
    </>
  );
};

export default App;