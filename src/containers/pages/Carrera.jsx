import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";

function Carrera() {
  return (
    <Layout>
      <Navbar />
      <div className="pt-28">
        Carrera
      </div>
        <Footer />
    </Layout>
  );
}

export default Carrera;