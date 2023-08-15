import { Link } from "react-router-dom";

export default function Index() {
  return (
    <>
      <h1>Home</h1>
      <Link to='/registrar-workspace'>Criar meu campeonato</Link>
    </>
  );
}
