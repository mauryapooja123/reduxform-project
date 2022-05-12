import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./component/User/Home";
import Registration from "./component/Form/Registration";
import SimpleForm from "./component/Form/SimpleForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SimpleForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
