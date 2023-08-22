import { HeaderBetween, NavLinks, UL } from "./styles";
import SearchField from "../SerachForm"; 

export default function HeaderSite(props) {
  console.log(props);
  return (

    <HeaderBetween>
      <SearchField />
      <NavLinks>

        <UL>

          <li>Local de jogos</li>
          <li>Campeonatos</li>
          <li>Notícias</li>
          <li>Tabela de jogos</li>
          <lt>Palpite</lt>

        </UL>
      </NavLinks>
      <SearchField />
    </HeaderBetween>
  );
}
