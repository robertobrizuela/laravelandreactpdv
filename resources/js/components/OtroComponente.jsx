import React from 'react';

function OtroComponente() {
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Otro Componente</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-header bg-blue-700">
              <h3 className="card-title text-white">Segunda Ruta</h3>
            </div>
            <div className="card-body">
              <p>Este es otro componente de React</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OtroComponente;