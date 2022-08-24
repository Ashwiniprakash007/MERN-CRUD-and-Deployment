import {HomePage} from "./components/HomePage";
import {Login} from "./components/Login";
import {Register} from "./components/Register";
import {Notes} from "./components/Notes"
import CreateNotes from "./components/CreateNotes";
import NotesEdit from"./components/NotesEdit";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import './App.css';
// import { Delete } from "./components/Delete";

function App() {
  return (
    
    <div className="App">
     
      <Routes>  
          <Route path="/" element={<HomePage />}/>    
          <Route path="/register" element={<Register />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/todos/:id" element={<Notes />}/>
          <Route path="/todos/:id/:_id" element={<NotesEdit />}/>  
          {/* <Route path="/notes/:id/:_id" element ={<Delete />} />   */}
      </Routes>
    </div>
  );
}

export default App;
