import SearchField from "../SerachForm";
import { HeaderBetween, NavLinks } from "./styles";

export default function HeaderSite(props) {
  console.log(props);
  return (
    
    <HeaderBetween>
      <SearchField />
      <NavLinks>
        <ul>
            <li>Local de jogos</li>
            <li>Campeonatos</li>
            <li>Notícias</li>
            <li>Tabela de jogos</li>
            <li>Palpite</li>
        </ul>
      </NavLinks>
      <SearchField />
    </HeaderBetween>
  );
}
