import { connect } from "react-redux";

function Layout({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}

const mapStateToProps = (state) => ({
  // Aquí puedes mapear el estado de Redux a las props, si es necesario.
});

export default connect(mapStateToProps, {})(Layout);
