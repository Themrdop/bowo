import '../src/styles/app.css';
import DefaultLayout from './componts/DefaultLayout';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

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
