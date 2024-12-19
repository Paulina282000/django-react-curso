import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import logo_delfi from "assets/img/image.png";
import loading from "assets/img/loading.gif"; // Asegúrate de que la ruta sea correcta

function Navbar() {
  return (
    <nav className="w-full py-4 top-0 fixed">
      <div className="bg-white px-4 sm:px-6">
        <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
          <Link to="/"className="ml-4 mt-2">
            <img 
              src={logo_delfi}
              width={130}
              height={120}
              alt="Logo Delfi"
              className=""
            />
          </Link>
          <div className="ml-4 mt-2 flex-shrink-0">
            <NavLink to="/casos" className="text-lg inline-flex leading-6 text-gray-900 border-b-2 border-white hover:border-button_hireUs mx-4">Casos</NavLink>
            <NavLink to="/servicios" className="text-lg inline-flex leading-6 text-gray-900 border-b-2 border-white hover:border-button_hireUs mx-4">Servicios</NavLink>
            <NavLink to="/nosotros" className="text-lg inline-flex leading-6 text-gray-900  border-b-2 border-white hover:border-button_hireUs mx-4">Nosotros</NavLink>
            <NavLink to="/carreras" className="text-lg inline-flex leading-6 text-gray-900 border-b-2 border-white hover:border-button_hireUs mx-4">Carreras</NavLink>
            <NavLink to="/blog" className="text-lg inline-flex leading-6 text-gray-900 border-b-2 border-white hover:border-button_hireUs mx-4">Blog</NavLink>
            <NavLink to="/contacto" className="text-lg inline-flex leading-6 text-gray-900 border-b-2 border-white hover:border-button_hireUs mx-4">Contacto</NavLink>
            <button
                type="button"
                className="inline-flex ml-12 items-center rounded-md border border-transparent bg-button_hireUs px-8 py-3 text-base font-medium text-white shadow-sm hover:bg-button_hireUs_bg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                Hire us
                <img src={loading} alt="Loading..." className="w-5 h-2.5 ml-3 align-middle" /> {/* Ajuste para que se alinee verticalmente */}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => ({
  // Aquí puedes mapear el estado de Redux a las props, si es necesario.
});

export default connect(mapStateToProps, {})(Navbar);

