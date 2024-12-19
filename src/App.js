import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error404 from 'containers/errors/Error404';  
import Home from "containers/pages/Home";
import store from "./store";
import { Provider } from "react-redux";
import Casos from "containers/pages/Casos";
import Servicios from "containers/pages/Servicios";
import Nosotros from "containers/pages/Nosotros";
import Carrera from "containers/pages/Carrera";
import Blog from "containers/pages/Blog";
import Contacto from "containers/pages/Contacto";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="*" element={<Error404 />} />
          <Route path="/" element={<Home />} />
          <Route path="/casos" element={<Casos />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/carreras" element={<Carrera />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;


