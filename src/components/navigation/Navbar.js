import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import logo_delfi from "assets/img/image.png";
// Asegúrate de que la ruta sea correcta
import { DotLoader } from "react-spinners";
import { FaHandPointer, FaUserCheck } from "react-icons/fa";  // Importación del ícono

function Navbar() {
  const [loading, setLoading] = useState(false);

  const handleButtonClick = () => {
    setLoading(true);
    // Simula una carga y luego apaga el loading (esto es solo para ejemplo)
    setTimeout(() => setLoading(false), 2000);
  };
  window.onscroll = function() {scrollFunction()}

    function scrollFunction() {
        if(document.getElementById('navbar')){
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                document.getElementById('navbar').classList.add('shadow-navbar');
                document.getElementById('navbar').classList.add('bg-white');
            }else{
                document.getElementById('navbar').classList.remove('shadow-navbar');
                document.getElementById('navbar').classList.remove('bg-white');
            }
        }
    }




  return (
    <nav id ="navbar"  className="w-full py-4 top-0   z-40 fixed ">
      <div className="bg-white px-4 sm:px-6">
        <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
          <Link to="/" className="ml-4 mt-2">
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
            <Link
              to="/contacto"
              className="inline-flex ml-12 items-center rounded-md border border-transparent bg-button_hireUs px-8 py-3 text-base font-medium text-white shadow-sm hover:bg-button_hireUs_bg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              <FaUserCheck className="mr-2" /> {/* Ícono de contratación */}
              Contratanos
              <DotLoader loading={loading} size={25} color="#ffffff" />
            </Link>
            
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

