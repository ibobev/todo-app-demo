import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";
import Tasks from './views/Tasks';

 const App = () => {
   return (
     <BrowserRouter>
     <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Tasks/>}></Route>
        </Routes>
      </div>
     </div>
     </BrowserRouter>
   );
 }
 
 export default App;
 