import {Route, Routes} from 'react-router-dom';
import MealForm from './containers/MealForm/MealForm';
import Home from './containers/Home/Home';


const App = () => {
  return (
    <>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/new-meal" element={<MealForm/>}/>
       <Route path="*" element={<h1>Not found!</h1>}/>
     </Routes>
    </>
  );
};

export default App;