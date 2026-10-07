import './App.css';

function App() {
  const alumnos = [
    { id: 1, nombre: 'tristan', carrera: 'Ing. Sistemas' },
  ];

  return (
    <div className="contenedor">
      <h1>Primer Parcial</h1>

      <h2>Tarjetas</h2>
      <div className="tarjetas">
        <div className="tarjeta">
          <h3>Tristan</h3>
          <p>estas haciendo maguea</p>
        </div>

        <div className="tarjeta">
          <h3>axel</h3>
          <p>estas haciendo maguea</p>
        </div>

        <div className="tarjeta">
          <h3>lechuga</h3>
          <p>estas haciendo maguea</p>
        </div>

        <div className="tarjeta">
          <h3>rodriguez</h3>
          <p>estas haciendo maguea</p>
        </div>
      </div>

      <h2>Tabla</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Carrera</th>
          </tr>
        </thead>
        <tbody>
          {alumnos.map((a) => (
            <tr key={a.id}>
              <td>{a.id}</td>
              <td>{a.nombre}</td>
              <td>{a.carrera}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;