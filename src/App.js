import React from 'react';
//redux
import store from './store';
import { Provider } from 'react-redux';


//componentes
import AgregarCita from './componentes/AgregarCita';
import ListadoCitas from './componentes/ListadoCitas';


function App() {

  return (

    //rodemaos con  el prdvider y pasamos el store para que esté disponible en toda la app
    <Provider store={store}>
      <div className="container">
        <header>
          <h1 className="text-center">Administración de pacientes de veternaria</h1>
        </header>
        <div className="row mt-3">
          <div className="col-md-6">
            <AgregarCita />
          </div>

          <div className="col-md-6">
            <ListadoCitas/>
        </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
