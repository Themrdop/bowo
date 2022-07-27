import '../src/styles/app.css';
import DefaultLayout from './componts/DefaultLayout';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
