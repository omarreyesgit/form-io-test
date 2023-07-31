
import './App.css';
import { Form, } from '@formio/react';
const urlForm = 'https://kkttacetqlnrnmu.form.io/crearexpedientes'
const urlResource = 'https://kkttacetqlnrnmu.form.io/expedientes'

function App() {


  return (
    <div className="App">

      <h1>Crear Expediente</h1>
      <Form src={urlResource} onSubmitDone={
        //reset form
        (submission) => {
          console.log(submission);
          //alert("Expediente creado con exito");
          window.location.reload();
        }
      } />




    </div>
  );
}

export default App;
