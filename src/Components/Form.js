import axios from "axios";
import { useState, useEffect } from "react";
import swal from "sweetalert";
import "./Form.css";

const Form = () => {
  const [paises, setPaises] = useState([]);
  const [values, setValues] = useState({
    nombre: "",
    apellido: "",
    pais: "",
    dni: "",
  });

  const [error, setError] = useState(false);

  useEffect(() => {
    let url = "https://restcountries.eu/rest/v2/all";
    axios.get(url).then((response) => {
      setPaises(response.data);
      console.log(response);
    });
  }, []);

  function handleOnChangeInputs(event) {
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  const { nombre, apellido, pais, dni } = values;

  function handleSubmit(event) {
    event.preventDefault();

    if (
      nombre.trim() === "" ||
      apellido.trim() === "" ||
      pais === "" ||
      dni.trim() === ""
    ) {
      setError(true);
      swal({
        title: "Error!",
        text: "Todos los campos son necesarios",
        icon: "error",
        button: "Finalizar",
      });

      return; //asi no se sigue ejecutando el form ya que hay error
    }

    //Eliminar el error
    setError(false);

    swal({
      title: "Enviado!",
      text: "Formulario enviado con exito",
      icon: "success",
      button: "Finalizar",
    });

    setValues({ nombre: "", apellido: "", pais: "", dni: "" });
  }

  function handleCancel() {
    setValues({
      nombre: "",
      apellido: "",
      pais: "",
      dni: "",
    });
  }
  return (
    <>
      <form>
        <div className="container-fluid">
          <div className="row ">
            <label className="form-label col-12 col-md-6">
              Nombre<span>*</span>
              <input
                className="form-inputs col-12 "
                type="text"
                name="nombre"
                onChange={handleOnChangeInputs}
                value={nombre}
              />
            </label>
            <label className="form-label col-12 col-md-6">
              Apellido<span>*</span>
              <input
                className="form-inputs col-12 "
                type="text"
                name="apellido"
                onChange={handleOnChangeInputs}
                value={apellido}
              />
            </label>
            <label className="form-label col-12 col-md-6">
              Seleccione un pais<span>*</span>
              <select
                id="pais"
                name="pais"
                onChange={handleOnChangeInputs}
                className="inputs col-12 ">
                {paises
                  .map((pais, index) => {
                    return (
                      <option key={index} value={pais.name}>
                        {pais.name}
                      </option>
                    );
                  })
                  .splice(0, 20)}
              </select>
            </label>

            <label className="form-label col-12 col-md-6">
              Numero de documento<span>*</span>
              <input
                className="form-inputs col-12 col-m-3"
                type="text"
                name="dni"
                onChange={handleOnChangeInputs}
                value={dni}
              />
            </label>
          </div>
        </div>
      </form>
      <div className="btn-container">
        <button type="submit" className="btn-primary " onClick={handleSubmit}>
          Enviar
        </button>
        <button
          type="submit"
          className="btn-secondary cancelar"
          onClick={handleCancel}>
          Cancelar
        </button>
      </div>
    </>
  );
};

export default Form;
