import React from 'react';

function App() {
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Panel React</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-header bg-blue-700">
              <h3 className="card-title text-white">Componente React</h3>
            </div>
            <div className="card-body">
              <p>Este es un componente React integrado con AdminLTE</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
