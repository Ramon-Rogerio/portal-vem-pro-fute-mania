import { HeaderBetween, NavLinks, UL } from "./styles";

export default function HeaderSite(props) {
  console.log(props);
  return (
    <HeaderBetween>
      <NavLinks>

        <UL>

          <lt>Local de jogos</lt>
          <lt>Campeonatos</lt>
          <lt>Notícias</lt>
          <lt>Tabela de jogos</lt>
          <lt>Palpite</lt>

        </UL>
      </NavLinks>
    </HeaderBetween>
  );
}
