import Footer from "../Components/Footer";
import Form from "../Components/Form";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home-info">
        <h2>Informacion del formulario</h2>
        <input
          className="instructions"
          placeholder="
            Ingrese el titulo y la descripción que visualizarán los usuarios durante
            el proceso de pago"
        />
      </div>
      <Form />
      <Footer />
    </div>
  );
};

export default Home;
