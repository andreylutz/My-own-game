import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import Home from "./components/home/Home";
import QuestionTable from './components/table/QuestionTable';
import Question from './components/question/Question';
// import Signup from "./components/signup/Signup";



function App() {
 
  return (
    <Provider store={store}>
        <Routes>
           <Route path="/" element={<Home/>}/>
          <Route path="/question/:id" element={<Question />}/>

           {/* <Route path="/auth" element={<Signup/>}/> */}
        </Routes>
    </Provider>
  );
}

export default App;
