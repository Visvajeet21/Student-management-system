import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Create from "./Create";
import Read from "./Read";
import Update from "./Update";
import "bootstrap/dist/css/bootstrap.min.css";
import ToastEx from "./ToastEx";
import ColorChange from "./ColorChange";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/read/:id" element={<Read />}></Route>
          <Route path="/update/:id" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <ToastEx /> */}
      {/* <ColorChange /> */}
    </>
  );
}

export default App;
