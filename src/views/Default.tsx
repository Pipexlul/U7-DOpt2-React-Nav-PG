import { useParams } from "react-router-dom";

const Default: React.FC = () => {
  const { custom } = useParams();

  return (
    <>
      <h1>
        Estas en la ruta: <b>{custom}</b>
      </h1>
    </>
  );
};

export default Default;
