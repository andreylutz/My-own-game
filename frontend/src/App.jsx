import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import Home from "./components/home/Home";
// import Signup from "./components/signup/Signup";



function App() {
  return (
    <Provider store={store}>
        <Routes>
           <Route path="/" element={<Home/>}/>
           {/* <Route path="/auth" element={<Signup/>}/> */}
        </Routes>
    </Provider>
  );
}

export default App;
