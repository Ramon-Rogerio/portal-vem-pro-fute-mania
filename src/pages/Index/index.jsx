import { Link } from "react-router-dom";
import HeaderSite from "../../components/organisms/HeaderWeb";

export default function Index() {
  return (
    <>
      <HeaderSite />
      <h1>Home</h1>
      <Link to='/registrar-workspace'>Criar meu campeonato</Link>
    </>
  );
}
