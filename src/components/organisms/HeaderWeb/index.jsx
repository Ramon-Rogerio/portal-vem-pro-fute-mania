import { HeaderBetween, NavLinks, UL } from "./styles";

export default function HeaderSite(props) {
  console.log(props);
  return (

    <HeaderBetween>
      <SearchField />
      <NavLinks>

        <UL>

          <lt>Local de jogos</lt>
          <lt>Campeonatos</lt>
          <lt>Notícias</lt>
          <lt>Tabela de jogos</lt>
          <lt>Palpite</lt>

        </UL>
      </NavLinks>
      <SearchField />
    </HeaderBetween>
  );
}
