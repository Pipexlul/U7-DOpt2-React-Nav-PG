const Home: React.FC = () => {
  return (
    <div>
      <h2>Welcome</h2>
      <h1>💻 React Navbar Playground 💻</h1>

      <div>
        <div>
          <label>Agregar opción</label>
          <input placeholder="Titulo" />
          <input placeholder="Ruta" />
          <button>agregar</button>
        </div>

        <div>
          <label>Estilos</label>
          <input placeholder="Color de Fondo" />
          <input placeholder="Color de texto" />
        </div>
      </div>
    </div>
  );
};

export default Home;
