import Home from "./components/home/Home";
import Signup from "./components/signup/Signup";
import { Route, Routes } from 'react-router-dom';
import { Context } from './context.js';

function App() {
  return (
    <Context.Provider>
        <Routes>
           <Route path="/" element={<Home/>}/>
           {/* <Route path="/auth" element={<Signup/>}/> */}
        </Routes>
    </Context.Provider>
  );
}

export default App;
